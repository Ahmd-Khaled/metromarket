import CartAddRemove from '../CartAddRemove/CartAddRemove';
import styles from './cartItem.module.css';

const CartItem = ({ hovered, id, name, amount, price, imgSrc, currency, onAdd, onRemove, onDelete }) => {
    return (
        <div className={styles.cartItem}>
            <div className={styles.cartItemImage}>
                <img
                    className={styles.cartItemImg}
                    src={process.env.PUBLIC_URL + `/assets/imgs/Products/${imgSrc}`}
                    alt={imgSrc}
                />
            </div>
            <div className={styles.cartItemDesc}>
                <h4 className={styles.cartItemTitle}>{name}</h4>
                <p className={styles.cartItemPrice}>{price.toFixed(2)} <span>{currency}</span></p>
            </div>
            <CartAddRemove amount={amount} onAdd={onAdd} onRemove={onRemove} />
            <img
                className={hovered ? `${styles.cartItemClearIcon} ${styles.hovered}` : styles.cartItemClearIcon}
                src="./assets/imgs/Clearcart.svg" alt="Clearcart"
                onClick={onDelete}
            />
        </div>
    )
}


export default CartItem;