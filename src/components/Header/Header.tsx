import { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import styles from './Header.module.scss';

const navLinks = [
  { to: '/', label: 'Home' },
  { to: '/phones', label: 'Phones' },
  { to: '/tablets', label: 'Tablets' },
  { to: '/accessories', label: 'Accessories' },
];

export const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
    document.body.style.overflow = !isMenuOpen ? 'hidden' : 'auto';
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
    document.body.style.overflow = 'auto';
  };

  return (
    <header className={styles.header}>
      <div className={styles.container}>
        {/* ліва частина: лого та десктопна навігація */}
        <div className={styles.leftContainer}>
          <Link to="/" className={styles.logoLink} onClick={closeMenu}>
            <img src="/img/icons/Logo.png" alt="Nice Gadgets logo" />
          </Link>
          <nav className={styles.nav}>
            {navLinks.map(({ to, label }) => (
              <NavLink
                key={to}
                to={to}
                className={({ isActive }) =>
                  isActive ? `${styles.link} ${styles.active}` : styles.link
                }
              >
                {label}
              </NavLink>
            ))}
          </nav>
        </div>

        {/* права: іконки та бургер-кнопка */}
        <div className={styles.rightContainer}>
          <div className={styles.iconsWrapper}>
            <Link to="/favorites" className={styles.iconLink}>
              <img src="/img/icons/Favourites (Heart Like).png" alt="Favorites" />
            </Link>
            <Link to="/cart" className={styles.iconLink}>
              <img src="/img/icons/Shopping bag (Cart).png" alt="Cart" />
            </Link>
          </div>

          <button
            className={styles.burgerButton}
            onClick={toggleMenu}
            aria-label="Toggle menu"
          >
            <img src="/img/icons/Union.png" alt="Menu" />
          </button>
        </div>
      </div>

      {/* Спливаюче мобільне меню */}
      <div className={`${styles.menuOverlay} ${isMenuOpen ? styles.open : ''}`}>
        <div className={styles.menuHeader}>
          <Link to="/" className={styles.logoLink} onClick={closeMenu}>
            <img src="/img/icons/Logo.png" alt="Nice Gadgets logo" />
          </Link>
          <button
            className={styles.closeButton}
            onClick={closeMenu}
            aria-label="Close menu"
          >
            ✕
          </button>
        </div>

        <nav className={styles.menuNav}>
          {navLinks.map(({ to, label }) => (
            <NavLink
              key={to}
              to={to}
              onClick={closeMenu}
              className={({ isActive }) =>
                isActive ? `${styles.menuLink} ${styles.active}` : styles.menuLink
              }
            >
              {label}
            </NavLink>
          ))}
        </nav>

        <div className={styles.menuFooter}>
          <Link to="/favorites" className={styles.footerIcon} onClick={closeMenu}>
            <img src="/img/icons/Favourites (Heart Like).png" alt="Favorites" />
          </Link>
          <Link to="/cart" className={styles.footerIcon} onClick={closeMenu}>
            <img src="/img/icons/Shopping bag (Cart).png" alt="Shopping bag" />
          </Link>
        </div>
      </div>
    </header>
  );
};
