import MainHeaderNavigation, {
  MAX_WINDOW_WIDTH,
} from "../../components/MainHeaderNavigation/MainHeaderNavigation";
import classes from "./Home.module.css";
import Footer from "../../components/Footer/Footer";

import PlacesList from "../../components/PlacesList/PlacesList";
import Filters from "../../components/Filters/Filters";
import { motion } from "framer-motion";
import { useRef } from "react";
import { FooterNav } from "../../components/Footer/FooterNav/FooterNav";
import useWindowDimension from "../../hooks/window-dimension-hook";

const Home = () => {
  const headerRef = useRef(null);
  const { windowDimension } = useWindowDimension();

  return (
    <>
      <motion.header
        ref={headerRef}
        layout
        transition={{ type: "spring", maxHeight: { ease: "linear" } }}
        className={classes.header}
      >
        <MainHeaderNavigation>
          <Filters headerRef={headerRef} />
        </MainHeaderNavigation>
        <div id="filterInputs"></div>
        <div id="filterPopups"></div>
      </motion.header>
      
      <main>
    {windowDimension.width < MAX_WINDOW_WIDTH && <FooterNav />}
        <section className={classes.heading}>
          <h1>Browse trough our places</h1>
          <div className={classes.sort}>
            <label>My Listings:</label>
            <input type="checkbox" />
            <label>By Price:</label>
            <i className="bi bi-sort-numeric-up" />
            <label>By Location:</label>
            <i className="bi bi-sort-alpha-down" />
            <label>By Availability:</label>
            <i className="bi bi-sort-up" />
          </div>
        </section>
        <section className={classes.places}>
          <PlacesList />
        </section>
      </main>
      <footer>
        <Footer />
      </footer>
    </>
  );
};

export default Home;
