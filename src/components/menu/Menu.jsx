import { NavLink } from 'react-router-dom';
import styles from './style/Menu.module.css'
const Menu = () => {
  return (
    <nav className={styles.navBody}>
      <NavLink to="." end>
        Home
      </NavLink>
      <NavLink to="rooms" end>
        Rooms
      </NavLink>
      <NavLink to="facilities" end>
        Facilities
      </NavLink>
      <NavLink to="contacts" end>
        Contacts
      </NavLink>
    </nav>
  );
};

export default Menu;
