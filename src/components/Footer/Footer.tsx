import React from "react";
import { FaGithub } from "react-icons/fa";
import { IconContext } from "@react-icons/all-files";
import styles from "./Footer.module.css";

const Footer = () => {
  return (
    <div className={styles.container}>
      <h2>Expense Tracker App</h2>
      <p>Made By</p>
      <h3>USAMA IFTIKHAR</h3>
      <IconContext.Provider value={{ color: "white", size: "2rem" }}>
        <div className={styles.socialIcons}>
          <a
            href="https://github.com/SharjeelSafdar/project7a1-expense-tracker-pwa"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaGithub className={styles.socialIcon} title="Contact Us" />
          </a>
        </div>
      </IconContext.Provider>
    </div>
  );
};

export default Footer;
