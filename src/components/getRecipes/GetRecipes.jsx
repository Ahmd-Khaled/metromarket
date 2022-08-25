import { Link } from 'react-router-dom';
import recipesData from './recipesData';
import styles from './getRecipes.module.css';
import { useEffect, useState } from 'react';
import Dots from '../UI/dots/Dots';

const GetRecipes = () => {
    const [slideIndex, setSlideIndex] = useState(1);


    const moveDot = (index) => {
        setSlideIndex(index);
        if (slideIndex !== recipesData.length) {
            setSlideIndex(slideIndex + 1);
        } else if (slideIndex === recipesData.length) {
            setSlideIndex(1);
        }
    };

    useEffect(() => {
        const interval = setInterval(() => {
            moveDot(slideIndex)
        }, 3000);

        return () => clearInterval(interval);
    }, [slideIndex]);

    return (
        <section className={styles.recipes}>
            <div className={styles.recipesContainer}>
                {recipesData.map((obj, index) => {
                    return (
                        <div
                            key={obj.id}
                            className={slideIndex === index + 1
                                ? `${styles.recipesSlide} ${styles.activeAnim}`
                                : `${styles.recipesSlide}`
                            }
                        >
                            <div className={styles.recipesSlideDesc}>
                                <h3 className={styles.recipesName}>{obj.name}</h3>
                                <Link className={styles.recipesGetBtn} to={obj.link}>Get Recipes</Link>
                                <Link className={styles.recipesViewBtn} to="/recipes">View all Recipes</Link>
                            </div>
                            <div className={styles.recipesSlideImage}>
                                <img
                                    src={process.env.PUBLIC_URL + `/assets/imgs/recipes/${obj.imgSrc}`}
                                    alt={obj.name}
                                />
                            </div>
                        </div>
                    )
                })}
                <Dots arrayLength={recipesData.length} slideIndex={slideIndex} moveDot={moveDot} />
            </div>
        </section>
    )
}

export default GetRecipes;