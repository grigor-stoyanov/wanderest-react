import { Children, PropsWithChildren } from "react";
import logo from "../../assets/logo.png";
import LanguageSelector from "../../components/LanguageSelector/LanguageSelector";
import classes from "./MainHeaderNavigation.module.css";
import { Link } from "react-router-dom";
import AuthDropdown from "../AuthDropdown/AuthDropdown";
import useWindowDimension from "../../hooks/window-dimension-hook";

export const MAX_WINDOW_WIDTH = 630;

const MainHeaderNavigation = (props: PropsWithChildren) => {
  const { windowDimension } = useWindowDimension();

  function isReponsive(hasChildren: boolean) {
    if (hasChildren) {
      return windowDimension.width > MAX_WINDOW_WIDTH;
    } else {
      return true;
    }
  }

  return (
    <nav className={classes.navigation}>
      <ul role="list">
        <li className={classes.logo}>
          <Link to="/">
            <img className={classes.logo} src={logo} />
          </Link>
        </li>
        <li className={classes.middleControls}>{props.children}</li>

        {isReponsive(Children.count(props.children) !== 0) && (
          <li className={classes.links}>
            <Link to="/listings/new">List your home</Link>
            <AuthDropdown />
          </li>
        )}
        <li>
          <LanguageSelector />
        </li>
      </ul>
    </nav>
  );
};

export default MainHeaderNavigation;
