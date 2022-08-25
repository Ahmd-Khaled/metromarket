import React, { Fragment } from 'react';
import Header from "../components/header/Header";
import Navbar from '../components/navbar/Navbar';
import ProductDetails from '../components/productDetails/ProductDetails';
import Footer from '../components/footer/Footer';

const ProductPage = () => {
    return (
        <Fragment>
            <Header />
            <Navbar />
            <ProductDetails />
            <Footer />
        </Fragment>
    )
}

export default ProductPage;