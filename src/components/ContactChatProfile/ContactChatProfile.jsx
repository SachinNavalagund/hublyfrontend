import React from "react";
import styles from "./ContactChatProfile.module.css";
import ProfilePic from "/img.svg";
import ContactIcon from "/mdi_contact-outline.svg";
import PhoneIcon from "/mdi-light_phone.svg";
import MailIcon from "/lets-icons_message-light.svg";
import TeammateDropDown from "../TeammateDropDown/TeammateDropDown";
import TicketStatusDropDown from "../TicketStatusDropDown/TicketStatusDropDown";

const ContactChatProfile = () => {
  return (
    <div className={styles.contactCenterChatProfileDiv}>
      <div className={styles.profileImgDiv}>
        <img src={ProfilePic} alt="" width={30} height={30} />
        <p>Chat</p>
      </div>
      <p className={styles.profileDetailsHeading}>Details</p>

      <div className={styles.profileInfo}>
        <div className={styles.profileInput}>
          <img src={ContactIcon} alt="" />
          <p>Joe doe</p>
        </div>
        <div className={styles.profileInput}>
          <img src={PhoneIcon} alt="" />
          <p>+1 (000) 000-0000</p>
        </div>
        <div className={styles.profileInput}>
          <img src={MailIcon} alt="" />
          <p>example@gmail.com</p>
        </div>
      </div>

      <p className={styles.teamHeading}>Teammates</p>

      {/* Team mates drop down */}
      <TeammateDropDown />
      {/* Ticket status drop down */}
      <TicketStatusDropDown />
    </div>
  );
};

export default ContactChatProfile;
