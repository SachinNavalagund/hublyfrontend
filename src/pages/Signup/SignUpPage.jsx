import React, { useState } from "react";
import styles from "./SignUpPage.module.css";
import AuthImage from "/Authimage.svg";
import { BsCloudHaze2 } from "react-icons/bs";
import { useNavigate } from "react-router-dom";
import SignUpForm from "../../components/SignUpForm/SignUpForm";

const SignUpPage = () => {
  const [signupFormData, setSignupFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
    termsAndPolicy: false,
  });

  const navigate = useNavigate();

  return (
    <div className={styles.container}>
      <div className={styles.formContainer}>
        <div className={styles.navImageDiv} onClick={() => navigate("/")}>
          <BsCloudHaze2 size={45} fill="#184e7f" />
          <span className={styles.companyName}>Hubly</span>
        </div>
        <SignUpForm
          signupFormData={signupFormData}
          setSignupFormData={setSignupFormData}
        />
      </div>
      <div className={styles.imageDiv}>
        <img src={AuthImage} alt="" className={styles.image} />
      </div>
    </div>
  );
};

export default SignUpPage;
