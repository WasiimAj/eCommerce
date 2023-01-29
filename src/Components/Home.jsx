import React from 'react'
import styled from 'styled-components';

import MainHeader from './CustomComponents/MainHeader';
import MainFooter from './CustomComponents/MainFooter';
import SubscribeFooter from './CustomComponents/SubscribeFooter';
import DiscountFooter from './CustomComponents/DiscountFooter';
import Trending from './CustomComponents/Trending';
import Offers from './CustomComponents/Offers';
import CustomCategory from './CustomComponents/CustomCategory';
import QuoteSection from './CustomComponents/QuoteSection';
import Recommended from './CustomComponents/Recommended';
import ExtraService from './CustomComponents/ExtraService';

const Home = () => {
    return (
        <div style={{position: 'relative', background:'#F7FAFC'}}>
            <MainHeader /> 
            <Trending />
            <Offers />
            <CustomCategory />

            <QuoteSection />
            <Recommended />
            <ExtraService />

            <DiscountFooter/>
            <SubscribeFooter/>
            <MainFooter />
        </div>
    )
}

export default Home