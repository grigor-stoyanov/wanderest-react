import { Form, Link } from "react-router-dom";
import Card from "../../../components/ui/Card";
import classes from "./LoginPage.module.css";

const LoginPage = () => {
  return (
    <Card childClass={classes.login} key="LoginForm">
      <h2>Already have an account?</h2>
      <h4>Sign In</h4>
      <div className={classes.loginOptions}>
        <Form className={classes.loginForm}>
          <div className={classes.loginInput}>
            <label htmlFor="email">Email:</label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Enter your Email"
            ></input>
          </div>
          <div className={classes.loginInput}>
            <label htmlFor="password">Password:</label>
            <input
              type="password"
              id="password"
              name="password"
              placeholder="Enter your Password"
            ></input>
          </div>
          <button type="submit">Login</button>
          <Link to="/auth/register">Don't have an account?</Link>
        </Form>
        <div className={classes.loginSocials}>
            <h6>Or Sign In with your socials!</h6>
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

export default LoginPage;
