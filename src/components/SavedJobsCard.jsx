import React from "react";
import { Link } from "react-router-dom";
import jobs from "../__mocks__/savedJobs.json";
import styles from "../assets/styles/SavedJobsCard.module.scss";

function SavedJobsCard() {
  return (
    <section className={styles.container}>
      <div className={styles.cardTitle}>{`Saved Jobs`}</div>
      {jobs.map((job) => (
        <div className={styles.appDiv}>
          <div className={styles.leftSide}>
            <div className={styles.companyPic}>{job.pic}</div>
            <div className={styles.applicationDesc}>
              <div className={styles.position}>{job.position}</div>
              <div className={styles.desc}>
                <span className={styles.desc}>{job.company}</span>
                <span className={styles.desc}>{job.job_type}</span>
                <span className={styles.desc}>{job.remote_policy}</span>
              </div>
            </div>
          </div>

          <div className={styles.actions}>
            <span className={styles.appStatus}>{job.status}</span>
            <span className={styles.moreInfo}>..</span>
          </div>
        </div>
      ))}

      <section className={styles.scheduleDiv}>
        <Link to="#" className={styles.link}>
          <span className="scheduleLink"> {`View All Jobs Applied >`}</span>
        </Link>
      </section>
    </section>
  );
}

export default SavedJobsCard;
