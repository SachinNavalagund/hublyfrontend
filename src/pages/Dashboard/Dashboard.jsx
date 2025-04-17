import React from "react";
import styles from "./Dashboard.module.css";
import Sidebar from "../../components/Sidebar/Sidebar";

const Dashboard = () => {
  return (
    <div className={styles.container}>
      <Sidebar />
      <div className={styles.dashboardDiv}>
        <p className={styles.pageHeading}>Dashboard</p>
      </div>
    </div>
  );
};

export default Dashboard;
