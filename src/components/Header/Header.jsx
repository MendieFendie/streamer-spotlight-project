import styles from "./Header.module.css";
import { Link } from "react-router-dom";
import { useState } from "react";

function Header({ onModalOpen }) {
  return (
    <header className={styles.header}>
      <Link to="/main" className={styles.mainButton}>
        Main
      </Link>
      <button className={styles.addButton} onClick={onModalOpen}>
        Add Streamer
      </button>
    </header>
  );
}

export default Header;
