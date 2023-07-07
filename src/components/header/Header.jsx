import styles from './style/Header.module.css';
import HeaderBtn from './header-button/HeaderBtn';
import Logo from './logo/Logo';

const Header = () => {
  return (
    <div>
      <div className={styles.headerArrenge}>
        <Logo />
        <HeaderBtn />
      </div>
    </div>
  );
};

export default Header;

