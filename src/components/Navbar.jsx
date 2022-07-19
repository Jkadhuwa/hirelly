import React from "react";
import styles from "../assets/styles/Navbar.module.scss";
import Notification from '../assets/images/notification.svg';
function Navbar() {
 
  return (
    <div className={styles.container}>
      <div className="top-left">
        <input
          type="text"
          placeholder="search anything here..."
          className={styles.searchBox}
        />
      </div>
      <div className={styles.topRight}>
        <div className={styles.notificationContainer}>
          <img src={Notification} alt="notification" className={styles.bell}/>
          <span className={styles.notification}>20</span>
        </div>
        <div className={styles.avatar}>
          
        </div>
        <div className={styles.username}>Musinda Kadhuwa</div>
      </div>
    </div>
  );
}

export default Navbar;
