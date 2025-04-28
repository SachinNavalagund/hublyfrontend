import React from "react";
import styles from "./ContactCenter.module.css";
import Sidebar from "../../components/Sidebar/Sidebar";
import UserProfileImg from "/img.svg";
import ContactChatProfile from "../../components/ContactChatProfile/ContactChatProfile";
import HomeIcon from "/material-symbols-light_home-outline-rounded.svg";
import TicketChatInput from "../../components/TicketChatInput/TicketChatInput";
import TicketChatMessages from "../../components/TicketChatMessages/TicketChatMessages";

const ContactCenter = () => {
  return (
    <div className={styles.container}>
      <Sidebar />
      <div className={styles.layout}>
        {/* left side chat section */}
        <div className={styles.contactCenterChatHeadDiv}>
          <p className={styles.pageHeading}>Contact Center</p>

          <div className={styles.chatsHeadDiv}>
            <div className={styles.chatHeading}>
              {/* chat heading */}
              <div className={styles.headingDiv}>
                <p className={styles.heading}>Charts</p>
              </div>
            </div>
            {/* chats */}
            <div className={styles.chats}>
              <div className={styles.chat}>
                <div className={styles.chatImg}>
                  <img src={UserProfileImg} alt="" width={30} height={30} />
                </div>
                <div className={styles.chatInfo}>
                  <p className={styles.chatName}>Chat 1</p>
                  <p className={styles.chatLatestMessage}>I have a question</p>
                </div>
              </div>

              <div className={styles.chat}>
                <div className={styles.chatImg}>
                  <img src={UserProfileImg} alt="" width={30} height={30} />
                </div>
                <div className={styles.chatInfo}>
                  <p className={styles.chatName}>Chat 1</p>
                  <p className={styles.chatLatestMessage}>I have a question</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* middle chat messages */}
        <div className={styles.contactCenterChatDiv}>
          <div className={styles.ticketHeading}>
            <span>Ticket# 2025-00123</span>
            <img src={HomeIcon} alt="Home Icon" />
          </div>

          <TicketChatMessages />

          <TicketChatInput />
        </div>

        {/* user profile and ticket assign */}
        <ContactChatProfile />
      </div>
    </div>
  );
};

export default ContactCenter;
