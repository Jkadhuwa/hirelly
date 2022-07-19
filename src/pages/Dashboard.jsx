import React from "react";
import styles from "../assets/styles/Dashboard.module.scss";
import InterviewCard from "../components/InterviewCard";
import JobAppliedCard from "../components/JobAppliedCard";
import UpcomingInterviewCard from "../components/UpcomingInterviewCard";
import ApplicationsHistoryCard from '../components/ApplicationHistoryCard'
import SavedJobsCard from "../components/SavedJobsCard";

function Dashboard() {
  return (
    <section className={styles.container}>
      <section className={styles.intro}>
        <div className={styles.titleSection}>
          <h2 className={styles.title}>Dashboard</h2>
          <p className={styles.description}>
            Take a look at your monthly job search.
          </p>
        </div>
        <div className={styles.dateFilter}>
          <div className={styles.dateButton}>This Month</div>
        </div>
      </section>
      <section className={styles.firstCardsLayer}>
        <div className={styles.firstCard}>
          <InterviewCard />
        </div>
        <div className={styles.secondCard}>
          <JobAppliedCard />
        </div>
        <div className={styles.thirdCard}>
          <UpcomingInterviewCard />
        </div>
      </section>
      <section className={styles.secondcardsLayer}>
        <div className={styles.recentCard}>
          <ApplicationsHistoryCard/>
        </div>
        <div className={styles.savedJobsCard}>
          <SavedJobsCard/>
        </div>
        
      </section>
    </section>
  );
}

export default Dashboard;
