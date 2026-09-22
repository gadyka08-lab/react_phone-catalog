import { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import styles from './Header.module.scss';
import { CartItem } from '../../types/CartItem';

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

  const cartItems = JSON.parse(localStorage.getItem('cart') || '[]');

  const totalItemsCount = cartItems.reduce(
    (sum: number, item: CartItem) => sum + (item.quantity || 1),
    0,
  );

  return (
    <header className={styles.header}>
      <div className={styles.container}>
        {/* ліва частина: лого та десктопна навігація */}
        <div className={styles.leftContainer}>
          <Link to="/" className={styles.logoLink} onClick={closeMenu}>
            <img src="./img/icons/Logo.png" alt="Nice Gadgets logo" />
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
            <NavLink
              to="/favorites"
              className={({ isActive }) =>
                isActive
                  ? `${styles.iconLink} ${styles.active}`
                  : styles.iconLink
              }
            >
              <img
                src="./img/icons/Favourites (Heart Like).png"
                alt="Favorites"
              />
            </NavLink>
            <Link to="/cart" className={styles.iconLink}>
              <img src="./img/icons/Shopping bag (Cart).png" alt="Cart" />
              {totalItemsCount > 0 && (
                <span className={styles.badge}>{totalItemsCount}</span>
              )}
            </Link>
          </div>
          <button
            className={styles.burgerButton}
            onClick={toggleMenu}
            aria-label="Toggle menu"
          >
            <img src="./img/icons/Union.png" alt="Menu" />
          </button>
        </div>
      </div>

      {/* сайдбар */}
      <div className={`${styles.menuOverlay} ${isMenuOpen ? styles.open : ''}`}>
        <div className={styles.menuHeader}>
          <Link to="/" className={styles.logoLink} onClick={closeMenu}>
            <img src="./img/icons/Logo.png" alt="Nice Gadgets logo" />
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
                isActive
                  ? `${styles.menuLink} ${styles.active}`
                  : styles.menuLink
              }
            >
              {label}
            </NavLink>
          ))}
        </nav>

        <div className={styles.menuFooter}>
          <Link
            to="/favorites"
            className={styles.footerIcon}
            onClick={closeMenu}
          >
            <img src="./img/icons/Favourites (Heart Like).png" alt="Favorites" />
          </Link>
          <Link to="/cart" className={styles.footerIcon} onClick={closeMenu}>
            <img src="./img/icons/Shopping bag (Cart).png" alt="Shopping bag" />
          </Link>
        </div>
      </div>
    </header>
  );
};
