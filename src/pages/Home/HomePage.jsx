import React from "react";
import Companies from "../../components/Companies/Companies";
import Navbar from "../../components/Navbar/Navbar";
import styles from "./HomePage.module.css";
import HeroSection from "../../components/HeroSection/HeroSection";
import AboutSection from "../../components/AboutSection/AboutSection";
import PriceSection from "../../components/PriceSection/PriceSection";
import FooterSection from "../../components/FooterSection/FooterSection";

const HomePage = () => {
  return (
    <div className={styles.container}>
      <Navbar />
      <HeroSection />
      <Companies />
      <AboutSection />
      <PriceSection />
      <FooterSection />
    </div>
  );
};

export default HomePage;
