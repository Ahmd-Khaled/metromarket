import Header from "../components/header/Header";
import Navbar from "../components/navbar/Navbar";
import Footer from "../components/footer/Footer";
import CartProvider from "../store/CartProvider";
import RecipeDetails from "../components/recipeDetails/RecipeDetails";


const RecipePage = () => {
    return (
        <CartProvider>
            <Header />
            <Navbar />
            <RecipeDetails />
            <Footer />
        </CartProvider>
    )
};

export default RecipePage;
