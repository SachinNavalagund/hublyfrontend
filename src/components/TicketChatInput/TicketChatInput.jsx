import React, { useState } from "react";
import styles from "./TicketChatInput.module.css";
import SendIcon from "/sendIcon.svg";
import { chatInputSchema } from "../../helper/schema";
import { toast } from "react-toastify";

const TicketChatInput = () => {
  const [chat, setChat] = useState("");
  const chatStatus = "Unresolved";
  const role = "member";
  const ticketAssigned = true;

  const handleChatSubmit = (e) => {
    e.preventDefault();

    const result = chatInputSchema.safeParse({ chat });
    if (!result.success) {
      result.error.errors.forEach((err) => {
        toast.error(err.message);
      });
      return;
    }
    console.log(chat);
    setChat("");
  };

  // Condition 1: Chat resolved
  if (chatStatus === "Resolved") {
    return (
      <div className={styles.ticketChatResolved}>
        <p>This chat has been resolved</p>
      </div>
    );
  }

  // Condition 2: Member, not assigned
  if (role === "member" && ticketAssigned === false) {
    return (
      <div className={styles.ticketChatResolved}>
        <p>
          This chat is assigned to new team member. You no longer have access.
        </p>
      </div>
    );
  }

  return (
    <form className={styles.ticketChatBoxInput} onSubmit={handleChatSubmit}>
      <input
        type="text"
        name="chat"
        value={chat}
        onChange={(e) => setChat(e.target.value)}
        placeholder="Type here"
      />
      <div className={styles.sendBtnDiv}>
        <button type="submit">
          <img src={SendIcon} alt="Send icon" />
        </button>
      </div>
    </form>
  );
};

export default TicketChatInput;
