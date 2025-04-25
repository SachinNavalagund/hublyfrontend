import React from "react";
import styles from "./SignUpForm.module.css";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import { signupFormSchema } from "../../helper/schema";

const SignUpForm = ({ signupFormData, setSignupFormData }) => {
  const handleChange = (e) => {
    const { name, value } = e.target;
    setSignupFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleCheckBoxChange = (e) => {
    const { name, checked } = e.target;
    setSignupFormData((prev) => ({
      ...prev,
      [name]: checked,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const result = signupFormSchema.safeParse(signupFormData);
    if (!result.success) {
      result.error.errors.forEach((err) => {
        toast.error(err.message);
      });
      return;
    }

    console.log("Sign up form Data", signupFormData);
  };

  return (
    <div className={styles.signupFormDiv}>
      <div className={styles.signupForm}>
        <div className={styles.formContainer}>
          <div className={styles.formDiv}>
            <div className={styles.formHeadDiv}>
              <p className={styles.formHead}>Create an account</p>
              <Link to="/login" className={styles.loginLink}>
                Sign in instead
              </Link>
            </div>

            {/* form */}
            <form onSubmit={handleSubmit} className={styles.form} noValidate>
              <label htmlFor="firstName" className={styles.inputDiv}>
                <p className={styles.inputLabel}>First name</p>
                <input
                  type="text"
                  id="firstName"
                  name="firstName"
                  value={signupFormData.firstName}
                  onChange={handleChange}
                  className={styles.input}
                  required
                />
              </label>

              <label htmlFor="lastName" className={styles.inputDiv}>
                <p className={styles.inputLabel}>Last name</p>
                <input
                  type="text"
                  id="lastName"
                  name="lastName"
                  value={signupFormData.lastName}
                  onChange={handleChange}
                  className={styles.input}
                  required
                />
              </label>

              <label htmlFor="email" className={styles.inputDiv}>
                <p className={styles.inputLabel}>Email</p>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={signupFormData.email}
                  onChange={handleChange}
                  className={styles.input}
                  required
                />
              </label>

              <label htmlFor="password" className={styles.inputDiv}>
                <p className={styles.inputLabel}>Password</p>
                <input
                  type="password"
                  id="password"
                  name="password"
                  value={signupFormData.password}
                  onChange={handleChange}
                  className={styles.input}
                  required
                />
              </label>

              <label htmlFor="confirmPassword" className={styles.inputDiv}>
                <p className={styles.inputLabel}>Confirm password</p>
                <input
                  type="password"
                  id="confirmPassword"
                  name="confirmPassword"
                  value={signupFormData.confirmPassword}
                  onChange={handleChange}
                  className={styles.input}
                  required
                />
              </label>

              <div className={styles.checkboxDiv}>
                <input
                  type="checkbox"
                  id="userName"
                  name="termsAndPolicy"
                  checked={signupFormData.termsAndPolicy}
                  onChange={handleCheckBoxChange}
                  className={styles.checkbox}
                  required
                />
                <p className={styles.checkboxDes}>
                  By creating an account, I agree to our{" "}
                  <Link to="#" className={styles.termsOfUse}>
                    Terms of use
                  </Link>{" "}
                  and{" "}
                  <Link to="#" className={styles.privacyPolicy}>
                    Privacy Policy
                  </Link>
                </p>
              </div>

              <button type="submit" className={styles.submitBtn}>
                Create an account
              </button>
            </form>
          </div>
        </div>
      </div>
      {/* Form bottom text */}
      <div>
        <p className={styles.signupFormBottomText}>
          This site is protected by reCAPTCHA and the{" "}
          <Link to="#" className={styles.googlePrivacyLink}>
            Google Privacy Policy
          </Link>{" "}
          and{" "}
          <Link to="#" className={styles.termsOfService}>
            Terms of Service
          </Link>{" "}
          apply.
        </p>
      </div>
    </div>
  );
};

export default SignUpForm;
