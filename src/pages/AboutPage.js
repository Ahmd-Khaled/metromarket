import Header from "../components/header/Header";
import Navbar from "../components/navbar/Navbar";
import Footer from "../components/footer/Footer";
import CartProvider from "../store/CartProvider";
import About from "../components/about/About";

const AboutPage = () => {
    return (
        <CartProvider>
            <Header />
            <Navbar />
            <About />
            <Footer />
        </CartProvider>
    )
}

export default AboutPage;