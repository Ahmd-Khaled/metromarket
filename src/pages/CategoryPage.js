import Header from "../components/header/Header";
import Navbar from "../components/navbar/Navbar";
import Footer from "../components/footer/Footer";
import CartProvider from "../store/CartProvider";
import Category from "../components/category/Category";

const CategoryPage = () => {
    return (
        <CartProvider>
            <Header />
            <Navbar />
            <Category />
            <Footer />
        </CartProvider>
    )
}

export default CategoryPage;    