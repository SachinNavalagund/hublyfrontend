import React, { useState } from "react";
import styles from "./Setting.module.css";
import Sidebar from "../../components/Sidebar/Sidebar";
import EditProfileForm from "../../components/EditProfileForm/EditProfileForm";

const Setting = () => {
  const [editFormData, setEditFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  return (
    <div className={styles.container}>
      <Sidebar />
      <div className={styles.settingDiv}>
        <p className={styles.pageHeading}>Setting</p>
        <EditProfileForm
          editFormData={editFormData}
          setEditFormData={setEditFormData}
        />
      </div>
    </div>
  );
};

export default Setting;
