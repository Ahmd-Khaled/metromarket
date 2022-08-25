import { Link } from 'react-router-dom';

import { useContext, useEffect, useState } from 'react';
import CartContext from '../../store/cart-context';
import styles from './headerCartBtn.module.css';

const HeaderCartBtn = () => {
    const [btnIsHighLighted, setBtnIsHighLighted] = useState(false);
    const cartCtx = useContext(CartContext);
    const { items } = cartCtx;
    
    const numberOfCartItems = cartCtx.items.reduce((curNumber, item) => {
        return curNumber + item.amount;
    }, 0);


    const btnClasses = `${styles.headerCart} ${btnIsHighLighted ? styles.bump : ''}`;

    useEffect(() => {
        if (items.length === 0) {
            return;
        } 

        setBtnIsHighLighted(true);

        const timer = setTimeout(() => {
            setBtnIsHighLighted(false);
        }, 300); /*300: Animation Duration=300ms */

        return () => {
            clearTimeout(timer);
        };

    }, [items]);

    return (
        <Link to='/cart' className={btnClasses}>
            <div className={styles.headerCartInfo}>
                <img className={styles.headerCartIcon} src={process.env.PUBLIC_URL + "/assets/imgs/cart.svg"} alt="cart" />
                <span className={styles.headerCartNum}>{numberOfCartItems}</span>
            </div>
            <span className={styles.headerCartTxt}>Cart</span>
        </Link>
    )
}

export default HeaderCartBtn;