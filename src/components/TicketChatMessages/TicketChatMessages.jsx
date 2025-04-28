import React from "react";
import styles from "./TicketChatMessages.module.css";
import UserProfileImg from "/img.svg";

const TicketChatMessages = () => {
  const role = "member";
  const ticketAssigned = true;
  //   const date = new Date();

  //   const formattedDate = date.toLocaleDateString("en-US", {
  //     month: "long",
  //     day: "numeric",
  //     year: "numeric",
  //   });

  return (
    <div className={styles.chatMessageDiv}>
      <div className={styles.chatDateDiv}>
        <div className={styles.chatDateBorder}></div>
        <div className={styles.chatDate}>
          <p>April 28, 2025</p>
        </div>
        {!(role === "member" && ticketAssigned === false) && (
          <div className={styles.chatMessagesDiv}>
            {/* User chat */}
            <div className={styles.userChat}>
              <div className={styles.userChatImg}>
                <img src={UserProfileImg} alt="" width={30} height={30} />
              </div>
              <div className={styles.userChatInfo}>
                <p className={styles.userChatName}>Chat 1</p>
                <p className={styles.userChatLatestMessage}>
                  I have a question
                </p>
              </div>
            </div>

            <div className={styles.missedChat}>
              <p>Replying to missed chat</p>
            </div>

            {/* Admin or member chat */}
            <div className={styles.supportChat}>
              <div className={styles.supportChatInfo}>
                <p className={styles.supportChatName}>Chat 1</p>
                <p className={styles.supportChatLatestMessage}>
                  Go head with your Question
                </p>
              </div>
              <div className={styles.supportChatImg}>
                <img src={UserProfileImg} alt="" width={30} height={30} />
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default TicketChatMessages;
