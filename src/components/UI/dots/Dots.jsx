import { v4 as uuidv4 } from 'uuid';
import styles from './dots.module.css';

const Dots = ({arrayLength, slideIndex, moveDot}) => {
    return (
        <div className={styles.containerDots}>
            {Array.from({ length: arrayLength }).map((item, index) => (
                <div
                    key={uuidv4()}
                    className={slideIndex === index + 1
                        ? `${styles.dot} ${styles.dotActive}`
                        : `${styles.dot}`}
                    onClick={() => moveDot(index + 1)}
                ></div>
            ))}
        </div>
    )
}

export default Dots;