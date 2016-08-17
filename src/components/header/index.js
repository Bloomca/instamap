import React from 'react';

// styles declaration
import styles from './style.module.sass';

export default function () {
  return (
    <header className={`mui-appbar ${styles.container}`}>
      <div className={'mui-container mui--text-display1'}>
        {'Instamap'}
      </div>
    </header>
  );
}
