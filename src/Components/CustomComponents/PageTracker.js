import React from 'react';
import styled from 'styled-components';

import arrow from "../../Images/arrowtoright.png";

const Box = styled.div`
    width: 90%;
    height: 64px;
    margin: auto;
    display: flex;
    align-items: center;
    justify-content: flex-start;
`

const P = styled.p`
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 24px;
    letter-spacing: -0.2px;
    color: #8B96A5;
    padding:0 15px;
`

const PageTracker = () => {
    return (
        <Box>
            <P>Home</P>
            <img src={arrow} />
            <P>Clothings</P>
            <img src={arrow} />
            <P>Men’s wear</P>
            <img src={arrow} />
            <P>Summer clothing</P>
        </Box>
    )
}

export default PageTracker