import classes from "./GeneralButton.module.css";

interface props extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  content: string;
}

const Button = ({ content, ...attrs }: props) => {
  return (
    <button className={classes.button} {...attrs}>
      {content}
    </button>
  );
};

export default Button;
