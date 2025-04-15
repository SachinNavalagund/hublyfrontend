import { TiArrowRight } from "react-icons/ti";
import styles from "./HeroSection.module.css";
import { BsPlayCircle } from "react-icons/bs";
import HeroImage from "../../../public/Hero.svg";
import HeroTopImage from "../../../public/HeroTop2.svg";
import HeroRightImage from "../../../public/HeroRight2.svg";

const HeroSection = () => {
  return (
    <section className={styles.container}>
      <div className={styles.heroTitleDiv}>
        <div className={styles.description}>
          <p className={styles.descriptionHead}>
            Grow Your Business Faster with Hubly CRM
          </p>
          <p className={styles.descriptionPara}>
            Manage leads, automate workflows, and close deals effortlessly-all
            in one powerful platform.
          </p>
        </div>

        <div className={styles.actionBtn}>
          <button className={styles.getstartedBtn}>
            Get started <TiArrowRight size={18} fill="#ffffff" />
          </button>
          <button className={styles.watchBtn}>
            <BsPlayCircle size={40} fill="#244779" /> Watch Video
          </button>
        </div>
      </div>
      <div className={styles.heroImageDiv}>
        <img src={HeroImage} alt="" />

        <img src={HeroTopImage} alt="" className={styles.heroTopImage} />
        <img src={HeroRightImage} alt="" className={styles.heroRightImage} />
      </div>
    </section>
  );
};

export default HeroSection;
