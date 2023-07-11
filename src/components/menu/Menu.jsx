import { NavLink } from 'react-router-dom';
import HeaderBtn from '../header/header-button/HeaderBtn';
import Logo from '../header/logo/Logo';
import styles from './style/Menu.module.css';

const Menu = () => {
  const mainPath = process.env.PUBLIC_URL
  return (
    <div className={styles.menuAlign}>
      <div>
        <Logo />
      </div>
      <nav className={styles.navBody}>
        <NavLink className={styles.linkStyle}
        to={mainPath + '/'} end>
          Home
        </NavLink>
        <NavLink className={styles.linkStyle}
        to={mainPath + '/rooms'} end>
          Rooms
        </NavLink>
        <NavLink className={styles.linkStyle}
        to={mainPath + '/facilities'} end>
          Facilities
        </NavLink>
        <NavLink className={styles.linkStyle}
        to={mainPath + '/contacts'} end>
          Contacts
        </NavLink>
      </nav>
      <div>
        <HeaderBtn />
      </div>
    </div>
  );
};

export default Menu;
