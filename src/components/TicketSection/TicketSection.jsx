import React, { useState } from "react";
import styles from "./TicketSection.module.css";
import Sms from "/sms.svg";

const TicketSection = () => {
  const [activeTab, setActiveTab] = useState("all");
  return (
    <>
      <div className={styles.ticketStatus}>
        <div
          className={`${styles.allTicketStatus} ${
            activeTab === "all" ? styles.active : ""
          }`}
          onClick={() => setActiveTab("all")}>
          <img
            src={Sms}
            alt=""
            className={`${styles.icon} ${
              activeTab === "all" ? styles.activeIcon : ""
            }`}
          />
          <p className={styles.statusText}>All Tickets</p>
        </div>

        <div
          className={`${styles.resolvedStatus} ${
            activeTab === "resolved" ? styles.active : ""
          }`}
          onClick={() => setActiveTab("resolved")}>
          <p className={styles.statusText}>Resolved</p>
        </div>

        <div
          className={`${styles.unresolvedStatus} ${
            activeTab === "unresolved" ? styles.active : ""
          }`}
          onClick={() => setActiveTab("unresolved")}>
          <p className={styles.statusText}>Unresolved</p>
        </div>
      </div>
      <div className={styles.ticketStatusBorder} />
      <div className={styles.ticketDiv}>
        <div className={styles.ticket}></div>
        <div className={styles.ticket}></div>
      </div>
    </>
  );
};

export default TicketSection;
