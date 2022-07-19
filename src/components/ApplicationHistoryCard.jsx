import React from "react";
import { Link } from "react-router-dom";
import data from "../__mocks__/recentApplications.json";
import styles from "../assets/styles/ApplicationHistoryCard.module.scss";

function ApplicationHistoryCard() {
  console.log(data);
  return (
    <section className={styles.container}>
      <div className={styles.cardTitle}>{`Recent Applications History`}</div>
      <section className={styles.applicationContainer}>
        {data
          ? data.map((application) => (
              <article className={styles.dailyApplication}>
                <div className={styles.date} key={application.date}>
                  {application.date}
                </div>
                {application.app_data.map((appData) => (
                  <div className={styles.appDiv}>
                    <div className={styles.leftSide}>
                      <div className={styles.companyPic}>{appData.pic}</div>
                      <div className={styles.applicationDesc}>
                        <div className={styles.position}>
                          {appData.position}
                        </div>
                        <div className={styles.desc}>
                          <span className={styles.desc}>{appData.company}</span>
                          <span className={styles.desc}>
                            {appData.job_type}
                          </span>
                          <span className={styles.desc}>
                            {appData.remote_policy}
                          </span>
                        </div>
                      </div>
                    </div>

                    <div className={styles.actions}>
                      <span
                        className={
                          appData.status === "In Review"
                            ? `${styles.inReview} ${styles.appStatus}`
                            : appData.status === "Declined"
                            ? `${styles.declined} ${styles.appStatus}`
                            : styles.appStatus
                        }
                      >
                        {appData.status}
                      </span>
                      <span className={styles.moreInfo}>..</span>
                    </div>
                  </div>
                ))}
              </article>
            ))
          : ""}

        <section className={styles.scheduleDiv}>
            <Link to="#" className={styles.link}>
                <span className='scheduleLink'> {`View All Jobs Applied >`}</span>
            </Link>
        </section>
      </section>
    </section>
  );
}

export default ApplicationHistoryCard;
