import React from "react";
import styles from "./FooterLinks.module.css";

const FooterLinks = () => {
  return (
    <div className={styles.footerLinksDiv}>
      <div className={styles.footerLinks}>
        <div className={styles.footerLinksSeparateDiv}>
          <p className={styles.linkHead}>Product</p>
          <div className={styles.linksDiv}>
            <p className={styles.link}>Universal checkout</p>
            <p className={styles.link}>Payment workflows</p>
            <p className={styles.link}>Observability</p>
            <p className={styles.link}>UpliftAI</p>
            <p className={styles.link}>Apps & integrations</p>
          </div>
        </div>

        <div className={styles.footerLinksSeparateDiv}>
          <p className={styles.linkHead}>Why Primer</p>
          <div className={styles.linksDiv}>
            <p className={styles.link}>Expand to new markets</p>
            <p className={styles.link}>Boost payment success</p>
            <p className={styles.link}>Improve conversion rates</p>
            <p className={styles.link}>Reduce payments fraud</p>
            <p className={styles.link}>Recover revenue</p>
          </div>
        </div>

        <div className={styles.footerLinksSeparateDiv}>
          <p className={styles.linkHead}>Developers</p>
          <div className={styles.linksDiv}>
            <p className={styles.link}>Primer Docs</p>
            <p className={styles.link}>Api Reference</p>
            <p className={styles.link}>Payment methods guide</p>
            <p className={styles.link}>Service status</p>
            <p className={styles.link}>Community</p>
          </div>
        </div>
      </div>

      <div className={styles.footerLinks}>
        <div className={styles.footerLinksSeparateDiv}>
          <p className={styles.linkHead}>Resources</p>
          <div className={styles.linksDiv}>
            <p className={styles.link}>Blog</p>
            <p className={styles.link}>Success stories</p>
            <p className={styles.link}>News room</p>
            <p className={styles.link}>Terms</p>
            <p className={styles.link}>Privacy</p>
          </div>
        </div>

        <div className={styles.footerLinksSeparateDiv}>
          <p className={styles.linkHead}>Company</p>
          <div className={styles.linksDiv}>
            <p className={styles.link}>Careers</p>
          </div>
        </div>

        <div className={styles.footerLinksSeparateDiv}>Sixth div</div>
      </div>
    </div>
  );
};

export default FooterLinks;
