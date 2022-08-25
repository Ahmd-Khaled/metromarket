import { Link } from 'react-router-dom';

import { useContext } from 'react';
import CartContext from '../../store/cart-context';
import ProductItemForm from '../productItemForm/ProductItemForm';
import styles from './product.module.css';

const Product = ({ id, type, name, imgSrc, offer, priceBefore, priceAfter, currency, pOrder }) => {
    const cartCtx = useContext(CartContext);
    
    const addToCartHandler = (amount) => {
        cartCtx.addItem({
            id: id,
            name: name,
            amount: amount,
            price: priceAfter,
            imgSrc: imgSrc,
            currency: currency,
        });
    };

    const nameUrl = name.replace(/\//g, '').replace(/%/g, '').replace(/-/g, '').replace(/ /g, '-');
    const imgUrl = imgSrc.replace('.jpg', '').replace('.png', '').replace('.jpeg', '').replace('.svg', '');

    return (
        <div className={styles.product} key={id} style={{ order: pOrder }}>
            {offer !== 0 &&
                <div className={styles.productOffer}>{offer}%</div>
            }
            <div className={styles.productTop}>
                <Link to={`/product/${nameUrl}/${imgUrl}`} className={styles.productImage} >
                    <img
                        className={styles.productImg}
                        src={process.env.PUBLIC_URL + `/assets/imgs/Products/${imgSrc}`}
                        alt={imgSrc}
                    />
                    <h5 className={styles.productTitle}>{name}</h5>
                </Link>
                <div className={styles.productPrice}>
                    <div className={styles.productPriceOffer}>
                        <span>{priceAfter}</span>
                        <span className={styles.productPriceCurrency}>{currency}</span>
                    </div>
                    {priceBefore !== 0 &&
                    <span className={styles.productPriceDiscount}>
                        <span>{priceBefore}</span>
                        <span className={styles.productPriceCurrency}>{currency}</span>
                    </span>
                    }
                </div>
            </div>
            <ProductItemForm onAddToCart={addToCartHandler} />
        </div>
    )
}

export default Product;