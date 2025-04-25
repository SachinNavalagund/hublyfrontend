import React from "react";
import styles from "./EditProfileForm.module.css";
import { LuInfo } from "react-icons/lu";
import { editProfileFormSchema } from "../../helper/schema";
import { toast } from "react-toastify";

const EditProfileForm = ({ editFormData, setEditFormData }) => {
  const handleChange = (e) => {
    const { name, value } = e.target;
    setEditFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const result = editProfileFormSchema.safeParse(editFormData);

    if (!result.success) {
      result.error.errors.forEach((err) => toast.error(err.message));
    }
    console.log("edit form data", editFormData);
  };

  return (
    <div className={styles.container}>
      <div className={styles.formTitleDiv}>
        <div className={styles.border} />
        <button className={styles.editBtn}>Edit Profile</button>
      </div>
      <form className={styles.formContainer} onSubmit={handleSubmit}>
        <div className={styles.formInputs}>
          <label htmlFor="firstName" className={styles.inputDiv}>
            <p className={styles.inputLabel}>First name</p>
            <input
              type="text"
              id="firstName"
              name="firstName"
              value="Sachin"
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
              value="Navalagund"
              onChange={handleChange}
              className={styles.input}
              required
            />
          </label>

          <label htmlFor="email" className={styles.inputDivWithInfo}>
            <p className={styles.inputLabel}>Email</p>
            <div className={styles.inputWithInfoIconDiv}>
              <input
                type="email"
                id="email"
                name="email"
                value="sachinnavalagund1@gmail.com"
                onChange={handleChange}
                className={styles.input}
                required
              />
              <div className={styles.infoWrapper}>
                <button
                  className={styles.infoButton}
                  onClick={(e) => e.preventDefault()}>
                  <LuInfo size={24} color="#727272" />
                </button>
                <div className={styles.infoDiv}>
                  <p>Email is unique, can't change email</p>
                </div>
              </div>
            </div>
          </label>

          <label htmlFor="password" className={styles.inputDivWithInfo}>
            <p className={styles.inputLabel}>Password</p>
            <div className={styles.inputWithInfoIconDiv}>
              <input
                type="password"
                id="password"
                name="password"
                value="********"
                onChange={handleChange}
                className={styles.input}
                required
              />
              <div className={styles.infoWrapper}>
                <button
                  className={styles.infoButton}
                  onClick={(e) => e.preventDefault()}>
                  <LuInfo size={24} color="#727272" />
                </button>
                <div className={styles.infoDiv}>
                  <p>Change old password</p>
                </div>
              </div>
            </div>
          </label>

          <label htmlFor="confirmPassword" className={styles.inputDivWithInfo}>
            <p className={styles.inputLabel}>Confirm password</p>
            <div className={styles.inputWithInfoIconDiv}>
              <input
                type="password"
                id="confirmPassword"
                name="confirmPassword"
                value="********"
                onChange={handleChange}
                className={styles.input}
                required
              />
              <div className={styles.infoWrapper}>
                <button
                  className={styles.infoButton}
                  onClick={(e) => e.preventDefault()}>
                  <LuInfo size={24} color="#727272" />
                </button>
                <div className={styles.infoDiv}>
                  <p>User will logged out immediately</p>
                </div>
              </div>
            </div>
          </label>
        </div>

        <div className={styles.formSubmitBtn}>
          <button className={styles.submitBtn} type="submit">
            Save
          </button>
        </div>
      </form>
    </div>
  );
};

export default EditProfileForm;
