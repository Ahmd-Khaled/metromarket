import { useEffect, useState } from 'react';
import { faArrowLeft, faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Product from '../product/Product';
import styles from './products.module.css';
import productsData from './productsData';

const Products = ({ sectionName }) => {
    const sectionArrayLength = (productsData.filter((ele) => ele.type === sectionName)).length;
    const initialSectionArray = Array.from({ length: sectionArrayLength }, (_, i) => i + 1);

    // console.log(sectionArrayLength);

    const [listOrder, setListOrder] = useState(initialSectionArray);

    const nextSlide = () => {
        let lastElement = listOrder.pop();
        let unSheftedList = listOrder.unshift(lastElement)

        setListOrder(() => {
            return [...listOrder];
        });
    };
    
    const prevSlide = () => {
        let firstElement = listOrder.shift();
        let sheftedList = listOrder.push(firstElement)

        setListOrder(() => {
            return [...listOrder];
        });
    };

    useEffect(()=>{
        const interval = setInterval(()=>{
            prevSlide();        
        }, 3000);

        return () => clearInterval(interval);
    });

    return (
        <section className={styles.products}>
            <div className='sectionContainer'>
                <h2 className={styles.productsTitle}>{sectionName}</h2>            
            </div>
            <div
                className={styles.productsContainer}
                style={{
                    width: sectionArrayLength === 12 ? sectionArrayLength * 282 : '100vw',
                    transform: sectionArrayLength === 12 ? "translateX(-160px)" : "translateX(0px)"
                }}>
                {productsData.map((obj, index) => {
                    return (
                        (sectionName === obj.type) && 
                        <Product
                            key={obj.id}
                            id={obj.id}
                            type={obj.type}
                            name={obj.name}
                            imgSrc={obj.imgSrc}
                            offer={obj.offer}
                            priceBefore={obj.priceBefore}
                            priceAfter={obj.priceAfter}
                            currency={obj.currency}
                            pOrder={listOrder[index]}
                        />
                    )
                })}
            </div>
            <div className={styles.productsArrows}>
                <FontAwesomeIcon onClick={prevSlide} className={styles.productsArrowLeft} icon={faArrowLeft} />
                <FontAwesomeIcon onClick={nextSlide} className={styles.productsArrowRight} icon={faArrowRight} />
            </div>
        </section>
    )
}

export default Products;