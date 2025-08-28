import React from 'react'
import styles from '@/app/components/styles/page.module.css';
import { AppConfig } from '../types';
import { contentConfig } from '../config/config';


function Header() {
  const { appInfo  } = contentConfig as AppConfig;
  return (
    <div className={styles.sidebarHeader}>
      <div className={styles.logo}>
        <div className={styles.logoIcon}>
          <div className={styles.logoIconInner}></div>
        </div>
        <div>
          <h1 className={styles.logoText}>{appInfo.name}</h1>
          <p className={styles.logoSubtext}>{appInfo.byline}</p>
        </div>
      </div>
      <p className={styles.privacyText}>{appInfo.tagline}</p>
    </div>
  )
}

export default Header;
