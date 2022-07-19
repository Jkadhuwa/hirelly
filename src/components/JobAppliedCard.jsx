import React from 'react';
import { Link } from 'react-router-dom';
import { Chart as ChartJS, ArcElement, Tooltip } from 'chart.js';
import { Doughnut } from 'react-chartjs-2';
import styles from '../assets/styles/JobAppliedCard.module.scss';

ChartJS.register(ArcElement,Tooltip);

function JobAppliedCard() {
  const data = {
    labels: ['Unsutaible', 'Interviewed'],
    datasets: [
      {
        data: [30, 70],
        backgroundColor: [
          '#232EC1',
          '#EAE7DA',
        ]
      },
    ],

  }

  return (
    <section className={styles.container}>
      <div className={styles.cardTitle}>
        Job Applied
      </div>
      <div className={styles.pieChartSection}>
        <div className={styles.pieChart}>
           <Doughnut data={data} />;
        </div>
      </div>
    
      <section className={styles.scheduleDiv}>
      <Link to="#" className={styles.link}>
        <span className='scheduleLink'> {`View All Jobs Applied >`}</span>
      </Link>
    </section>
      
    </section>
  )
}

export default JobAppliedCard;
