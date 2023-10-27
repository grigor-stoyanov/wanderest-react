// assets
import classes from "./Footer.module.css";
import logo from "../../assets/logo.png";
// libs
import { Link } from "react-router-dom";
import React from "react";
// local
import ContactForm from "./ContactForm";

const Footer = () => {
  

  return (
    <div className={classes.footer}>
      <section className={classes.brand}>
        <img src={logo} alt="logo" />
        <p>
          Tempor mollit veniam nisi et pariatur exercitation magna officia
          occaecat ad veniam ad tempor.
        </p>
        <div className={classes.socials}>
          <Link to="Nothing">
            <i className="bi bi-meta"></i>
          </Link>
          <Link to="Nothing">
            <i className="bi bi-twitter-x"></i>
          </Link>
          <Link to="Nothing">
            <i className="bi bi-instagram"></i>
          </Link>
        </div>
      </section>

      <section className={classes.navigation}>
        <nav>
          <ul role="list">
            <li>
              <Link to="nothing">Terms of Service</Link>
            </li>
            <li>
              <Link to="nothing">FAQ</Link>
            </li>
            <li>
              <Link to="nothing">About Us</Link>
            </li>
            <li>
              <Link to="nothing">General info</Link>
            </li>
            <li>
              <Link to="nothing">Job</Link>
            </li>
            <li>
              <Link to="nothing">Support</Link>
            </li>
            <li>
              <Link to="nothing">Become a partner</Link>
            </li>
            <li>
              <Link to="nothing">Privacy Policy</Link>
            </li>
            <li>
              <Link to="nothing">Refunds & Cancellation</Link>
            </li>
            <li>
              <Link to="nothing">Join Newsletter</Link>
            </li>
          </ul>
        </nav>
      </section>

      <section className={classes.contact}>
        <h4>CONTACT</h4>
        <ContactForm/>
        <ul role="list">
          <li>
            <span>
              <i className="bi bi-telephone"></i> + 01 234 567 89
            </span>
          </li>
          <li>
            <span>
              <i className="bi bi-envelope"></i> contact@example.com
            </span>
          </li>
          <li>
            <span>
              <i className="bi bi-geo-alt"></i> Warsaw, 57 Street, Poland
            </span>
          </li>
        </ul>
      </section>
    </div>
  );
};

export default React.memo(Footer);
