import React from 'react';
import styled from 'styled-components';

import logo from "../../Images/logo.png";
import profile from "../../Images/user.png";
import mesegees from "../../Images/masegees.png";
import orders from "../../Images/faviort.png";
import cart from "../../Images/cart.png";
import { Link } from 'react-router-dom';

const Container = styled.div`
    width:80%;
    margin:auto;
`

const Box = styled.div`
    width: 100%;
    height:86px;
    background: #FFFFFF;
    display: flex;
    align-items: center;
    justify-content: space-around;
`;

const SecondHeader = styled.div`
    width:100%;
    height:56px;
    background: #FFFFFF;
    border: 1px solid #E0E0E0;
    display:flex;
    align-items: center;
    justify-content: space-around;
`

const FlexBox = styled.div`
    width:15%;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top:1%;
`

const Img = styled.img`
    cursor: pointer;
`

const SearchBox = styled.div`
    width: 684px;
    height:40px;
    background: #FFFFFF;
    border-radius: 8px;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    border: 1px solid #0D6EFD;
`;

const SearchInput = styled.input`
    width: 65%;
    height: 98%;
    border-radius: 8px 0px 0px 8px;
    outline: none;
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 19px;
    color: #8B96A5;
    padding:0px 8px;
    border:none;
    border-right:1px solid #0D6EFD;
`;

const Select = styled.select`
    width: 19%;
    height: 100%;
    outline: none;
    border:none;
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 19px;
    color: #1C1C1C;
    padding:0px 5px;
    margin-right:1%;
`;

const SearchButton = styled.button`
    width: 15%;
    height: 100%;
    border:none;
    outline: none;
    font-style: normal;
    font-weight: 500;
    font-size: 16px;
    line-height: 19px;
    text-align: center;
    color: #FFFFFF;
    background: linear-gradient(180deg, #127FFF 0%, #0067FF 100%);
    border: 1px solid #0D6EFD;
    border-radius: 0px 8px 8px 0px;
    cursor: pointer;
`

const FlexCol = styled.div`
    display:flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin:0 .5%;
`

const P = styled.p`
    font-style: normal;
    font-weight: 400;
    font-size: 12px;
    line-height: 15px;
    display: flex;
    align-items: center;
    text-align: center;
    color: #8B96A5;
    padding:0 5px;
    cursor: pointer;
`;

const A = styled.a`
    font-style: normal;
    font-weight: 500;
    font-size: 16px;
    line-height: 22px;
    color: #1C1C1C;
    padding:0 15px;
    text-decoration:none;
`

const Div1 = styled.div`
    width:62%;
`

const SecondSelect = styled.select`
    font-style: normal;
    font-weight: 500;
    font-size: 16px;
    line-height: 22px;
    color: #1C1C1C;
    padding:0 15px;
    outline:none;
    border:none;
`

const MainHeader = () => {
    return (
        <>
        <Box>
            <Img src={logo} alt="logo" />

            <SearchBox>
                <SearchInput placeholder='Search'/>
                <Select>
                    <option>All Category</option>
                    <option>1</option>
                    <option>1</option>
                    <option>1</option>
                </Select>
                <SearchButton>
                    <A style={{color:'#ffffff'}} href='/list'>Search</A>
                </SearchButton>
            </SearchBox>

            <FlexBox>
                <FlexCol>
                    <Link to="/register">
                        <Img src={profile}  alt='Profile'/>
                    </Link>
                    <P> Profile </P>
                </FlexCol>
                <FlexCol>
                    <Img src={mesegees}  alt='Message'/>
                    <P> Message </P>
                </FlexCol>
                <FlexCol>
                    <Img src={orders}  alt='Orders'/>
                    <P> Orders </P>
                </FlexCol>
                <FlexCol>
                    <Img src={cart}  alt='My cart'/>
                    <P> My cart </P>
                </FlexCol>
            </FlexBox>
        </Box>

        <SecondHeader>
            <Div1>
                <A href='#'>All category</A>
                <A href='#'>Hot offers</A>
                <A href='#'>Gift boxes</A>
                <A href='#'>Projects</A>
                <A href='#'>Menu item</A>
                <SecondSelect>
                    <option>Help</option>
                    <option>1</option>
                </SecondSelect>    
            </Div1>

            <div>
                <SecondSelect>
                    <option>English, USD</option>
                    <option>English, USD</option>
                </SecondSelect>
                <SecondSelect>
                    <option>Ship to 🇩🇪</option>
                    <option>us</option>
                </SecondSelect>
            </div>
        </SecondHeader>
        </>
    )
}

export default MainHeader