import styles from './Footer.module.css';
import { socialData } from '../../config/SocialData';
const Social = () => {
  return (
    <div className={styles.socialContainer}>
      {socialData.map((element) => (
        <div>
          <a href={element.link} className={styles.link}>{element.title}</a>
        </div>
      ))}
    </div>
  );
};

export default Social;
