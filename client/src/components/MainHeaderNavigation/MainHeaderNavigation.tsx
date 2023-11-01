import { Children, PropsWithChildren } from "react";
import logo from "../../assets/logo.png";
import LanguageSelector from "../../components/LanguageSelector/LanguageSelector";
import classes from "./MainHeaderNavigation.module.css";
import { Link } from "react-router-dom";
import AuthDropdown from "../AuthDropdown/AuthDropdown";
const MainHeaderNavigation = (props: PropsWithChildren) => {
  return (
    <nav className={classes.navigation}>
      <ul role="list">
        <li className={classes.logo}>
          <Link to="/">
            <img className={classes.logo} src={logo} />
          </Link>
        </li>
        <li>{props.children}</li>
        <li className={classes.links}>
          <Link to="/listings/new">List your home</Link>
          <LanguageSelector />
          <AuthDropdown/>
        
        </li>
      </ul>
    </nav>
  );
};

export default MainHeaderNavigation;
