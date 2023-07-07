import styles from './Bar.module.css';
import general_styles from '../../../general_styles/GeneralStyles.module.css';
const Bar = () => {
  return (
    <div className={`${styles.bar} `}>
      <div className={`${general_styles.container} ${styles.barContainer}`}>
        <h2 className={styles.barHeader}>Bar & restaurant</h2>
        <p className={styles.barText}>
          {' '}
          Ladies and gentlemen, history keeps repeating itself but doesn't teach
          us any lessons. 'Never again' has turned into 'again and again and
          again.' So today, ladies and gentlemen, take Hotel Lunar as a wake-up
          call and a message to be our messenger that people are the ones who
          can change what they want to change.{' '}
        </p>
      </div>
    </div>
  );
};

export default Bar;
