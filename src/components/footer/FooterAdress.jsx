import React from 'react';
import styles from './Footer.module.css';

const FooterAdress = () => {
  return (
    <div className={styles.adressContainer}>
      <div className={styles.footerHeader}>
        <h2> Milki's Hotel</h2>
        <p className={styles.slogan}>
          Milki’s Hotel Where every flavor tells you a story
        </p>
      </div>
      <div className={styles.adressText}>
        <p>
          <span title="Find us on Google.maps">
            {' '}
            Address : Road 12, Peace Avenue,Ado,Ekiti
          </span>
        </p>
      </div>
      <div className={styles.adressText}>
        <p>
          Phone number: <a href="tel:+2349061504648">: +2349061504648</a>
        </p>
      </div>
      <div className={styles.adressText}>
        <p>
          Email:
          <a href="oluwadamilolafaj@gmail.com">oluwadamilolafaj@gmail.com</a>
        </p>
      </div>
    </div>
  );
};

export default FooterAdress;
