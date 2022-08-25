import styles from './cartAddRemove.module.css';

const CartAddRemove = ({amount, onAdd, onRemove}) => {
    return (
        <div className={styles.cartItemBtns}>
            <img onClick={onRemove} className={styles.cartItemIconMinus} src="./assets/imgs/minus_blue.svg" alt="-" />
            <span className={styles.cartItemQuant}>{amount}</span>
            <img onClick={onAdd} className={styles.cartItemIconPlus}  src="./assets/imgs/plus_blue.svg" alt="+" />
        </div>
    )
}

export default CartAddRemove;