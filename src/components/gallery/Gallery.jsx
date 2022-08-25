import galleryData from './galleryData';
import styles from './gallery.module.css';
import { useEffect, useState } from 'react';
import Dots from '../UI/dots/Dots';

const Gallery = () => {
    const initialSectionArray = Array.from({ length: galleryData.length }, (_, i) => i + 1);
    const [slideIndex, setSlideIndex] = useState(1);
    const [listOrder, setListOrder] = useState(initialSectionArray);

    const moveDot = (index) => {
        setSlideIndex(index);
        
        let lastElement = listOrder.pop();
        let unSheftedList = listOrder.unshift(lastElement)

        setListOrder(() => {
            return [...listOrder];
        });
    };

    useEffect(()=>{
        const interval = setInterval(()=>{
            moveDot();        
        }, 2000);

        return () => clearInterval(interval);
    });

    return (
        <section className={styles.gallery}>
            <div className={styles.galleryContainer}>
                <div className={styles.galleryImages}>
                    {galleryData.map((obj, index) => {
                        return (
                            <div
                                className={styles.galleryImgHolder}
                                key={obj.id}
                                style={{order: listOrder[index]}}
                            >
                                    <img
                                        className={styles.galleryImg}
                                        src={process.env.PUBLIC_URL + `/assets/imgs/gallery/${obj.imgSrc}`}
                                        alt={obj.imgSrc}
                                    />
                            </div>
                        )
                    })}
                </div>
                <Dots arrayLength={galleryData.length} slideIndex={slideIndex} moveDot={moveDot} />
            </div>
        </section>
    )
}

export default Gallery;