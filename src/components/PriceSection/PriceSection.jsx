import styles from "./PriceSection.module.css";
import PriceCard from "../PriceCard/PriceCard";

const PriceSection = () => {
  return (
    <section className={styles.container}>
      <div className={styles.priceDes}>
        <p className={styles.priceDesHead}>We have plans for everyone!</p>
        <p className={styles.priceDesPar}>
          We started with a strong foundation, then simply built all of the
          sales and marketing tools ALL businesses need under one platform.
        </p>
      </div>
      <PriceCard />
    </section>
  );
};

export default PriceSection;
