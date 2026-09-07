import { Link, NavLink } from 'react-router-dom';
import styles from './Header.module.scss';

export const Header: React.FC = () => {
  return (
    <header className={styles.header}>
      {/* контейнер для вирівнювання по сітцідля десктопа */}
      <div className={styles.container}>
        {/* ліва: лого та навігація */}
        <div className={styles.leftContainer}>
          <Link to="/" className={styles.logoLink}>
            <img src="./public/img/icons/logo.png" alt="Nice Gadgets logo" />
          </Link>
          <nav className={styles.nav}>
            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive ? `${styles.link} ${styles.active}` : styles.link
              }
            >
              Home
            </NavLink>
            <NavLink
              to="/phones"
              className={({ isActive }) =>
                isActive ? `${styles.link} ${styles.active}` : styles.link
              }
            >
              Phones
            </NavLink>
            <NavLink
              to="/tablets"
              className={({ isActive }) =>
                isActive ? `${styles.link} ${styles.active}` : styles.link
              }
            >
              Tablets
            </NavLink>
            <NavLink
              to="/accessories"
              className={({ isActive }) =>
                isActive ? `${styles.link} ${styles.active}` : styles.link
              }
            >
              Accessories
            </NavLink>
          </nav>
        </div>

        {/* права: обране та кошик */}
        <div className={styles.rightContainer}>
          <Link to="/favorites" className={styles.iconLink}>
            <img src="/img/icons/Favourites (Heart Like).png" alt="Favorites" />
          </Link>
          <Link to="/cart" className={styles.iconLink}>
            <img src="/img/icons/Shopping bag (Cart).png" alt="Cart" />
          </Link>
        </div>
      </div>
    </header>
  );
};
