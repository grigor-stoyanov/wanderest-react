import { Outlet } from "react-router-dom";
import classes from "./Auth.module.css";
import MainHeaderNavigation from "../../components/MainHeaderNavigation/MainHeaderNavigation";
import Footer from "../../components/Footer/Footer";

const AuthLayout = () => {
  return (
    <>
      <header className={classes.header}>
        <MainHeaderNavigation />
      </header>
      <main>
        <section className={classes.authForm}>
          <Outlet />
        </section>
      </main>
      <footer>
        <Footer />
      </footer>
    </>
  );
};

export default AuthLayout;
