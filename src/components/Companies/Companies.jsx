import styles from "./Companies.module.css";
import AdobeLogo from "../../../public/adobe logo.png";
import ElasticLogo from "../../../public/elastic logo.png";
import OpendoorLogo from "../../../public/opendoor logo.png";
import AirtableLogo from "../../../public/airtable logo.png";
import FramerLogo from "../../../public/framer logo.png";

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
