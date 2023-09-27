import React from "react";
import { FaFacebook, FaInstagram, FaLinkedin } from "react-icons/fa";
import styles from "../styles/Footer.module.css"


function Footer() {
  return (
    <footer className={styles.footer}>
      <ul className={styles.social_list}>
        <li>
        <a href="https://www.facebook.com/greicysantanaf/?locale=pt_BR"><FaFacebook/></a>
        </li>
        <li>
        <a href="https://www.instagram.com/greicyellem/"><FaInstagram/></a>
        </li>
        <li>
        <a href="https://www.linkedin.com/in/greicyellem/"><FaLinkedin /></a>
        </li>
      </ul>
      <p className={styles.copy_right}>
        <span>Criador de Tarefas</span> &copy; 2023
      </p>
    </footer>
  );
}

export default Footer;
