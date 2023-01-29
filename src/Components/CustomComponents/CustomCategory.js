import React from 'react';
import styled from 'styled-components';

import background from '../../Images/homeandoutdoor.png';
import background2 from "../../Images/elctronicbackground.png"
import f1 from '../../Images/f1.png';
import f2 from '../../Images/f2.png';
import f3 from '../../Images/f3.png';
import f4 from '../../Images/f4.png';
import f5 from '../../Images/f5.png';
import f6 from '../../Images/f6.png';
import f7 from '../../Images/f7.png';
import f8 from '../../Images/f8.png';
import e1 from "../../Images/watch.png";
import e2 from "../../Images/gopro.png";
import e3 from "../../Images/headset.png";
import e4 from "../../Images/laptop.png";
import e5 from "../../Images/e1.png";
import e6 from "../../Images/e2.png";
import e7 from "../../Images/e3.png";
import e8 from "../../Images/e4.png";


const Box = styled.div`
    width:90%;
    height: 256px;
    margin: 1% auto;
    background: #FFFFFF;
    border: 1px solid #E0E0E0;
    border-radius: 6px;
    display: flex;
    align-items: center;
    justify-content: center;
`


const CategoryDiv = styled.div`
    width: 20%;
    height: 256px;
    background: url(${background});
    background-repeat: no-repeat;
    background-position: center center;
    background-size: auto;
    border-radius: 6px 0 0 6px;
`;

const CategoryDiv2 = styled.div`
    width: 20%;
    height: 256px;
    background: url(${background2});
    background-repeat: no-repeat;
    background-position: center bottom;
    background-size: cover;
    border-radius: 6px 0 0 6px;
`;

const CategoryName = styled.h1`
    width:70%;
    padding:20px;
    font-style: normal;
    font-weight: 600;
    font-size: 20px;
    line-height: 26px;
    letter-spacing: -0.2px;
    color: #1C1C1C;
`;

const SourceButton = styled.button`
    font-style: normal;
    font-weight: 500;
    font-size: 16px;
    line-height: 19px;
    text-align: center;
    color: #1C1C1C;
    background: #FFFFFF;
    border: 1px solid #FFFFFF;
    box-shadow: 0px 1px 2px rgba(56, 56, 56, 0.08);
    border-radius: 6px;
    padding: 10px;
    margin: 0px 0 15px 15px;
`;

const CategoryProductsDiv = styled.div`
    width: 80%;
    height:100%;
    background: #ffffff;
`
const SectionTop = styled.div`
    width:100%;
    height: 127px;
    display: flex;
    align-items: center;
    justify-content: center;
`

const Product = styled.div`
    width:25%;
    height:100%;
    display:flex;
    border: .5px solid #E0E0E0;
`   

const ProductName = styled.div`
    width:60%;
    display:flex;
    flex-direction: column;
`
const Name = styled.h1`
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 19px;
    color: #1C1C1C;
    padding: 20px 0 5px 20px;
`

const Price = styled.p`
    font-style: normal;
    font-weight: 400;
    font-size: 13px;
    line-height: 16px;
    color: #8B96A5;
    padding: 0 0 10px 20px;
    width: 55%;
`

const ProductImg = styled.div`
    width:50%;
    display:flex;
    align-items: center;
    justify-content: center;
`

const Img = styled.img`
    width:60%;
    height:60%;
`

const CustomCategory = () => {
    return (
        <>
        <Box>
            <CategoryDiv>
                <CategoryName>
                    Home and outdoor
                </CategoryName>
                <SourceButton>
                    Source now
                </SourceButton>
            </CategoryDiv>
            <CategoryProductsDiv>
                <SectionTop>
                    <Product>
                        <ProductName>
                            <Name>
                                Soft chairs
                            </Name>
                            <Price>
                            From USD 19
                            </Price>
                        </ProductName>
                        <ProductImg>
                            <Img src={f2} />
                        </ProductImg>
                    </Product>
                    <Product>
                        <ProductName>
                            <Name>
                                Sofa & chair
                            </Name>
                            <Price>
                                From USD 19
                            </Price>
                        </ProductName>
                        <ProductImg>
                            <Img src={f7} />
                        </ProductImg>
                    </Product>
                    <Product>
                        <ProductName>
                            <Name>
                                Kitchen dishes
                            </Name>
                            <Price>
                            From USD 19
                            </Price>
                        </ProductName>
                        <ProductImg>
                            <Img src={f8} />
                        </ProductImg>
                    </Product>
                    <Product>
                        <ProductName>
                            <Name>
                                Smart watches
                            </Name>
                            <Price>
                                From USD 19
                            </Price>
                        </ProductName>
                        <ProductImg>
                            <Img src={f6} />
                        </ProductImg>
                    </Product>  
                </SectionTop>

                <SectionTop>
                    <Product>
                        <ProductName>
                            <Name>
                                Kitchen mixer
                            </Name>
                            <Price>
                                From USD 100
                            </Price>
                        </ProductName>
                        <ProductImg>
                            <Img src={f3} />
                        </ProductImg>
                    </Product>
                    <Product>
                        <ProductName>
                            <Name>
                                Blenders
                            </Name>
                            <Price>
                                From USD 39
                            </Price>
                        </ProductName>
                        <ProductImg>
                            <Img src={f4} />
                        </ProductImg>
                    </Product>
                    <Product>
                        <ProductName>
                            <Name>
                                Home appliance
                            </Name>
                            <Price>
                            From USD 19
                            </Price>
                        </ProductName>
                        <ProductImg>
                            <Img src={f1} />
                        </ProductImg>
                    </Product>
                    <Product>
                        <ProductName>
                            <Name>
                                Coffee maker
                            </Name>
                            <Price>
                                From USD 50
                            </Price>
                        </ProductName>
                        <ProductImg>
                            <Img src={f5} />
                        </ProductImg>
                    </Product>  
                </SectionTop>
                <SectionTop></SectionTop>
            </CategoryProductsDiv>
        </Box>



        <Box>
        <CategoryDiv2>
                <CategoryName>
                    Consumer electronics and gadgets
                </CategoryName>
                <SourceButton>
                    Source now
                </SourceButton>
            </CategoryDiv2>
            <CategoryProductsDiv>
                <SectionTop>
                    <Product>
                        <ProductName>
                            <Name>
                                Smart watches
                            </Name>
                            <Price>
                            From USD 19
                            </Price>
                        </ProductName>
                        <ProductImg>
                            <Img src={e1} />
                        </ProductImg>
                    </Product>
                    <Product>
                        <ProductName>
                            <Name>
                                Cameras
                            </Name>
                            <Price>
                                From USD 89
                            </Price>
                        </ProductName>
                        <ProductImg>
                            <Img src={e2} />
                        </ProductImg>
                    </Product>
                    <Product>
                        <ProductName>
                            <Name>
                                Headphones
                            </Name>
                            <Price>
                            From USD 10
                            </Price>
                        </ProductName>
                        <ProductImg>
                            <Img src={e3} />
                        </ProductImg>
                    </Product>
                    <Product>
                        <ProductName>
                            <Name>
                                Smart watches
                            </Name>
                            <Price>
                                From USD 90
                            </Price>
                        </ProductName>
                        <ProductImg>
                            <Img src={e4} />
                        </ProductImg>
                    </Product>  
                </SectionTop>

                <SectionTop>
                    <Product>
                        <ProductName>
                            <Name>
                                Gaming set
                            </Name>
                            <Price>
                                From USD 35
                            </Price>
                        </ProductName>
                        <ProductImg>
                            <Img src={e5} />
                        </ProductImg>
                    </Product>
                    <Product>
                        <ProductName>
                            <Name>
                                Laptops & PC
                            </Name>
                            <Price>
                                From USD 340
                            </Price>
                        </ProductName>
                        <ProductImg>
                            <Img src={e6} />
                        </ProductImg>
                    </Product>
                    <Product>
                        <ProductName>
                            <Name>
                                Smartphones
                            </Name>
                            <Price>
                            From USD 19
                            </Price>
                        </ProductName>
                        <ProductImg>
                            <Img src={e7} />
                        </ProductImg>
                    </Product>
                    <Product>
                        <ProductName>
                            <Name>
                                Electric kattle
                            </Name>
                            <Price>
                                From USD 240
                            </Price>
                        </ProductName>
                        <ProductImg>
                            <Img src={e8} />
                        </ProductImg>
                    </Product>  
                </SectionTop>
                <SectionTop></SectionTop>
            </CategoryProductsDiv>
        </Box>


        </>

    )
}

export default CustomCategory