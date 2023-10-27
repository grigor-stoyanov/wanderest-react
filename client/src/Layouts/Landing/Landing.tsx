// assets
import classes from "./Landing.module.css";
import airbaloon from "../../assets/airbaloon.png";
import logo from "../../assets/logo.png";

// libs
import {
  useScroll,
  motion,
  useSpring,
  useTransform,
  MotionValue,
} from "framer-motion";
import React, { useEffect, useState } from "react";

// local
import LanguageSelector from "../../components/LanguageSelector/LanguageSelector";
import Footer from "../../components/Footer/Footer";
import { useNavigate } from "react-router-dom";
import MainHeaderNavigation from "../../components/MainHeaderNavigation/MainHeaderNavigation";

const Landing = () => {
  const navigate = useNavigate();
  const { scrollY } = useScroll();
  const spring = useSpring(scrollY, { stiffness: 10 });
  const balloonX = useTransform(spring,[0,2000],[0,1080])
  const balloonY = useTransform(spring, [0, 300, 400, 500], [0, 50, -50, 0]);
  const heroY = useTransform(scrollY, [0, 300, 400, 500], [0, 200, -200, -400]);
  const scaleText = useTransform(scrollY, [0, 300, 400, 500], [1, 1.3, 1.4, 1]);
  const textY = useTransform(
    scrollY,
    [0, 300, 400, 500],
    [0, -200, -300, -400]
  );
  const buttonY = useTransform(
    scrollY,
    [0, 300, 400, 500], 
    [0, -100, 200, 425]
  );
  const infoY = useTransform(scrollY, [0, 300, 400, 500], [0, 300, 0, -50]);

    
  useEffect(()=>{
    console.log(balloonX)
  },[balloonX])

  return (
    <div className={classes.landing}>
      <header className={classes.header}>
        <MainHeaderNavigation />
      </header>
      <main className={classes.main}>
        <motion.section style={{ y: heroY }} className={classes.hero}>
          <div className={classes.banner}>
            
             <motion.img
              style={{
                x: balloonX,
                y: balloonY,
              }}
              className={classes.balloon}
              src={airbaloon}
            />
            <motion.h1 style={{ scale: scaleText, y: textY }}>
              Travel and Rest comfortably with us.
            </motion.h1>
            <motion.p style={{ scale: scaleText, y: textY }}>
              Get the best value out of your stay.
            </motion.p>
            <motion.button
              onClick={() => navigate("/home")}
              whileHover={{ scale: 1.1 }}
              transition={{ type: "spring" }}
              style={{ y: buttonY }}
            >
              Get Started
            </motion.button>
          </div>
        </motion.section>
        <motion.section style={{ y: infoY }} className={classes.info}>
          <article>
            <h2>Time to explore</h2>
            <p>
              Nisi voluptate ex est labore ad nulla. Deserunt magna ex velit
              proident amet ad proident enim irure laboris anim ipsum. Ad velit
              cupidatat consectetur quis in dolore. Labore occaecat veniam ut
              sit incididunt ex. Ea eiusmod est ad sit qui consequat enim ea.
            </p>
          </article>
          <article>
            <h2>Why choose us?</h2>
            <p>
              Aliqua dolore incididunt cillum duis cillum non non aute. Do in
              cillum proident fugiat nisi aliquip elit laborum. Non aute et
              officia cupidatat pariatur non voluptate sunt velit commodo aliqua
              sunt elit dolor. Quis mollit exercitation id reprehenderit
              occaecat ut do. Nisi id excepteur dolore anim commodo fugiat.
              Minim in laboris duis ipsum veniam deserunt qui. Pariatur culpa
              ipsum velit velit nisi enim amet mollit ad mollit esse consequat
              ex.
            </p>
          </article>
          <article>
            <h2>What can we offer you?</h2>
            <ul>
              <li>Lorem magna laboris occaecat commodo.</li>
              <li>
                Velit deserunt do laboris ad nisi excepteur aliquip cupidatat
                aute.
              </li>
              <li>
                Exercitation voluptate anim duis est ad ullamco dolor ex
                deserunt enim veniam irure ipsum.
              </li>
            </ul>
          </article>
          <article>
            <h2>See what others think about our service!</h2>
            <p>
              Tempor eu cupidatat laborum aliquip adipisicing consectetur
              commodo quis exercitation consequat occaecat officia eiusmod. Sint
              ullamco deserunt elit laborum officia irure. Aliquip amet ex
              dolore consequat commodo nisi aliquip consequat excepteur velit.
              Proident veniam esse enim aliqua tempor ex est magna ullamco
              tempor deserunt. Do id ad pariatur est enim anim.
            </p>
            <span>Rating: 9/10</span>
            <h4>-Ipsum Gibbus</h4>
          </article>
        </motion.section>
      </main>

      <footer className={classes.footer}>
        <Footer />
        <section className={classes.copyright}>
          <span>All rights reserved. &copy;</span>
        </section>
      </footer>
    </div>
  );
};

export default Landing;
