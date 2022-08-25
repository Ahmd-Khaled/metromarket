import styles from './btnSlider.module.css';
import leftArrow from './icons/left-arrow.svg';
import rightArrow from './icons/right-arrow.svg';

const BtnSlider = ({ moveSlide, direction }) => {
  // console.log(direction, moveSlide);
  return (
    <button
      onClick={moveSlide}
      className={direction === 'next' ? `${styles.btnSlider} ${styles.next}` : `${styles.btnSlider} ${styles.prev}`}
    >
      <img src={direction === 'next' ? rightArrow : leftArrow} alt="Arrow" />
    </button>
  )
}

export default BtnSlider;