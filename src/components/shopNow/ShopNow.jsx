import styles from './shopNow.module.css';

const ShopNow = () => {
    return (
        <section className={styles.shopNow}>
            <div className='sectionContainer'>
                <div className={styles.shopNowContainer}>
                    <img className={styles.shopNowImg} src="./assets/imgs/Ramadan-Banner-en.jpg" alt="Shop Banner" />
                    <button className={styles.shopNowBtn}>Shop Now</button>
                </div>
            </div>
        </section>
    )
}

export default ShopNow;