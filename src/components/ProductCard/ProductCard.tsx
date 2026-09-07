import styles from './ProductCard.module.scss';
import { Product } from '../../types/Product';

interface ProductCardProps {
  product: Product;
  price?: number; // пропс для гнучкого керування ціною в різних секціях
}

export const ProductCard = ({ product, price: salePrice }: ProductCardProps) => {
  const {
    id,
    name,
    fullPrice,
    price,
    screen,
    capacity,
    ram,
    year,
    image
  } = product;

  const displayPrice = salePrice !== undefined ? salePrice : fullPrice;
  const hasDiscount = salePrice !== undefined && salePrice < fullPrice;

  return (
    <div className={styles.productCard}>
      {/* контенер зображення товару */}
      <div className={styles.imageContainer}>
        <img src={image} alt={name} className={styles.image} />
      </div>

      {/* назва товару*/}
      <h3 className={styles.title}>{name}</h3>

      {/* ціни: основна та закреслена повна коли є знижка */}
      <div className={styles.priceWrapper}>
        <span className={styles.price}>${displayPrice}</span>
        {hasDiscount && (
          <span className={styles.fullPrice}>${fullPrice}</span>
        )}
      </div>

      <div className={styles.divider} />

      {/* інші характеристики */}
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

      {/* кнопки додавання в кошик та вибране */}
      <div className={styles.buttonsWrapper}>
        <button className={styles.addToCartButton}>Add to cart</button>
        <button className={styles.favoriteButton}>♡</button>
      </div>
    </div>
  );
};
