import React from 'react';

// styles declaration
import styles from './style.module.sass';

export default function () {
  return (
    <svg className={styles.loader} width="40" height="40" version="1.1" xmlns="http://www.w3.org/2000/svg">
      <circle cx="20" cy="20" r="15" />
    </svg>
  );
}
