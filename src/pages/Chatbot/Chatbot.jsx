import React from "react";
import styles from "./Chatbot.module.css";
import Sidebar from "../../components/Sidebar/Sidebar";

const Chatbot = () => {
  return (
    <div className={styles.container}>
      <Sidebar />
      <div className={styles.chatbotDiv}>
        <p className={styles.pageHeading}>Chat Bot</p>
      </div>
    </div>
  );
};

export default Chatbot;
