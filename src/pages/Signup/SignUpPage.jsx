import React from "react";
import styles from "./SignUpPage.module.css";
import AuthImage from "/Authimage.svg";
import { BsCloudHaze2 } from "react-icons/bs";
import { useNavigate } from "react-router-dom";

const SignUpPage = () => {
  const navigate = useNavigate();
  return (
    <div className={styles.container}>
      <div className="">
        <div className={styles.navImageDiv} onClick={() => navigate("/")}>
          <BsCloudHaze2 size={45} fill="#184e7f" />
          <span className={styles.companyName}>Hubly</span>
        </div>
      </div>
      <div className={styles.imageDiv}>
        <img src={AuthImage} alt="" className={styles.image} />
      </div>
    </div>
  );
};

export default SignUpPage;
