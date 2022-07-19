import React from "react";
import { NavLink } from "react-router-dom";
import styles from "../assets/styles/Sidebar.module.scss";

function Sidebar() {
  return (
    <section className={styles.container}>
      <div className={styles.logoContainer}>
        <span className={styles.logo}></span>
        <span className={styles.title}>Hirelly.</span>
      </div>
      <div className={styles.sidebarMenuWrapper}>
        <div className={styles.sidebarMenu}>
          <NavLink
            to="/"
            className={(navData) =>
              navData.isActive ? `${styles.active} ${styles.link}` : styles.link
            }
          >
            Dashboard
          </NavLink>
        </div>

        <div className={styles.sidebarMenu}>
          <NavLink
            to="/application"
            className={(navData) =>
              navData.isActive ? `${styles.active} ${styles.link}` : styles.link
            }
          >
            My Application
          </NavLink>
        </div>

        <div className={styles.sidebarMenu}>
          <NavLink
            to="/message"
            className={(navData) =>
              navData.isActive ? `${styles.active} ${styles.link}` : styles.link
            }
          >
            Messages
          </NavLink>
        </div>
        <div className={styles.sidebarMenu}>
          <NavLink
            to="/job-search"
            className={(navData) =>
              navData.isActive ? `${styles.active} ${styles.link}` : styles.link
            }
          >
            Job Search
          </NavLink>
        </div>
        <div className={styles.sidebarMenu}>
          <NavLink
            to="/explore"
            className={(navData) =>
              navData.isActive ? `${styles.active} ${styles.link}` : styles.link
            }
          >
            Explore Companies
          </NavLink>
        </div>
      </div>
      <div className={styles.sidebarMenuWrapper}>
        <div className={styles.sideMenuTitle}>Settings</div>
        <div className={styles.sidebarMenu}>
          <NavLink
            to="/settings"
            className={(navData) =>
              navData.isActive ? `${styles.active} ${styles.link}` : styles.link
            }
          >
            Settings
          </NavLink>
        </div>
        <div className={styles.sidebarMenu}>
          <NavLink
            to="/help"
            className={(navData) =>
              navData.isActive ? `${styles.active} ${styles.link}` : styles.link
            }
          >
            Help Support
          </NavLink>
        </div>
      </div>
    </section>
  );
}

export default Sidebar;
