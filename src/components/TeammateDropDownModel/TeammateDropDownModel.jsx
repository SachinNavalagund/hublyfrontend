import React from "react";
import styles from "./TeammateDropDownModel.module.css";

const TeammateDropDownModel = ({
  setIsOpen,
  setSelected,
  setPendingMate,
  setShowModal,
  pendingMate,
}) => {
  return (
    <div className={styles.modelDiv}>
      <p>Chat would be assigned to Different team member </p>
      <div className={styles.confirmationBtn}>
        <button
          className={styles.secondaryBtn}
          onClick={() => {
            setIsOpen(false);
            setPendingMate(null);
            setShowModal(false);
          }}>
          Cancel
        </button>
        <button
          className={styles.primaryBtn}
          onClick={() => {
            if (pendingMate) {
              setSelected(pendingMate);
            }
            setIsOpen(false);
            setShowModal(false);
            setPendingMate(null);
          }}>
          Confirm
        </button>
      </div>
    </div>
  );
};

export default TeammateDropDownModel;
