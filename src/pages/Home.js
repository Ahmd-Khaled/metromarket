import BestOffers from "../components/bestOffers/BestOffers";
import Header from "../components/header/Header";
import Navbar from "../components/navbar/Navbar";
import TopSlider from "../components/topSlider/TopSlider";
import Products from "../components/products/Products";
import ShopNow from "../components/shopNow/ShopNow";
import Gallery from "../components/gallery/Gallery";
import Locator from "../components/locator/Locator";
import Footer from "../components/footer/Footer";
import GetRecipes from "../components/getRecipes/GetRecipes";
import CartProvider from "../store/CartProvider";

const Home = () => {
    return (
        <CartProvider>
            <Header />
            <Navbar />
            <TopSlider />
            <BestOffers />
            <Products sectionName={"Laundry Detergent"} />
            <Products sectionName={"Regular Juice"} />
            <Products sectionName={"Regular Water"} />
            <ShopNow />
            <Gallery />
            <GetRecipes />
            <Locator />
            <Footer />
        </CartProvider>
    )
}

export default Home;