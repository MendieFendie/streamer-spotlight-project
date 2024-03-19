import React from "react";
import { Link } from "react-router-dom";
import css from "./Footer.module.css";

const Footer = () => {
  return (
    <footer className={css.footer}>
      <div className={css.footerContent}>
        <p>© 2024 Streamer Spotlight. All rights reserved.</p>
        <div className={css.footerLinks}>
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
          <Link to="https://www.instagram.com/o.savaryn/" target="_blank">
            Find me on Instagram
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
