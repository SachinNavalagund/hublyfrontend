import styles from "./PriceCard.module.css";
import CheckIcon from "../../../public/Check icon.svg";

const PriceCard = () => {
  return (
    <div className={styles.priceCardDiv}>
      {/* First card */}
      <div className={styles.priceCard}>
        <div className={styles.priceDetailsDiv}>
          <div className={styles.priceHeadDiv}>
            <p className={styles.priceHead}>STARTER</p>
            <p className={styles.priceDes}>
              Best for local businesses needing to improve their online
              reputation.
            </p>
          </div>
          <div className={styles.priceDiv}>
            <p className={styles.priceTag}>$199</p>
            <p className={styles.priceDuration}>/monthly</p>
          </div>
          <div className={styles.includedDiv}>
            <p className={styles.includedHead}>What's included</p>

            <div className={styles.includedList}>
              <div className={styles.includedListDetail}>
                <img src={CheckIcon} alt="" />
                <p className={styles.includedListName}>Unlimited Users</p>
              </div>
              <div className={styles.includedListDetail}>
                <img src={CheckIcon} alt="" />
                <p className={styles.includedListName}>GMB Messaging</p>
              </div>
              <div className={styles.includedListDetail}>
                <img src={CheckIcon} alt="" />
                <p className={styles.includedListName}>Reputation Management</p>
              </div>
              <div className={styles.includedListDetail}>
                <img src={CheckIcon} alt="" />
                <p className={styles.includedListName}>GMB Call Tracing</p>
              </div>
              <div className={styles.includedListDetail}>
                <img src={CheckIcon} alt="" />
                <p className={styles.includedListName}>
                  24/7 Award Winning Support
                </p>
              </div>
            </div>
          </div>
        </div>

        <button className={styles.priceActionBtn}>SIGN UP FOR STARTER</button>
      </div>

      {/* Second card */}
      <div className={styles.priceCard}>
        <div className={styles.priceDetailsDiv}>
          <div className={styles.priceHeadDiv}>
            <p className={styles.priceHead}>Grow</p>
            <p className={styles.priceDes}>
              Best for all businesses that want to take full control of their
              marketing automation and track their leads, click to close.
            </p>
          </div>
          <div className={styles.priceDiv}>
            <p className={styles.priceTag}>$399</p>
            <p className={styles.priceDuration}>/monthly</p>
          </div>
          <div className={styles.includedDiv}>
            <p className={styles.includedHead}>What's included</p>

            <div className={styles.includedList}>
              <div className={styles.includedListDetail}>
                <img src={CheckIcon} alt="" />
                <p className={styles.includedListName}>Pipeline Management</p>
              </div>
              <div className={styles.includedListDetail}>
                <img src={CheckIcon} alt="" />
                <p className={styles.includedListName}>
                  Marketing Automation Campaigns
                </p>
              </div>
              <div className={styles.includedListDetail}>
                <img src={CheckIcon} alt="" />
                <p className={styles.includedListName}>Live Call Transfer</p>
              </div>
              <div className={styles.includedListDetail}>
                <img src={CheckIcon} alt="" />
                <p className={styles.includedListName}>GMB Messaging</p>
              </div>
              <div className={styles.includedListDetail}>
                <img src={CheckIcon} alt="" />
                <p className={styles.includedListName}>
                  Embed-able Form Builder
                </p>
              </div>
              <div className={styles.includedListDetail}>
                <img src={CheckIcon} alt="" />
                <p className={styles.includedListName}>Reputation Management</p>
              </div>
              <div className={styles.includedListDetail}>
                <img src={CheckIcon} alt="" />
                <p className={styles.includedListName}>
                  24/7 Award Winning Support
                </p>
              </div>
            </div>
          </div>
        </div>

        <button className={styles.priceActionBtn}>SIGN UP FOR STARTER</button>
      </div>
    </div>
  );
};

export default PriceCard;
