import { useEffect, useState } from "react";

const useGlobalClick = (
  childrenRefs: React.RefObject<HTMLElement>[],
  parentRef: React.RefObject<HTMLElement>
) => {
  const [clickedOutside, setClickedOutside] = useState<Boolean | null>(true);
  const resetClickedOutsideState = () => {
    setClickedOutside(true);
  };

  useEffect(() => {
    // Function to handle clicks outside the component
    const handleClickOutside = (event: MouseEvent) => {
      setClickedOutside((prevState) => {
        if (childrenRefs.length === 0) {
          return (
            parentRef.current &&
                !parentRef.current.contains(event.target as Node)
          );
        }
        return childrenRefs.reduce(
          (acc, v) => {
            // Check if any of the togglers are clicked
            if (v.current && v.current.contains(event.target as Node)) {
              return false;
            }
            return acc;

            // if no togglers are clicked check weather clicked element is in parent
          },
          prevState
            ? true
            : parentRef.current &&
                !parentRef.current.contains(event.target as Node)
        );
      });
    };

    // Attach the event listener to the document
    document.addEventListener("click", handleClickOutside);

    // Cleanup: Remove the event listener when the component unmounts
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, [parentRef.current, childrenRefs]);

  return { clickedOutside, resetClickedOutsideState };
};

export default useGlobalClick;
