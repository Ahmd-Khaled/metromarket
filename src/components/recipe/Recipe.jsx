import { Link } from 'react-router-dom';
import styles from './recipe.module.css';

const Recipe = ({ imgSrc, recipeURL, recipeTitle }) => {
    
    return (
        <div className={styles.recipe}>
            <Link to={`${recipeURL}`} className={styles.recipeImage}>
                <img
                    className={styles.recipeImg}
                    src={process.env.PUBLIC_URL + `/assets/imgs/recipes/${imgSrc}`}
                    alt={imgSrc}
                />
            </Link>
            <div className={styles.recipeContent}>
                <h4 className={styles.recipeContentTitle}>{recipeTitle}</h4>
            </div>
        </div>
    )
}

export default Recipe;
