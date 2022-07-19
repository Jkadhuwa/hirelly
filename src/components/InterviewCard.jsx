import React from 'react';
import styles from '../assets/styles/Interview.module.scss';

function InterviewCard() {
  return (
    <section className={styles.container}>
        <article className={styles.data}>
            <div className={styles.icons}>
            </div>
            <div className={styles.numbers}>
                {37}
            </div>
            <div className={styles.description}>
                {'Total Jobs Applied'}

            </div>

        </article>
        <article className={styles.data}>
            <div className={styles.icons}>
        
            </div>
            <div className={styles.numbers}>
                {12}
            </div>
            <div className={styles.description}>
                {'Interviewed'}

            </div>
        </article>
       
    </section>
  )
}

export default InterviewCard;
