import React, { useState } from "react";
import styles from "./TicketStatusDropDown.module.css";
import Arrow from "/weui_arrow-filled.svg";
import TicketIcon from "/mdi_ticket-confirmation-outline.svg";
import TicketStatusDropDownModel from "../TicketStatusDropDownModel/TicketStatusDropDownModel";

const TicketStatusDropDown = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [selected, setSelected] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const [pendingStatus, setPendingStatus] = useState(null);

  const handleStatusClick = (status) => {
    if (selected === status) {
      setIsOpen(false);
    } else {
      setPendingStatus(status);
      setShowModal(true);
    }
  };

  return (
    <div className={styles.dropDownDiv}>
      <div className={styles.dropDownMenu} onClick={() => setIsOpen(!isOpen)}>
        <div className={styles.dropDownMenuInfo}>
          <img src={TicketIcon} alt="" />
          <span>{selected ? selected : "Ticket status"}</span>
        </div>
        <img src={Arrow} alt="Arrow icon" />
      </div>

      {isOpen && (
        <>
          <div className={styles.dropDownOptions}>
            <div
              className={styles.dropDownOption}
              onClick={() => handleStatusClick("Resolved")}>
              <span>Resolved</span>
            </div>
            <div
              className={styles.dropDownOption}
              onClick={() => handleStatusClick("Unresolved")}>
              <span>Unresolved</span>
            </div>
          </div>

          {showModal && (
            <TicketStatusDropDownModel
              setIsOpen={setIsOpen}
              setSelected={setSelected}
              setShowModal={setShowModal}
              pendingStatus={pendingStatus}
            />
          )}
        </>
      )}
    </div>
  );
};

export default TicketStatusDropDown;
