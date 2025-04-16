import React, { useState } from "react";
import styles from "./LoginPage.module.css";
import AuthImage from "/Authimage.svg";
import { useNavigate } from "react-router-dom";
import { BsCloudHaze2 } from "react-icons/bs";
import LoginForm from "../../components/LoginForm/LoginForm";

const LoginPage = () => {
  const navigate = useNavigate();

  const [form, setForm] = useState({
    userName: "",
    password: "",
  });

  return (
    <div className={styles.container}>
      <div className={styles.formContainer}>
        <div className={styles.navImageDiv} onClick={() => navigate("/")}>
          <BsCloudHaze2 size={45} fill="#184e7f" />
          <span className={styles.companyName}>Hubly</span>
        </div>
        <LoginForm form={form} setForm={setForm} />
      </div>
      <div className={styles.imageDiv}>
        <img src={AuthImage} alt="" className={styles.image} />
      </div>
    </div>
  );
};

export default LoginPage;
