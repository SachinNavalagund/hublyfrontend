import React, { useState } from "react";
import styles from "./Dashboard.module.css";
import Sidebar from "../../components/Sidebar/Sidebar";
import { LuSearch } from "react-icons/lu";
import TicketSection from "../../components/TicketSection/TicketSection";

const Dashboard = () => {
  const [query, setQuery] = useState("");

  return (
    <div className={styles.container}>
      <Sidebar />
      <div className={styles.dashboardDiv}>
        <p className={styles.pageHeading}>Dashboard</p>
        <div className={styles.searchBox}>
          <LuSearch size={18} color="b6b6b6" className={styles.searchIcon} />
          <input
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search for ticket"
            className={styles.input}
          />
        </div>
        <TicketSection />
      </div>
    </div>
  );
};

export default Dashboard;
