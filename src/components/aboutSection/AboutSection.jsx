import styles from './aboutSection.module.css';

const AboutSection = ({direction, imgHeight, aboutSecTtl, aboutSecParg, aboutSecImg}) => {
    return (
        <div className={direction !== 'reverse' ? styles.aboutSection : `${styles.aboutSection} ${styles.rowReverse}`}>
            <div className={styles.aboutSecDesc}>
                <h3 className={styles.aboutSecTtl}>{aboutSecTtl}</h3>
                <p className={styles.aboutSecParg}>{aboutSecParg}</p>
            </div>
            <div className={imgHeight !== '100' ? styles.aboutSecImage : `${styles.aboutSecImage} ${styles.SecImgHeight}`}>
                <img
                    className={styles.aboutSecImg}
                    src={process.env.PUBLIC_URL + `/assets/imgs/${aboutSecImg}`}
                    alt={aboutSecImg}
                />
            </div>
        </div>
    )
}

export default AboutSection;