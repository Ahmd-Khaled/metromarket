import Header from "../components/header/Header";
import Navbar from "../components/navbar/Navbar";
import Footer from "../components/footer/Footer";
import Cart from "../components/Cart/Cart";
import CartProvider from "../store/CartProvider";

const CartPage = () => {
    return (
        <CartProvider>
            <Header />
            <Navbar />
            <Cart />
            <Footer />
        </CartProvider>
    )
}

export default CartPage;