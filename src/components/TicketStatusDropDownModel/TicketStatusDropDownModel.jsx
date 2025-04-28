import React from "react";
import styles from "./TicketStatusDropDownModel.module.css";

const TicketStatusDropDownModel = ({
  setIsOpen,
  setShowModal,
  setSelected,
  pendingStatus,
}) => {
  return (
    <div className={styles.modelDiv}>
      <p>Chat will be closed</p>
      <div className={styles.confirmationBtn}>
        <button
          className={styles.secondaryBtn}
          onClick={() => {
            setIsOpen(false);
            setShowModal(false);
          }}>
          Cancel
        </button>
        <button
          className={styles.primaryBtn}
          onClick={() => {
            if (pendingStatus) {
              setSelected(pendingStatus);
            }
            setIsOpen(false);
            setShowModal(false);
          }}>
          Confirm
        </button>
      </div>
    </div>
  );
};

export default TicketStatusDropDownModel;
