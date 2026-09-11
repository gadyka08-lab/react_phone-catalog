import { useState } from 'react';
import { Link } from 'react-router-dom';
import styles from './ProductCard.module.scss';
import { Product } from '../../types/Product';

interface ProductCardProps {
  product: Product;
  price?: number;
}

export const ProductCard = ({ product, price: salePrice }: ProductCardProps) => {
  const [isInCart, setIsInCart] = useState(false);
  const [isInFavorite, setIsInFavorite] = useState(false);

  const {
    id,
    itemId,
    name,
    fullPrice,
    screen,
    capacity,
    ram,
    year,
    image
  } = product;

  const displayPrice = salePrice !== undefined ? salePrice : fullPrice;
  const hasDiscount = salePrice !== undefined && salePrice < fullPrice;

  const handleAddToCart = () => {
    setIsInCart(!isInCart);
  };

  const handleAddToFavorite = () => {
    setIsInFavorite(!isInFavorite);
  };

  return (
    <div className={styles.productCard}>
      {/* обгортка зображення з посиланням */}
      <Link to={`/product/${itemId}`} className={styles.imageContainer}>
        <img
          src={image.startsWith('/') ? image : `/${image}`}
          alt={name}
          className={styles.image}
        />
      </Link>

      {/* обгортка назви з посиланням */}
      <div className={styles.titleWrapper}>
        <Link to={`/product/${itemId}`} className={styles.titleLink}>
          <h3 className={styles.title}>{name}</h3>
        </Link>
      </div>

      {/* обгортка ціни */}
      <div className={styles.priceWrapper}>
        <span className={styles.price}>${displayPrice}</span>
        {hasDiscount && (
          <span className={styles.fullPrice}>${fullPrice}</span>
        )}
      </div>

      <div className={styles.divider} />

      {/* обгортка характеристик */}
      <ul className={styles.specs}>
        <li className={styles.specRow}>
          <span className={styles.specLabel}>Screen</span>
          <span className={styles.specValue}>{screen}</span>
        </li>
        <li className={styles.specRow}>
          <span className={styles.specLabel}>Capacity</span>
          <span className={styles.specValue}>{capacity}</span>
        </li>
        <li className={styles.specRow}>
          <span className={styles.specLabel}>RAM</span>
          <span className={styles.specValue}>{ram}</span>
        </li>
        <li className={styles.specRow}>
          <span className={styles.specLabel}>Year</span>
          <span className={styles.specValue}>{year}</span>
        </li>
      </ul>

      {/* обгортка кнопок */}
      <div className={styles.buttonsWrapper}>
        <button
          className={`${styles.addToCartButton} ${isInCart ? styles.added : ''}`}
          onClick={handleAddToCart}
        >
          {isInCart ? 'Added to cart' : 'Add to cart'}
        </button>
        <button
          className={`${styles.favoriteButton} ${isInFavorite ? styles.activeFavorite : ''}`}
          onClick={handleAddToFavorite}
          aria-label="Favorites"
        >
          <img
            src={isInFavorite ? "/img/icons/Favourites Filled (Heart Like).png" : "/img/icons/Favourites (Heart Like).png"}
            alt="Favorite icon"
            className={styles.favoriteIcon}
          />
        </button>
      </div>
    </div>
  );
};
