import { useEffect, useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import BtnSlider from '../BtnSlider/BtnSlider';
import dataSlider from './dataSlider';
import styles from './topSlider.module.css';

const TopSlider = () => {
    const [slideIndex, setSlideIndex] = useState(1);

    const nextSlide = () => {
        if (slideIndex !== dataSlider.length) {
            setSlideIndex(slideIndex + 1);
        } else if (slideIndex === dataSlider.length) {
            setSlideIndex(1);
        }
    };

    const prevSlide = () => {
        if (slideIndex !== 1) {
            setSlideIndex(slideIndex - 1)
        } else if (slideIndex === 1) {
            setSlideIndex(dataSlider.length)
        }
    };

    const moveDot = (index) => {
        setSlideIndex(index);
    };

    useEffect(()=>{
        const interval = setInterval(()=>{
            nextSlide();        
        }, 3000);

        return () => clearInterval(interval);
    });

    return (
        <section className={styles.topSlider}>
            <div className={styles.topSliderContainer}>
                {dataSlider.map((obj, index) => {
                    return (
                        <div
                            key={obj.id}
                            className={slideIndex === index + 1
                                ? `${styles.topSliderImgCont} ${styles.activeAnim}`
                                : `${styles.topSliderImgCont}`
                            }
                        >
                            <img
                                className={styles.topSliderImg}
                                src={process.env.PUBLIC_URL + `/assets/imgs/${obj.imgSrc}`}
                                alt={obj.imgSrc}
                            />
                            <button className={styles.topSliderBtn}>Shop Now</button>
                        </div>
                    )
                })}
                <BtnSlider moveSlide={nextSlide} direction={'next'} />
                <BtnSlider moveSlide={prevSlide} direction={'prev'} />
                
                <div className={styles.containerDots}>
                    {Array.from({ length: dataSlider.length }).map((item, index) => (
                        <div
                            key={uuidv4()}
                            className={slideIndex === index + 1
                                ? `${styles.dot} ${styles.dotActive}`
                                : `${styles.dot}`}
                            onClick={() => moveDot(index + 1)}
                        ></div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default TopSlider