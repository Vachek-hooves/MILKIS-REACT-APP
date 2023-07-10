import { NavLink } from 'react-router-dom';
import HeaderBtn from '../header/header-button/HeaderBtn';
import Logo from '../header/logo/Logo';
import styles from './style/Menu.module.css';

const Menu = () => {
  return (
    <div className={styles.menuAlign}>
      <div>
        <Logo />
      </div>
      <nav className={styles.navBody}>
        <NavLink className={styles.linkStyle}
        to="/hotel/" end>
          Home
        </NavLink>
        <NavLink className={styles.linkStyle}
        to="/hotel/rooms" end>
          Rooms
        </NavLink>
        <NavLink className={styles.linkStyle}
        to="/hotel/facilities" end>
          Facilities
        </NavLink>
        <NavLink className={styles.linkStyle}
        to="/hotel/contacts" end>
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
