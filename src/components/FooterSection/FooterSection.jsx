import React from "react";
import styles from "./FooterSection.module.css";
import { BsCloudHaze2 } from "react-icons/bs";
import FooterLinks from "../FooterLinks/FooterLinks";

const FooterSection = () => {
  return (
    <footer className={styles.container}>
      <div className={styles.footerLogo}>
        <BsCloudHaze2 size={56} fill="#184E7F" />
        <p className={styles.footerCompanyName}>Hubly</p>
      </div>
      <FooterLinks />
    </footer>
  );
};

export default FooterSection;
