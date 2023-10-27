import classes from "./Card.module.css";
import { PropsWithChildren, Key } from "react";

const Card = (props: PropsWithChildren<{ key: Key }>) => {
  return <div className={classes.card}>{props.children}</div>;
};

export default Card;
