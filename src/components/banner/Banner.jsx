import styles from './banner.module.css';

const Banner = ({imgSrc}) => {
    return (
        <div className={styles.aboutUsImage}>
            <img className={styles.aboutUsImg} src={process.env.PUBLIC_URL + `/assets/imgs/${imgSrc}`} alt={imgSrc} />
        </div>
    )
}

export default Banner;
