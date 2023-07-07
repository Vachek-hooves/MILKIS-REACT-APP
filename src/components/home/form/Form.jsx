import React from 'react';
import HeaderBtn from '../../header/header-button/HeaderBtn';
import styles from './Form.module.css';

const Form = () => {
  return (
    <div className={styles.container}>
      <div>
        <h1 className={styles.h1}>A Memorable Experience</h1>
        <p className={styles.slogan}>Where every flavor tells you a story</p>
      </div>
      <div className={styles.formSize}>
        <form className={styles.formStyling}>
          <label className={styles.formHeader}>Book a Room</label>
          <label>
            <input type="text" placeholder="your name"></input>
          </label>
          <label>
            <input type="number" placeholder="your number"></input>
          </label>
          <label>
            <input type="date" placeholder="check in date"></input>
          </label>
          <label>
            <input type="time" placeholder="check in time"></input>
          </label>
          <div>
            <HeaderBtn />
          </div>
        </form>
      </div>
    </div>
  );
};

export default Form;
