import { useParams } from 'react-router-dom';
import Banner from '../banner/Banner';
import PagePath from '../pagePath/PagePath';
import Recipe from '../recipe/Recipe';
import styles from './recipes.module.css'
import recipesStore from './recipesStore';

const Recipes = () => {
    const params = useParams();
    const categoryName = "Recipes";
    // const categoryName = params.categName.charAt(0).toUpperCase() + params.categName.slice(1);
    return (
        <section className={styles.recipes}>
            <Banner imgSrc="recipes-Banner.jpg" />
            <div className='pageContainer'>
                <PagePath categoryName={categoryName} />
                <div className={styles.recipesContainer}>
                    {recipesStore.map((obj, index) => {
                        return (
                            <Recipe
                                key={obj.id}
                                imgSrc={obj.imgSrc}
                                recipeURL={obj.url}
                                recipeTitle={obj.name}
                            />
                        )
                    })}
                </div>
            </div>
        </section>
    )
}

export default Recipes;
