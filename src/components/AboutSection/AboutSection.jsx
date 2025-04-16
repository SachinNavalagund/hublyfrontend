import styles from "./AboutSection.module.css";
import AboutImage from "/AboutImg.svg";

const AboutSection = () => {
  return (
    <section className={styles.container}>
      <div className={styles.aboutDes}>
        <p className={styles.aboutDesHead}>
          At its core, Hubly is a robust CRM solution.
        </p>
        <p className={styles.aboutDesPar}>
          Hubly helps businesses streamline customer interactions, track leads,
          and automate tasks—saving you time and maximizing revenue. Whether
          you’re a startup or an enterprise, Hubly adapts to your needs, giving
          you the tools to scale efficiently.
        </p>
      </div>
      <div className={styles.aboutImage}>
        <img src={AboutImage} alt="" />
      </div>
    </section>
  );
};

export default AboutSection;
