import { useRef } from 'react';
import styles from './productItemForm.module.css';

const ProductItemForm = ({onAddToCart, isProductPage, name, priceBefore, priceAfter, currency}) => {
    const amountInputRef = useRef();

    const submitHandler = (event) => {
        event.preventDefault();

        const enteredAmount = amountInputRef.current.value;
        const enteredAmountNumber = +enteredAmount;
        // console.log(enteredAmountNumber);

        // We can put here logic for displaying selected
        // amount item and respective price below the Add button

        onAddToCart(enteredAmountNumber);
    };
    
    return (
        <form className={styles.productForm} onSubmit={submitHandler}>
            <div className={styles.productFormPageCont}>
                {isProductPage && 
                    <div className={styles.productFormPage}>
                        <p className={styles.productFormPageName}>{name}</p>
                        <div className={styles.productFormPagePrices}>
                            <span className={styles.productFormPagePriceAft}>
                                {priceAfter} <span>{currency}</span>
                            </span>
                            <span className={styles.productFormPagePriceBef}>
                                {priceBefore} <span>{currency}</span>
                            </span>
                        </div>
                    </div>
                }
                <div className={styles.productFormSelectCont}>
                    <select ref={amountInputRef} className={styles.productFormSelect}>
                        {Array.from({ length: 100 }).map((item, index) => {
                            return (
                                <option className={styles.productFormSelectOpt} value={index + 1} key={index + 1}>{index+1}</option>
                            )
                        })}
                    </select>
                </div>
            </div>
            <button  className={styles.productAddBtn} type='submit'>add</button>
        </form>
    )
}

export default ProductItemForm;