import React from 'react'
import styles from './PageTitle.module.css'

const PageTitle = () => {
  return (
  <>
    <div className={styles.pageTitle}>
      <p>Social Media Dashboard</p>
      <p style={{fontSize:"14px", color:"var(--primary-text)",fontWeight: 600}}>Total Followers: 23,004</p>
    </div>
  </>

  )
}

export default PageTitle;