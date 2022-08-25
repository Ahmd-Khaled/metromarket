import { useParams } from 'react-router-dom';
import Banner from '../banner/Banner';
import PagePath from '../pagePath/PagePath';
import Product from '../product/Product';
import Recipe from '../recipe/Recipe';
import recipesStore from '../recipes/recipesStore';
import productsData from '../products/productsData'; 
import styles from './recipeDetails.module.css';


const RecipeDetails = () => {
    const params = useParams();

    const findRecipe = (recipeUrl) => {
        return (recipesStore.filter((ele) => ele.url === recipeUrl))[0];
    };

    const matchedRecipe = params.recipeName;
    const filteredRecipe = findRecipe(matchedRecipe);

    // console.log(findRecipe('1694649007').name);
    // console.log(filteredRecipe)

    let relatedProducts;

    if (filteredRecipe.ingredientProducts) {
        relatedProducts = productsData.filter((ele) =>
            ele.imgSrc === filteredRecipe.ingredientProducts[0] ||
            ele.imgSrc === filteredRecipe.ingredientProducts[1] ||
            ele.imgSrc === filteredRecipe.ingredientProducts[2]
        );
    }

    // console.log(relatedProducts);

    return (
        <section className={styles.recipeDetails}>
            <Banner imgSrc="recipes-Banner.jpg" />
            <div className='pageContainer'>
                <PagePath />
                <div className={styles.recipeDetContainer}>
                    <div className={styles.recipeDetContent}>
                        <div className={styles.recipeDetImage}>
                            <img className={styles.recipeDetImg} src={process.env.PUBLIC_URL + `/assets/imgs/recipes/${filteredRecipe.imgSrc}`} alt="" />
                        </div>
                        <div className={styles.recipeDetInfo}>
                            <h4 className={styles.recipeDetTitle}>{filteredRecipe.name}</h4>
                            <p className={styles.recipeDetInfoDesc}>Make homemade {filteredRecipe.name.toLowerCase()} in your kitchen now.</p>
                            <h4 className={styles.recipeDetTitle}>How to Make It</h4>
                            <ul className={styles.recipeDetSteps}>
                                {filteredRecipe.steps && filteredRecipe.steps.map((obj, index) => {
                                    return (
                                        <li className={styles.recipeDetStep} key={index}>
                                            <h5>Step {index+1}</h5>
                                            <p>{obj}</p>
                                        </li>
                                    )
                                })}
                            </ul>
                            <h4 className={styles.recipeDetTitle}>Ingredients</h4>
                            <ul className={styles.recipeDetIngredients}>
                                {filteredRecipe.ingredients && filteredRecipe.ingredients.map((obj, index) => {
                                    return (
                                        <li className={styles.recipeDetIngredient} key={index}>{obj}</li>
                                    )
                                })}
                            </ul>
                            {relatedProducts &&
                                <ul className={styles.recipeDetProducts}>
                                    {relatedProducts.map((obj, index) => {
                                        return (
                                            <li className={styles.recipeDetProduct} key={obj.id}>
                                                <Product
                                                    id={obj.id}
                                                    type={obj.type}
                                                    name={obj.name}
                                                    imgSrc={obj.imgSrc}
                                                    offer={obj.offer}
                                                    priceBefore={obj.priceBefore}
                                                    priceAfter={obj.priceAfter}
                                                    currency={obj.currency}
                                                    pOrder={index}
                                                />
                                            </li>
                                        )
                                    })}
                                </ul>                            
                            }
                        </div>
                    </div>
                    <div className={styles.recipeRelated}>
                        <h4 className={styles.recipeRelatedTitle}>Related Recipes</h4>
                        <div className={styles.recipeRelatedWrapper}>
                            {filteredRecipe.related && filteredRecipe.related.map((obj) => {
                                return (
                                    <Recipe
                                        key={findRecipe(obj).id}
                                        imgSrc={findRecipe(obj).imgSrc}
                                        recipeURL={findRecipe(obj).url}
                                        recipeTitle={findRecipe(obj).name}
                                    />
                                )
                            })}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default RecipeDetails;
