import { useParams } from 'react-router-dom';
import { useContext } from 'react';
import CartContext from '../../store/cart-context';

import ProductItemForm from '../productItemForm/ProductItemForm';
import styles from './productDetails.module.css';

import productsData from '../products/productsData';

const ProductDetails = (props) => {
    const params = useParams();

    // console.log(params.productName);
    // console.log(params.productId);

    const productMatched = productsData.filter((item) => item.imgSrc.replace('.jpg', '').replace('.png', '') === `${params.productId}`);

    const productFiltered = productMatched[0];

    // console.log(productFiltered.imgSrc);


    const cartCtx = useContext(CartContext);
    
    const addToCartHandler = (amount) => {
        cartCtx.addItem({
            id: productFiltered.id,
            name: productFiltered.name,
            amount: productFiltered.amount,
            price: productFiltered.priceAfter,
            imgSrc: productFiltered.imgSrc,
            currency: productFiltered.currency,
        });
    };

    return (
        <section className={styles.pDetails}>
            <div className='sectionContainer'>
                <div className={styles.pDetailsContainer}>
                    <div className={styles.pDetailsImage}>
                        <img
                            src={process.env.PUBLIC_URL + `/assets/imgs/products/${productFiltered.imgSrc}`}
                            alt={productFiltered.imgSrc}
                        />
                        <div className={styles.productOffer}>{productFiltered.offer}%</div>
                    </div>
                    <div className={styles.pDetailsInfo}>
                        <ProductItemForm
                            isProductPage={true}
                            name={productFiltered.name}
                            priceBefore={productFiltered.priceBefore}
                            priceAfter={productFiltered.priceAfter}
                            currency={productFiltered.currency}
                            onAddToCart={addToCartHandler}
                        />
                        {productFiltered.description && 
                        <div className={styles.pDetailsDesc}>
                            <p className={styles.pDetailsDescParg}>{productFiltered.description}</p>
                            <ul className={styles.pDetailsDescList}>
                                {productFiltered.descriptionList.map((item, index) => {
                                    return (
                                        <li key={index} className={styles.pDetailsDescListItem}>{item}</li>
                                    )
                                })}
                            </ul>
                        </div>
                        }
                    </div>
                </div>
            </div>
        </section>
    )
}

export default ProductDetails;