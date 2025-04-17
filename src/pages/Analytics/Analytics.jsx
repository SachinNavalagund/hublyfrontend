import React from "react";
import styles from "./Analytics.module.css";
import Sidebar from "../../components/Sidebar/Sidebar";

const Analytics = () => {
  return (
    <div className={styles.container}>
      <Sidebar />
      <div className={styles.analyticsDiv}>
        <p className={styles.pageHeading}>Analytics</p>
      </div>
    </div>
  );
};

export default Analytics;
