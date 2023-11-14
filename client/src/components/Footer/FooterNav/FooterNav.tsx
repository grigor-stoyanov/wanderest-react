import {
  motion,
  spring,
  useMotionValueEvent,
  useScroll,
  useTransform,
} from "framer-motion";
import classes from "./FooterNav.module.css";
import { useEffect, useRef, useState } from "react";

export const FooterNav = () => {
  const { scrollY } = useScroll();
  const [direction, setDirection] = useState<string>();
  const prev = useRef(scrollY.get());

  useMotionValueEvent(scrollY, "change", (latest) => {
    if (latest - prev.current < 0 && direction !== "down") {
      setDirection("down");
    } else if (latest - prev.current > 0 && direction !== "up") {
      setDirection("up");
    }
    prev.current = latest;
  });
  return (
    <motion.div
      initial={{}}
      animate={direction === "up" ? { y: '100%' } : {}}
      transition={{ type: "spring" }}
      className={classes.footerNav}
    >
      <button>
        <i className="bi bi-heart-fill" />
        <label>Favourites</label>
      </button>
      <button>
        <i className="bi bi-house-add-fill" />
        <label>List</label>
      </button>
      <button>
        <i className="bi bi-person-circle" />
        <label>Log in</label>
      </button>
    </motion.div>
  );
};
