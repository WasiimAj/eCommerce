import React from 'react';
import styled from 'styled-components';

import watch from "../../Images/watch.png";
import laptop from "../../Images/laptop.png"
import gopro from "../../Images/gopro.png"
import hedset from "../../Images/headset.png"
import phone from "../../Images/phone.png"


const OfferBox = styled.div`
    width:90%;
    height: 240px;
    margin:auto;
    background: #FFFFFF;
    border: 1px solid #E3E8EE;
    border-radius: 6px;
    display: flex;
    align-items: center;
    justify-content: flex-start;
`;

const DealsBox = styled.div`
    width:281px;
    height: 100%;
    display:flex;
    flex-direction: column;
`;

const H1 = styled.h1`
    font-style: normal;
    font-weight: 600;
    font-size: 20px;
    line-height: 28px;
    letter-spacing: -0.2px;
    color: #1C1C1C;
    padding: 20px 10px 0px 20px;
`

const P = styled.h1`
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 19px;
    color: #8B96A5;
    padding:0 20px;
`

const TimerBox = styled.div`
    width:90%;
    margin: 8px auto;
    display:flex;
    align-items: center;
    justify-content: flex-start;
`;

const TimeDiv = styled.div`
    width:45px;
    height:50px;
    background: #606060;
    border-radius: 4px;
    display:flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    margin:3px;
`

const TimeNum = styled.h1`
    font-style: normal;
    font-weight: 700;
    font-size: 16px;
    line-height: 19px;
    text-align: center;
    color: #FFFFFF;
`

const Time = styled.p`
    font-style: normal;
    font-weight: 400;
    font-size: 12px;
    line-height: 15px;
    text-align: center;
    color: #FFFFFF;
`

const ProductOfferDiv = styled.div`
    width: 179px;
    height:100%;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    border: 1px solid #E0E0E0;
    border-top:none;
    border-right:none;
    border-bottom:none;
`;

const Img = styled.img`
    height:40%;
`

const ProductName = styled.p`
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 24px;
    text-align: center;
    letter-spacing: -0.2px;
    color: #1C1C1C;
    padding: 15px 0 5px;
`

const OfferValue = styled.p`
    background: #FFE3E3;
    border-radius: 29px;
    width: 61px;
    height: 28px;
    padding: 5px 13px;
    color: #EB001B;
    font-style: normal;
    font-weight: 500;
    font-size: 14px;
    line-height: 17px;
`

const Offers = () => {
    return (
        <OfferBox>
            <DealsBox>
                <H1>Deals and offers</H1>
                <P>Hygiene equipments</P>
                <TimerBox>
                    <TimeDiv>
                        <TimeNum>04</TimeNum>
                        <Time>Days</Time>
                    </TimeDiv>
                    <TimeDiv>
                        <TimeNum>13</TimeNum>
                        <Time>Hour</Time>
                    </TimeDiv>
                    <TimeDiv>
                        <TimeNum>34</TimeNum>
                        <Time>Min</Time>
                    </TimeDiv>
                    <TimeDiv>
                        <TimeNum>56</TimeNum>
                        <Time>Sec</Time>
                    </TimeDiv>
                </TimerBox>
            </DealsBox>

            <ProductOfferDiv>
                <Img src={watch} alt='product-1' />
                <ProductName>
                    Smart watches
                </ProductName>
                <OfferValue>
                    -25%
                </OfferValue>
            </ProductOfferDiv>

            <ProductOfferDiv>
                <Img src={laptop} alt='product-2' />
                <ProductName>
                    Laptops    
                </ProductName>
                <OfferValue>
                    -15%
                </OfferValue>
            </ProductOfferDiv>

            <ProductOfferDiv>
                <Img src={gopro} alt='product-3' />
                <ProductName>
                    GoPro cameras   
                </ProductName>
                <OfferValue>
                    -40%
                </OfferValue>
            </ProductOfferDiv>

            <ProductOfferDiv>
                <Img src={hedset} alt='product-4' />
                <ProductName>
                    Headphones
                </ProductName>
                <OfferValue>
                    -25%
                </OfferValue>
            </ProductOfferDiv>

            <ProductOfferDiv>
                <Img src={phone} alt='product-5' />
                <ProductName>
                    Canon camreras
                </ProductName>
                <OfferValue>
                    -25%
                </OfferValue>
            </ProductOfferDiv>
            <ProductOfferDiv>
                <Img src={phone} alt='product-5' />
                <ProductName>
                    Electronic
                </ProductName>
                <OfferValue>
                    -20%
                </OfferValue>
            </ProductOfferDiv>

        </OfferBox>
    )
}

export default Offers