import React, { useState } from "react";
import styles from "./TeammateDropDown.module.css";
import Arrow from "/weui_arrow-filled.svg";
import { teammates } from "../../helper/constant";
import TeammateDropDownModel from "../TeammateDropDownModel/TeammateDropDownModel";

const TeammateDropDown = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [selected, setSelected] = useState(teammates[0]);
  const [showModal, setShowModal] = useState(false);
  const [pendingMate, setPendingMate] = useState(null);

  return (
    <div className={styles.dropDownDiv}>
      <div className={styles.dropDownMenu} onClick={() => setIsOpen(!isOpen)}>
        <div className={styles.dropDownMenuInfo}>
          <img src={selected.img} alt="" className="w-6 h-6 rounded-full" />
          <span>{selected.name}</span>
        </div>
        <img src={Arrow} alt="" />
      </div>

      {isOpen && (
        <>
          <div className={styles.dropDownOptions}>
            {teammates.map((mate) => (
              <div
                key={mate.id}
                className={styles.dropDownOption}
                onClick={() => {
                  setPendingMate(mate);
                  setShowModal(true);
                }}>
                <img src={mate.img} alt="" />
                <span>{mate.name}</span>
              </div>
            ))}
          </div>
          {showModal && (
            <TeammateDropDownModel
              setIsOpen={setIsOpen}
              setSelected={setSelected}
              setPendingMate={setPendingMate}
              setShowModal={setShowModal}
              pendingMate={pendingMate}
            />
          )}
        </>
      )}
    </div>
  );
};

export default TeammateDropDown;
