import { Children, PropsWithChildren } from "react";
import logo from "../../assets/logo.png";
import LanguageSelector from "../../components/LanguageSelector/LanguageSelector";
import classes from "./MainHeaderNavigation.module.css";
import { Link } from "react-router-dom";
import AuthDropdown from "../AuthDropdown/AuthDropdown";
import useWindowDimension from "../../hooks/window-dimension-hook";

const MAX_WINDOW_WIDTH = 630;

const MainHeaderNavigation = (props: PropsWithChildren) => {
  const { windowDimension } = useWindowDimension();
  return (
    <nav className={classes.navigation}>
      <ul role="list">
        <li className={classes.logo}>
          <Link to="/">
            <img className={classes.logo} src={logo} />
          </Link>
        </li>
        <li className={classes.middleControls}>{props.children}</li>
        {windowDimension.width > MAX_WINDOW_WIDTH && (
          <li className={classes.links}>
            <Link to="/listings/new">List your home</Link>
            <LanguageSelector />
            <AuthDropdown />
          </li>
        )}
      </ul>
    </nav>
  );
};

export default MainHeaderNavigation;
