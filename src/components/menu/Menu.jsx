import { useState } from 'react';
import { Link } from 'react-router-dom';
import HeaderBtn from '../header/header-button/HeaderBtn';
import Logo from '../header/logo/Logo';
import styles from './style/Menu.module.css';

const Menu = () => {
  const [isResponsive, setIsResponsive] = useState(false);
  const mainPath = process.env.PUBLIC_URL;

  const toggleMenu = () => {
    setIsResponsive(!isResponsive);
  };
  return (
    <div className={styles.menuAlign}>
      <div>
        <Logo />
      </div>
      <button className={styles.responsiveMenuIcon} onClick={toggleMenu}>
        {isResponsive ? (
          <i className="fas fa-times"></i>
        ) : (
          <i className="fas fa-bars"></i>
        )}
      </button>
      <nav
        className={
          isResponsive ? `${styles.responsiveBody}` : `${styles.navBody}`
        }
        onClick={() => setIsResponsive(false)}
      >
        <Link className={styles.linkStyle} to={mainPath + '/'} end>
          Home
        </Link>
        <Link className={styles.linkStyle} to={mainPath + '/rooms'} end>
          Rooms
        </Link>
        <Link className={styles.linkStyle} to={mainPath + '/facilities'} end>
          Facilities
        </Link>
        <Link className={styles.linkStyle} to={mainPath + '/contacts'} end>
          Contacts
        </Link>
      </nav>
      <div>
        <HeaderBtn />
      </div>
    </div>
  );
};

export default Menu;
