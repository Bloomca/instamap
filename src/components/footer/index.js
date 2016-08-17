import React from 'react';

// style declaration
import styles from './style.module.sass';

export default function () {
  return (
    <footer className={styles.container}>
      <div className={'mui-container'}>
        {'Made by Seva Zaikov'}
        {' – '}
        <a href={'https://github.com/Bloomca/instamap'} target={'_blank'} className={styles.link}>
          {'Github'}
        </a>
      </div>
    </footer>
  );
}
