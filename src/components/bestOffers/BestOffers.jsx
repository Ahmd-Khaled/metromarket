import bestOffersImgs from './bestOffersImgs';
import styles from './bestOffers.module.css';

const BestOffers = () => {
    return (
        <section className={styles.bestOffers}>
            <div className='sectionContainer'>
                <div className={styles.bestOffersContainer}>
                    <h3 className={styles.bestOffersTitle}>Best offers this month</h3>
                    <div className={styles.bestOffersImgCont}>
                        {bestOffersImgs.map((obj, index) => {
                            return (
                                <div key={obj.id} className={styles.bestOffersImage}>
                                    <img
                                        className={styles.bestOffersImg}
                                        src={process.env.PUBLIC_URL + `/assets/imgs/bestOffers/${obj.imgSrc}`}
                                        alt={obj.imgSrc}
                                    />
                                    <div className={styles.bestOffersImgTtl}>{obj.title}</div>
                                </div>
                            )
                        })}
                    </div>
                </div>
            </div>
        </section>
    )
}

export default BestOffers;