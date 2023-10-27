import { motion } from "framer-motion";
import { MouseEventHandler, useEffect, useRef, useState } from "react";
import LANGUAGES from "./LanguageEnum";
import classes from "./LanguageSelector.module.css";
import useGlobalClick from "../../hooks/global-click-hook";

const LanguageSelector = () => {
  const [lang, setLang] = useState<String>(LANGUAGES.EN);
  const [isHovered, setIsHovered] = useState(false);
  const parent = useRef(null);
  const { clickedOutside: toHide } =
    useGlobalClick([],parent);

  const setLanguageHandler: MouseEventHandler = (e) => {
    e.stopPropagation();
    setLang(e.currentTarget.textContent!);
    setIsHovered(false);
  };
  useEffect(()=>{
    if(toHide){
      setIsHovered(false)
    }else{
      setIsHovered(true)
    }
  },[toHide])

  return (
    <div
      ref={parent}
      className={classes.languageWrapper}
      onClick={() => setIsHovered((s) => !s)}
    >
      <motion.div className={classes.language} whileHover={{ scale: 1.1 }}>
        {lang}
      </motion.div>
      {isHovered && (
        <motion.ul
          onClick={() => setIsHovered((s) => !s)}
          animate="visible"
          variants={{ visible: { transition: { staggerChildren: 0.1 } } }}
          role="list"
        >
          {Object.values(LANGUAGES).map((l, index) => (
            <motion.li
              style={{ y: index * 50 + 10 }}
              variants={{
                hidden: { opacity: 0, scale: 0.5 },
                visible: {
                  opacity: 1,
                  scale: [0.8, 1.3, 1],
                },
              }}
              transition={{ type: "spring" }}
              className={lang == l ? classes.active : ""}
              onClick={setLanguageHandler}
              key={l}
            >
              <motion.p whileHover={{ scale: 1.2, color: "#DC2E2B" }}>
                {l}
              </motion.p>
            </motion.li>
          ))}
        </motion.ul>
      )}
    </div>
  );
};

export default LanguageSelector;
