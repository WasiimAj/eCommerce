import React from 'react';
import styled from 'styled-components';

import paypall from "../../Images/paypall.png";
import mastercard from "../../Images/mastercard.png";
import visa from "../../Images/Visa.png";
import payment from "../../Images/payment.png";

const Footer = styled.footer`
    width:100%;
    height:74px;
    background-color: #eee;
    position: absolute;
    bottom:0;
    display: flex;
    justify-content: space-around;
    align-items: center;
    top: 105%;
`;

const Box = styled.div`
    width:auto;
    display: flex;
    justify-content: space-between;
    align-items:center;
    height:100%;
`

const Images = styled.img`
    margin: 0 5px;
`

const A = styled.a`
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 24px;
    text-align: center;
    letter-spacing: -0.2px;
    color: #606060;
    opacity: 0.6;
    padding:15px;
    text-decoration:none;
`

const SignInFooter = () => {
    return (
        <Footer>
            <Box>
                <Images src={paypall} />
                <Images src={mastercard} />
                <Images src={visa} />
                <Images src={payment} />
            </Box>
            <Box>
                <A href='/support'> Support </A>
                <A href='/privacyandcookies'> Privacy & Cookies </A>
                <A href='/accessibility'> Accessibility </A>
            </Box>
        </Footer>
    )
}

export default SignInFooter