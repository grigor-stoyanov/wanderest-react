import classes from "./Card.module.css";
import { PropsWithChildren, Key } from "react";

const Card = (props: PropsWithChildren<{ key: Key; childClass?: string }>) => {
  return (
    <div
      className={
        props.childClass
          ? [classes.card, props.childClass].join(" ")
          : classes.card
      }
    >
      {props.children}
    </div>
  );
};

export default Card;
