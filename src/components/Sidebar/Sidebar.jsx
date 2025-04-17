import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import styles from "./Sidebar.module.css";

import { BsCloudHaze2 } from "react-icons/bs";
import Avatar from "/gg_profile.svg";
import DashboardIcon from "/dashboard.svg";
import ContactCenterIcon from "/contactcenter.svg";
import AnalyticsIcon from "/analytics.svg";
import ChatbotIcon from "/chatbot.svg";
import TeamIcon from "/team.svg";
import SettingsIcon from "/settings.svg";

const Sidebar = () => {
  const navigate = useNavigate();
  const { pathname } = useLocation();

  return (
    <div className={styles.container}>
      <div className="">
        <button className={styles.logo} onClick={() => navigate("/")}>
          <BsCloudHaze2 size={45} color="184E7F" />
        </button>

        <div
          className={styles.iconWithNameDiv}
          onClick={() => navigate("/dashboard")}>
          <img
            src={DashboardIcon}
            alt="dashboard icon"
            className={styles.iconImage}
          />
          {pathname === "/dashboard" && (
            <p className={styles.name}>Dashboard</p>
          )}
        </div>

        <div
          className={styles.iconWithNameDiv}
          onClick={() => navigate("/contact-center")}>
          <img
            src={ContactCenterIcon}
            alt="dashboard icon"
            className={styles.iconImage}
          />
          {pathname === "/contact-center" && (
            <p className={styles.name}>Contact Center</p>
          )}
        </div>

        <div
          className={styles.iconWithNameDiv}
          onClick={() => navigate("/analytics")}>
          <img
            src={AnalyticsIcon}
            alt="dashboard icon"
            className={styles.iconImage}
          />
          {pathname === "/analytics" && (
            <p className={styles.name}>Analytics</p>
          )}
        </div>

        <div
          className={styles.iconWithNameDiv}
          onClick={() => navigate("/chat-bot")}>
          <img
            src={ChatbotIcon}
            alt="dashboard icon"
            className={styles.iconImage}
          />
          {pathname === "/chat-bot" && <p className={styles.name}>Chat bot</p>}
        </div>

        <div
          className={styles.iconWithNameDiv}
          onClick={() => navigate("/team")}>
          <img
            src={TeamIcon}
            alt="dashboard icon"
            className={styles.iconImage}
          />
          {pathname === "/team" && <p className={styles.name}>Team</p>}
        </div>

        <div
          className={styles.iconWithNameDiv}
          onClick={() => navigate("/setting")}>
          <img
            src={SettingsIcon}
            alt="dashboard icon"
            className={styles.iconImage}
          />
          {pathname === "/setting" && <p className={styles.name}>Setting</p>}
        </div>
      </div>

      <div className={styles.avatarIcon}>
        <img src={Avatar} alt="avatar icon" />
      </div>
    </div>
  );
};

export default Sidebar;
