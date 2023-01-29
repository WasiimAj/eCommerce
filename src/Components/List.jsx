import React from 'react';

import Header from "../Components/CustomComponents/MainHeader";
import Footer from "../Components/CustomComponents/MainFooter";
import PageTracker from './CustomComponents/PageTracker';
import CategoryNav from './CustomComponents/CategoryNav';
import styled from 'styled-components';
import FilterdProduct from './CustomComponents/FilterdProduct';
import ProductCard from './CustomComponents/ProductCard';
import Fliter from './CustomComponents/Fliter';

const Box = styled.div`
    width: 90%;
    margin: 1% auto;
    display: flex;
    align-items: flex-start;
    justify-content: space-between;
    `

const List = () => {
    return (
        <div style={{position: 'relative', background:'#F7FAFC'}}>
            <Header />
            <PageTracker />
                
            <Box>
                <CategoryNav />
                <div style={{width:'80%'}}>
                    <FilterdProduct />
                    <Fliter />
                    <ProductCard />
                    <ProductCard />
                    <ProductCard />
                    <ProductCard />
                </div>
            </Box>
            <Footer />
        </div>
    )
}

export default List