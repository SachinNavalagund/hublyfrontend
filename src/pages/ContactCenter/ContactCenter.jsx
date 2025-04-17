import React from "react";
import styles from "./ContactCenter.module.css";
import Sidebar from "../../components/Sidebar/Sidebar";

const ContactCenter = () => {
  return (
    <div className={styles.container}>
      <Sidebar />
      <div className={styles.contactCenterDiv}>
        <p className={styles.pageHeading}>Contact Center</p>
      </div>
    </div>
  );
};

export default ContactCenter;
