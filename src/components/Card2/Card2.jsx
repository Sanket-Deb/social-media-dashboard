import React from 'react';
import styles from './Card2.module.css';
import Image from 'next/image';

const Card2 = (props) => {
  return (
    <div className={styles.card2Wrapper}>
      <div className={styles.firstPart}>
        <span>{props.info}</span>
        <Image src={props.handle} width={20} height ={20} alt="Icon"/>
      </div>
      <div className={styles.secondPart}>
        <p style={{color: "var(--secondary-text)", fontSize: "30px", fontWeight: 700}}>{props.data}</p>
        <div className={styles.delta}>
            <Image src={props.arrow} width={10} height={5}  alt="arrow"/>
            <span style={{color: props.deltacolor}}>{props.deltapercent}%
            </span>
        </div>
      </div>
    </div>
  )
}

export default Card2