import React from "react";
import styles from "./FooterLinks.module.css";
import { footerLinks } from "../../helper/constant";
import Linkedin from "/Link → SVG.svg";
import Mail from "/Link → SVG (1).svg";
import Twitter from "/Link → SVG (2).svg";
import Youtube from "/Link → SVG (3).svg";
import Discord from "/Link → SVG (4).svg";
import Figma from "/Link → SVG (5).svg";
import Instagram from "/Link → SVG (6).svg";

const FooterLinks = () => {
  return (
    <div className={styles.footerLinksDiv}>
      <div className={styles.footerLinks}>
        {footerLinks.map((footer, index) => (
          <div className={styles.footerLinksSeparateDiv} key={index}>
            <p className={styles.linkHead}>{footer.title}</p>
            <div className={styles.linksDiv}>
              {footer.links.map((link, index) => (
                <p className={styles.link} key={index}>
                  {link}
                </p>
              ))}
            </div>
          </div>
        ))}

        <div className={styles.footerLinksSeparateDiv}>
          <div className={styles.footerLinksIcons}>
            <img src={Mail} alt="Mail logo" />
            <img src={Linkedin} alt="Linkedin logo" />
            <img src={Twitter} alt="Twitter logo" />
            <img src={Youtube} alt="Youtube logo" />
            <img src={Discord} alt="Discord logo" />
            <img src={Figma} alt="Figma logo" />
            <img src={Instagram} alt="Instagram logo" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default FooterLinks;
