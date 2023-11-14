import { Form, Link } from "react-router-dom";
import Card from "../../../components/ui/Card";
import classes from "./RegsiterPage.module.css";

const RegisterPage = () => {
  return (
    <Card childClass={classes.register} key="LoginForm">
      <h2>Don't have an account?</h2>
      <h4>Sign Up</h4>
      <div className={classes.registerOptions}>
        <Form className={classes.registerForm}>
          <div className={classes.registerInput}>
            <label htmlFor="email">Email:</label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Enter your Email"
            ></input>
          </div>
          <div className={classes.registerInput}>
            <label htmlFor="password">Password:</label>
            <input
              type="password"
              id="password"
              name="password"
              placeholder="Enter your Password"
            ></input>
          </div>{" "}
          <div className={classes.registerInput}>
            <label htmlFor="password">Confirm Password:</label>
            <input
              type="password"
              id="password"
              name="password"
              placeholder="Confirm your Password"
            ></input>
          </div>
          <button type="submit">Register</button>
          
          <Link to="/auth">Already have an account?</Link>
        </Form>
        <div className={classes.registerSocials}>
          <h6>Or Sign Up with your socials!</h6>
          <div className={classes.socialOptions}>
          <i className="bi bi-meta"></i>
          <i className="bi bi-instagram"></i>
          <i className="bi bi-google"></i>
          </div>
        </div>
      </div>
    </Card>
  );
};

export default RegisterPage;
