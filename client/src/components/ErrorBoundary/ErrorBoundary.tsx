import { motion } from "framer-motion";
import classes from "./ErrorBoundary.module.css";
import { Link } from "react-router-dom";
const ErrorBoundary = () => {
  return (
    <motion.div
      transition={{ duration: 0.5, repeat: Infinity,repeatType:"reverse" }}
      animate={{ x:-1, textShadow: "#ff006a -2px 0, #1ac751 2px 0" }}
      className={classes.error}
    >
      <h1 className={classes.code}>404</h1>
      <p className={classes.message}>
        The page you're looking for is not here yet!
      </p>
      <Link to="..">Back</Link>
    </motion.div>
  );
};

export default ErrorBoundary;
