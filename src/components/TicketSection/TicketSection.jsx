import React, { useState } from "react";
import styles from "./TicketSection.module.css";
import Sms from "/sms.svg";
import Avatar from "../../../public/People.svg";
import { Link } from "react-router-dom";

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
        {/* Separate ticket */}
        <div className={styles.ticket}>
          {/* ticket info div */}
          <div className={styles.ticketInfoDiv}>
            {/* ticket title div with timer and ticket head */}
            <div className={styles.ticketTitleDiv}>
              {/* title container */}
              <div className={styles.titleContainer}>
                {/* title name div */}
                <div className={styles.titleDiv}>
                  <div className={styles.mark} />
                  <div className={styles.title}>Ticket# 2023-00123</div>
                </div>
                {/* title time div */}
                <div className={styles.titleTimer}>
                  <p className={styles.time}>Posted at 12:45 AM</p>
                </div>
              </div>
            </div>

            <div className={styles.ticketQuestionContainer}>
              <p className={styles.ticketQuestion}>Hey!</p>
              <p className={styles.timer}>10:00</p>
            </div>
          </div>
          {/* ticket raised by person div */}
          <div className={styles.ticketRaisedPersonDiv}>
            <div className={styles.ticketAuthor}>
              <img src={Avatar} alt="avatar" />
              <div className={styles.authorInfo}>
                <p className={styles.name}>John Snow</p>
                <div className="">
                  <p className={styles.phoneNumber}>9108243072</p>
                  <p className={styles.email}>john@gmail.com</p>
                </div>
              </div>
            </div>
            <Link className={styles.ticketLink}>Open Ticket</Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default TicketSection;
