import React from 'react';
import styles from './Footer.module.css';
import FooterAdress from './FooterAdress';
import Social from './Social';

const Footer = () => {
  return (
    <div className={styles.footerContainer}>
      <div className={styles.contentContainer}>
        <FooterAdress />
        <Social />
      </div>
    </div>
  );
};

export default Footer;
