import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import classes from "./AuthDropdown.module.css";
import useGlobalClick from "../../hooks/global-click-hook";
import { Link } from "react-router-dom";

const AUTH_MENU = [
 { name:'Profile',link:'/profile',iconClass:'bi bi-person-circle'},
  {name:'Login',link:'/login',iconClass:'bi bi-key-fill'},
  {name:'Register',link:'/register',iconClass:'bi bi-person-lock'}
]

const AuthDropdown = () => {
  
  const [isHovered, setIsHovered] = useState<Boolean>(false);
  const parent = useRef(null);
  const { clickedOutside: toHide } =
    useGlobalClick([],parent);
  useEffect(()=>{
    if(toHide){
      setIsHovered(false)
    }else{
      setIsHovered(true)
    }
  },[toHide])
  return (
    <div>
    <button ref={parent}      onClick={() => setIsHovered((s) => !s)} className={classes.auth}>
      <i className="bi bi-list" /> <i className="bi bi-person-circle" />
    </button>
     {isHovered && (
      <motion.ul
        onClick={() => setIsHovered((s) => !s)}
        animate="visible"
        variants={{ visible: { transition: { staggerChildren: 0.1 } } }}
        role="list"
      >
            {Object.values(AUTH_MENU).map((a, index) => (
            <motion.li
              variants={{
                hidden: { opacity: 0, scale: 0.5 },
                visible: {
                  opacity: 1,
                  scale: [0.8, 1.3, 1],
                },
              }}
              transition={{ type: "spring" }}
              key={a.toString()}
              className={classes.authMenu}
            >
              <motion.p whileHover={{ scale: 1.2, color: "#DC2E2B" }}>
              <i className={`${a.iconClass}`} /><Link to={`${a.link}`}>{a.name}</Link>
              </motion.p>
            </motion.li>
          ))}
      </motion.ul>)}
      </div>
  );
};

export default AuthDropdown;
