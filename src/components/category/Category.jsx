import { useState } from 'react';
import { useParams } from 'react-router-dom';

import FilterList from '../filterList/FilterList';
import PagePath from '../pagePath/PagePath';
import Product from '../product/Product';
import productsData from '../products/productsData';
import styles from './category.module.css';

const Category = () => {
    const params = useParams();

    const categoryName = params.categName.charAt(0).toUpperCase() + params.categName.slice(1);

    // const selectedBrand = "Nestle";
    
    const matchedProducts = productsData.filter((item) => item.category[1] === categoryName)
    // const matchedProductsLength = matchedProducts.length;
    
    const [displayedProducts, setDisplayedProducts] = useState(matchedProducts);
    const displayedProductsLength = displayedProducts.length;
    
    const brands = matchedProducts.map((item) => item.brand);
    
    const countBrands = {};

    brands.forEach(element => {
        countBrands[element] = (countBrands[element] || 0) + 1;
    });

// Notes:
    // check loop of item.brand over the checkedValuesList
    const onFilterCheckedBox = (checkedValuesList) => {
        const listOfSelectedBrands = matchedProducts.filter((item) => (
            item.brand === checkedValuesList[0] ||
            item.brand === checkedValuesList[1] ||
            item.brand === checkedValuesList[2] ||
            item.brand === checkedValuesList[3] ||
            item.brand === checkedValuesList[4] ||
            item.brand === checkedValuesList[5] ||
            item.brand === checkedValuesList[6]
        ));

        setDisplayedProducts(listOfSelectedBrands);
        
        // console.log(checkedValuesList);
        // console.log(listOfSelectedBrands);
    }

    const onClearSelected = () => {
        // setDisplayedProducts(matchedProducts);
        // console.log(displayedProducts)
    }


    return (
        <section className={styles.category}>
            <div className='sectionContainer'>
                <div className={styles.categoryContainer}>
                    <div className={styles.categoryTop}>
                        <div className={styles.categoryLinks}>
                            <PagePath
                                categoryName={categoryName}
                                matchedProducts={matchedProducts}
                            />
                            <div className={styles.categoryResultsNum}>
                                <span>{displayedProductsLength}</span>
                                <span>{displayedProductsLength > 1 ? "Results" : "Result"}</span>
                                <span>In {categoryName}</span>
                            </div>
                        </div>
                        <div className={styles.categoryResultsBanner}>
                            <a className={styles.categoryBannerLink} href="/">
                                <img
                                    className={styles.categoryBannerImg}
                                    src={process.env.PUBLIC_URL + `/assets/imgs/banner-777253427.jpg`}
                                    alt="Banner-Img"
                                />
                            </a>
                        </div>
                    </div>
                    <div className={styles.categoryResults}>
                        <div className={styles.categoryFilterWrapper}>
                            <FilterList
                                countBrands={countBrands} 
                                onFilterCheckedBox={onFilterCheckedBox} 
                                onClearSelected={onClearSelected} 
                            />
                        </div>
                        <div className={styles.categoryResultsItemsWrapper}>
                            <div className={styles.categoryResultsItems}>
                                {displayedProducts.map((obj, index) => {
                                    return (
                                        <div className={styles.categoryResultsItem} key={obj.id}>
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
                                            />
                                        </div>
                                    )
                                })}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Category;