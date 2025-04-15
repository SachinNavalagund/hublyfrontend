import { useNavigate } from "react-router-dom";
import styles from "./Navbar.module.css";
import { BsCloudHaze2 } from "react-icons/bs";

const Navbar = () => {
  const navigate = useNavigate();
  return (
    <div className={styles.container}>
      <div className={styles.navImageDiv} onClick={() => navigate("/")}>
        <BsCloudHaze2 size={56} fill="#184e7f" />
        <span className={styles.companyName}>Hubly</span>
      </div>
      <div className={styles.authButtonDiv}>
        <button className={styles.loginBtn} onClick={() => navigate("/login")}>
          Login
        </button>
        <button
          className={styles.signUpBtn}
          onClick={() => navigate("/signup")}>
          Sign up
        </button>
      </div>
    </div>
  );
};

export default Navbar;
