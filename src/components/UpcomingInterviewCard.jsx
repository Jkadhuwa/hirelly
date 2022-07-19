import React from 'react';
import { Link } from 'react-router-dom';
import styles from '../assets/styles/UpcomingInterviews.module.scss'

function UpcomingInterviewCard() {
  return (
   <section className={styles.container}>
    <div className={styles.cardTitle}>
      { `Upcoming Interview`}
    </div>

    <section className={styles.dateSelector}>
      <div className={styles.dateDiv}>
        <span className={styles.day}>{`Today`}</span>
        <span className={styles.date}>{`Jan 12, 2022`}</span>
      </div>
      <div className={styles.sliderDiv}>
        <span className={styles.back}>{`<`}</span>
        <span className={styles.forward}>{`>`}</span>
      </div>
    </section>

    <section className={styles.meetingCard}>
      <div className={styles.interviewerDiv}>
        <div className={styles.interviewerPic}/>
        <div className={styles.interviewerDetails}>
          <div className={styles.interviewerName}>{`Musinda Kadhuwa`}</div>
          <div className={styles.interviewerdesg}>{`Tech Recruiter Uninet`}</div>
        </div>
      </div>
      <div className={styles.timeDiv}>{`10:00 - 11:00`}</div>
    </section>

    <section className={styles.scheduleDiv}>
      <Link to="#" className={styles.link}>
        <span className='scheduleLink'> {`View Schedule >`}</span>
      </Link>
    </section>

   </section>
  )
}

export default UpcomingInterviewCard