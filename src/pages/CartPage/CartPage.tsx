import { Product } from '../../types/Product';
import styles from './CartPage.module.scss';
import { CartItem } from '../../components/CartItem/CartItem';
import { Breadcrumbs } from '../../components/Breadcrumbs/Breadcrumbs';
import { useCart } from '../../Context/CartContext';

interface CartPageProps {
  products: Product[];
}

export const CartPage = ({ products = [] }: CartPageProps) => {
  const {
    cartItems,
    handleIncrease,
    handleDecrease,
    handleRemove,
    checkout,
    totalItemsCount
  } = useCart();

  const productsInCart = cartItems
    .map(cartItem => {
      const product = products.find(
        p => String(p.id) === cartItem.id || String(p.itemId) === cartItem.id
      );

      return product ? { ...product, quantity: cartItem.quantity } : null;
    })
    .filter((item): item is Product & { quantity: number } => item !== null);

  const totalAmount = productsInCart.reduce(
    (sum, p) => sum + p.price * p.quantity,
    0,
  );

  return (
    <div className={styles.container}>
      <Breadcrumbs items={[{ label: 'Cart' }]} />
      <h1>Cart</h1>

      {productsInCart.length === 0 ? (
        <div className={styles.emptyState}>
          <p>Your cart is empty!</p>
          <img src="/img/cart-is-empty.png" alt="No products in cart" />
        </div>
      ) : (
        <div className={styles.cartContent}>
          <div className={styles.cartList}>
            {productsInCart.map(product => (
              <CartItem
                key={product.id}
                product={product}
                quantity={product.quantity}
                onIncrease={() => handleIncrease(product.id)}
                onDecrease={() => handleDecrease(product.id)}
                onRemove={() => handleRemove(product.id)}
              />
            ))}
          </div>

          <div className={styles.checkoutBox}>
            <div className={styles.totalPrice}>${totalAmount}</div>
            <div className={styles.totalItems}>
              Total for {totalItemsCount} items
            </div>
            <button
              type="button"
              className={styles.checkoutButton}
              onClick={checkout}
            >
              Checkout
            </button>
          </div>
        </div>
      )}
    </div>
  );
};
