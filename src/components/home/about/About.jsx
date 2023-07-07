import aboutImg from './img/about_800x600.jpg';
import general_styles from '../../../general_styles/GeneralStyles.module.css';
import styles from './About.module.css';
const About = () => {
  return (
    <div className={`${general_styles.container} ${styles.aboutContainer}`}>
      <div className={styles.aboutDescription}>
        <h2 className={styles.desciptionHeader}>
          About <span style={{color:'#C94842'}}>Milki’s Hotel</span>{' '}
        </h2>
        <div className={styles.desciptionText}>
          <p>
            Ladies and gentlemen, history keeps repeating itself but doesn't
            teach us any lessons. 'Never again' has turned into 'again and again
            and again.' So today, ladies and gentlemen, take Hotel Lunar as a
            wake-up call and a message to be our messenger that people are the
            ones who can change what they want to change.
          </p>
        </div>
        <div className={styles.desciptionText}>
          <p>
            Ladies and gentlemen, history keeps repeating itself but doesn't
            teach us any lessons. 'Never again' has turned into 'again and again
            and again.' So today, ladies and gentlemen, take Hotel Lunar as a
            wake-up call and a message to be our messenger that people are the
            ones who can change what they want to change.
          </p>
        </div>
      </div>
      <div className={styles.aboutImg}>
        <img src={aboutImg}></img>
      </div>
    </div>
  );
};

export default About;
