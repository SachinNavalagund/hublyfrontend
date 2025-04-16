import styles from "./Companies.module.css";
import AdobeLogo from "/adobe logo.png";
import ElasticLogo from "/elastic logo.png";
import OpendoorLogo from "/opendoor logo.png";
import AirtableLogo from "/airtable logo.png";
import FramerLogo from "/framer logo.png";

const Companies = () => {
  return (
    <div className={styles.container}>
      <img src={AdobeLogo} alt="adobe logo" />
      <img src={ElasticLogo} alt="elastic logo" />
      <img src={OpendoorLogo} alt="opendoor logo" />
      <img src={AirtableLogo} alt="airtable logo" />
      <img src={ElasticLogo} alt="elastic logo" />
      <img src={FramerLogo} alt="framer logo" />
    </div>
  );
};

export default Companies;
