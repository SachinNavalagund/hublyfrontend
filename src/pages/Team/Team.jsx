import React from "react";
import styles from "./Team.module.css";
import Sidebar from "../../components/Sidebar/Sidebar";

const Team = () => {
  return (
    <div className={styles.container}>
      <Sidebar />
      <div className={styles.teamDiv}>
        <p className={styles.pageHeading}>Team</p>
      </div>
    </div>
  );
};

export default Team;
