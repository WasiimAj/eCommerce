import React from 'react';

import Header from "./CustomComponents/MainHeader";
import Footer from "./CustomComponents/MainFooter";
import SecondFooter from "./CustomComponents/DiscountFooter";
import ProductDetails from './CustomComponents/ProductDetails';
import Filter from "./CustomComponents/PageTracker";

const Product = () => {
    return (
        <div style={{position: 'relative', background:'#F7FAFC'}}>
            <Header />

            <Filter />
            <ProductDetails />


            <SecondFooter/>
            <Footer />
        </div>
    )
}

export default Product