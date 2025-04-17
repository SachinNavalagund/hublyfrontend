import React from "react";
import styles from "./LoginForm.module.css";
import { Link } from "react-router-dom";
import { loginFormSchema } from "../../helper/schema";
import { toast } from "react-toastify";

const LoginForm = ({ loginFormData, setLoginFormData }) => {
  const handleChange = (e) => {
    const { name, value } = e.target;
    setLoginFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const result = loginFormSchema.safeParse(loginFormData);

    if (!result.success) {
      result.error.errors.forEach((err) => {
        toast.error(err.message);
      });
      return;
    }
    console.log("Form data", loginFormData);
  };

  return (
    <div className={styles.loginFormDiv}>
      <div className={styles.loginForm}>
        <p className={styles.formHead}>Sign in to your Plexify</p>
        <form className={styles.form} onSubmit={handleSubmit} noValidate>
          <div className={styles.inputs}>
            <label htmlFor="email" className={styles.inputDiv}>
              <p className={styles.inputLabel}>Username</p>
              <input
                type="text"
                id="email"
                name="email"
                value={loginFormData.email}
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
                value={loginFormData.password}
                onChange={handleChange}
                className={styles.input}
                required
              />
            </label>
          </div>
          <button type="submit" className={styles.submitBtn}>
            Log in
          </button>
        </form>

        {/* Links */}
        <Link to="/forgot-password" className={styles.forgotLink}>
          Forgot password
        </Link>
        <p className={styles.signUptext}>
          Don't have an account?{" "}
          <Link to="/signup" className={styles.signUplink}>
            Signup
          </Link>
        </p>
      </div>

      {/* Privacy and Terms Link */}
      <div className={styles.loginFormSubtitle}>
        <p className={styles.loginFormBottomText}>
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

export default LoginForm;
