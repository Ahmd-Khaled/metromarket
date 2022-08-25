import Header from "../components/header/Header";
import Navbar from "../components/navbar/Navbar";
import Footer from "../components/footer/Footer";
import CartProvider from "../store/CartProvider";
import Recipes from "../components/recipes/Recipes";

const RecipesPage = () => {
    return (
        <CartProvider>
            <Header />
            <Navbar />
            <Recipes />
            <Footer />
        </CartProvider>
    )
}

export default RecipesPage
