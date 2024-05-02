import React from 'react'
import styles from './Card.module.css';
import Image from 'next/image';



const Card = ({ 
  icon = './images/icon-facebook.svg',
  username = '@sanket',
  followers = 0, 
  deltafollowers = '0',
  countcolour = 'hsl(163, 72%, 41%)',
  arrow = './images/icon-up.svg',
  bordercolour= 'hsl(208, 92%, 53%)', 
  label= 'SUBSCRIBER'
}) => {


  return (
    <>
      <div style={{ borderTop: `4px solid ${bordercolour}`}} className={styles.cardWrapper}>
        <div className={styles.firstSection}>
          <Image src={icon} width={20} height={20} alt="Icon"/>
          <span>{username}</span>
        </div>
        <p style={{color: "var(--secondary-text)", fontSize: "50px", fontWeight: 700}}>{followers}</p>
        <p style={{letterSpacing: "5px"}}>{label}</p>
        <div>
          <Image src={arrow} width={10} height={10}  alt="arrow"/>
          <span style={{color: countcolour}}>{deltafollowers} Today</span>
        </div>
      </div>
    </>
  )
}

export default Card;