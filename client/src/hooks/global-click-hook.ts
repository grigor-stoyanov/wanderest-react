import { useEffect, useState } from "react";
import { deepNodeChecker } from "../helpers/deepNodeChecker";

// TODO refactor how clicks are detected outside of element
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
        // If click detected outside parent container for element without self-hiding togglers
        if (childrenRefs.length === 0) {
          return (
            parentRef.current &&
            !deepNodeChecker(event.target as HTMLElement, parentRef.current)
          );
        }
        // If click detected BELOW parent container for element with specific togglers
        return childrenRefs.reduce(
          (acc, v) => {
            // Check if any of the togglers are clicked
            if (
              v.current &&
              !(event.clientY > parentRef.current?.getBoundingClientRect().bottom!)
            ) {
              return false;
            }
            return acc;

            // if no togglers are clicked check weather clicked element is in parent
          },
          prevState
            ? true
            : parentRef.current &&
                (event.clientY >
                  parentRef.current?.getBoundingClientRect().bottom!)
        );
      });
    };

    // Attach the event listener to the document
    document.addEventListener("click", handleClickOutside);

    // Cleanup: Remove the event listener when the component unmounts
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);

  return { clickedOutside, resetClickedOutsideState };
};

export default useGlobalClick;
