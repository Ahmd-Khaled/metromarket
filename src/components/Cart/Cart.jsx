import { useContext, useState } from 'react';
import CartContext from '../../store/cart-context';
import CartItem from '../CartItem/CartItem';
import styles from './cart.module.css';

const Cart = (props) => {
    const [hovered, setHovered] = useState(false);

    const cartCtx = useContext(CartContext);

    const totalAmount = cartCtx.totalAmount.toFixed(2);
    const hasItems = cartCtx.items.length > 0;

    const cartItemRemoveHandler = (id) => {
        cartCtx.removeItem(id);
    };

    const cartItemAddHandler = (item) => {
        cartCtx.addItem({ ...item, amount: 1 });
    };

    const removeProductHandler = (item) => {
        cartCtx.removeProduct(item);
    };

    const removeAllProductsHandler = () => {
        cartCtx.items.map((item) => {
            cartCtx.removeProduct(item);
        })
    };

    return (
        <section className={styles.cart}>
            <div className='pageContainer'>
                <div className={styles.cartContainer}>
                    {totalAmount < 200 && 
                        <div className={styles.cartTopMsg}>
                            <p>*The total cart value is less than the minimum amount 200 LE</p>
                        </div>
                    }
                    <div className={styles.cartClearAll}>
                        <div className={styles.cartPageLinkPath}>Home &gt; Cart</div>
                        {cartCtx.items.length !== 0 && 
                            <a
                                href='/'
                                className={styles.cartClearAllBtn}
                                onMouseMove={() => setHovered(true)}
                                onMouseLeave={() => setHovered(false)}
                                onClick={removeAllProductsHandler}
                            >
                                <img className={styles.cartClearIcon} src="./assets/imgs/Clearcart.svg" alt="Clearcart" />
                                <span className={styles.cartClearBtn}>Clear all</span>
                            </a>
                        }
                    </div>
                    <div className={styles.cartWrapper}>
                        <div className={styles.cartItems}>
                            {cartCtx.items.map((item) => (
                                <CartItem
                                    hovered={hovered}
                                    key={item.id}
                                    id={item.id}
                                    name={item.name}
                                    amount={item.amount}
                                    price={item.price}
                                    imgSrc={item.imgSrc}
                                    currency={item.currency}
                                    onAdd={cartItemAddHandler.bind(null, item)}
                                    onRemove={cartItemRemoveHandler.bind(null, item.id)}
                                    onDelete ={removeProductHandler.bind(null, item)}
                                />
                            ))}
                        </div>
                        <div className={styles.cartTotal}>
                            <div className={styles.cartTotalPrice}>
                                <span className={styles.cartTotalPriceTxt}>Total Price</span>
                                <p className={styles.cartTotalPriceValue}>{totalAmount} <span>LE</span></p>
                            </div>
                            <div className={styles.cartTotalBtns}>
                                {hasItems && <a className={styles.cartTotalBtnsCont} href="/continue">Continue</a>}
                                <a className={styles.cartTotalBtnsBack} href="/back">Back to Metro</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Cart;