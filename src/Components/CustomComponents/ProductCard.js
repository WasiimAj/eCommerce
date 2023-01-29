import React from 'react';
import styled from 'styled-components';

import Like from "../../Images/heart.png";
import P1 from "../../Images/headset.png";

const Box = styled.div`
    width: 100%;
    height: 230px;
    margin: 20px  auto;
    background: #FFFFFF;
    border: 1px solid #E3E8EE;
    border-radius: 6px;
    display: flex;
    align-items: flex-start;
    justify-content: flex-start;
`

const Flex = styled.div`
    width: 20%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 0 15px;
`

const Img = styled.img`
    width: 70%;
    height: 70%;
`

const Div = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
`

const ProductName = styled.p`
    font-style: normal;
    font-weight: 500;
    font-size: 16px;
    line-height: 22px;
    color: #1C1C1C;
    padding: 20px 0 5px 0;
`

const LikeDiv = styled.div`
    width: 40px;
    height: 40px;
    background: #FFFFFF;
    border: 1px solid #E3E8EE;
    box-shadow: 0px 1px 2px rgba(56, 56, 56, 0.08);
    border-radius: 6px;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 20px 20px 0 0 ; 
    cursor: pointer;
`
const FlexRow = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
`

const FlexCol = styled.div`
    width: 80%;
    display: flex;
    align-items: flex-start;
    justify-content: flex-start;
    flex-direction: column;
`

const Price = styled.p`
    font-style: normal;
    font-weight: 600;
    font-size: 20px;
    line-height: 28px;
    letter-spacing: -0.2px;
    color: #1C1C1C;
`

const OldPrice  = styled.p`
    font-style: normal;
    font-weight: 600;
    font-size: 16px;
    line-height: 19px;
    text-decoration-line: line-through;
    color: #8B96A5;
    padding: 7px;
    textdecoration:line-through;
`

const NumOfOrders = styled.p`
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 19px;
    color: #8B96A5;
    padding: 5px;
`
const Shiping = styled.p`
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 19px;
    padding: 5px;
    color: #00B517;
`

const Discription = styled.p`
    width: 74%;
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 24px;
    letter-spacing: -0.2px;
    color: #505050;
    padding: 5px;
`

const A = styled.a`
    font-style: normal;
    font-weight: 500;
    font-size: 16px;
    line-height: 19px;
    color: #0D6EFD;
    padding: 5px;
    cursor: pointer;
    text-decoration: none;
`


const ProductCard = (props) => {
    return (
        <Box>
            <Flex>
                <Img src={P1} />
            </Flex>
            <FlexCol>
                <Div>
                    <ProductName>Canon Cmera EOS 2000, Black 10x zoom</ProductName>
                    <LikeDiv>
                        <img src={Like} alt='Heart' />
                    </LikeDiv>
                </Div>
                <FlexRow>
                        <Price>$998.00</Price>
                        <OldPrice>$1128.00</OldPrice>
                </FlexRow>
                <FlexRow>
                        <NumOfOrders>⭐⭐⭐⭐ • 154 orders •</NumOfOrders> <Shiping>Free Shipping</Shiping>
                </FlexRow>
                <Discription>
                    Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit 
                </Discription>
                <A href='/product'>View details</A>
            </FlexCol>
        </Box>
    )
}

export default ProductCard