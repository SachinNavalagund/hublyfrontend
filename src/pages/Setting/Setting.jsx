import React from "react";
import styles from "./Setting.module.css";
import Sidebar from "../../components/Sidebar/Sidebar";

const Setting = () => {
  return (
    <div className={styles.container}>
      <Sidebar />
      <div className={styles.settingDiv}>
        <p className={styles.pageHeading}>Setting</p>
      </div>
    </div>
  );
};

export default Setting;
