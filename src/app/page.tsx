import React from 'react';
import Main from '@/app/components/Main';
import Panel from '@/app/components/Panel';
import styles from './page.module.css';





const MatrixDashboard = () => {
  return (
    <div className={styles.container}>
      <div className={styles.sidebar}>
        <Panel />
      </div>
      <Main />
    </div>
  );
};

export default MatrixDashboard;
