import React from 'react';
import styles from './Card2.module.css';
import Image from 'next/image';

const Card2 = (props) => {
  return (
    <div className={styles.card2Wrapper}>
      <div className={styles.firstPart}>
        <span>PAGE VIEWS</span>
        <Image src='./images/icon-facebook.svg' width={20} height ={20} alt="Icon"/>
      </div>
      <div className={styles.secondPart}>
        <p style={{color: "var(--secondary-text)", fontSize: "30px", fontWeight: 700}}>87</p>
        <div className={styles.delta}>
            <Image src='./images/icon-up.svg' width={10} height={10}  alt="arrow"/>
            <span style={{color: 'hsl(163, 72%, 41%)'}}>3% Today</span>
        </div>
      </div>
    </div>
  )
}

export default Card2