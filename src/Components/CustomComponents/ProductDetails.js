import React from 'react';
import styled from 'styled-components';

import Tshirt from "../../Images/T-shirt1.jpg";
import US from "../../Images/us.png";

const Box = styled.div`
    width:90%;
    height: 580px;
    background: #FFFFFF;
    border: 1px solid #E3E8EE;
    border-radius: 6px;
    margin: 1% auto;
    display: flex;
    aign-items: flex-start;
    justify-content: flex-start;
`

const FlexCol = styled.div`
    width: 33%;
    display: flex;
    align-items: flex-start;
    justify-content: flex-start;
    flex-direction: column;
`

const Flex = styled.div`
    width: 90%;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 0px 20px;
`

const FlexRow = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
`

const Img = styled.img`
    width: 90%;
    height: 70%;
    border: 1px solid #E3E8EE;
    border-radius: 6px;
    margin: 20px;
`

const SmallImg = styled.img`
    width: 56px;
    height: 56px;
    border: 1px solid #E3E8EE;
    border-radius: 6px;
    margin: 0 7px;
`

const Span = styled.p`
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 24px;
    letter-spacing: -0.2px;
    color: #00B517;
    padding: 20px 5px 5px 5px;
`

const H1 = styled.h1`
    width: 85%;
    font-style: normal;
    font-weight: 600;
    font-size: 20px;
    line-height: 28px;
    letter-spacing: -0.2px;
    color: #1C1C1C;
    padding: 5px;
`
const Rating = styled.p`
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 19px;
    color: #FF9017;
    padding: 5px;
`

const Reviews = styled.p`
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 19px;
    color: #787A80;
    padding: 5px;
`


const FlexRow1 = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    background: #FFF0DF;
    margin:20px 5px;
`

const FlexCol1 = styled.div`
    display: flex;
    align-items: flex-start;
    justify-content: flex-start;
    flex-direction: column;
    margin: 15px;
`

const Line = styled.div`
    border: 1px solid #BDC1C8;
    height: 44px;
`

const Price = styled.p`
    font-style: normal;
    font-weight: 600;
    font-size: 18px;
    line-height: 22px;
    color: #FA3434;
    padding: 10px 5px 0 10px;

`

const PriceGray = styled.p`
    font-style: normal;
    font-weight: 600;
    font-size: 18px;
    line-height: 22px;
    color: #1C1C1C;
    padding: 10px 5px 0 10px;
`

const P = styled.span`
    font-style: normal;
    font-weight: 400;
    font-size: 13px;
    line-height: 16px;
    color: #606060;
    padding: 10px 5px 0 10px;
`

const ColLine = styled.div`
    width: 430px;
    margin: 15px auto;
    border: 1px solid #E0E0E0;
`

const Name = styled.p`
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 19px;
    color: #8B96A5;
    padding: 5px;
    width: 150px;
`

const Text = styled.p`
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 19px;
    color: #505050;
    width: 200px;
    padding: 5px;
`

const Div = styled.div`
    width: 280px;
    height: 325px;
    background: #FFFFFF;
    width: 90%;
    border: 1px solid #E3E8EE;
    box-shadow: 0px 1px 2px rgba(56, 56, 56, 0.08);
    border-radius: 6px;
    margin: 20px auto;
`

const Letter = styled.p`
    font-style: normal;
    font-weight: 600;
    font-size: 28px;
    line-height: 24px;
    letter-spacing: -0.2px;
    color: rgba(76, 167, 167, 0.6);
    padding: 12px 14px;
    background: #C6F3F1;
    border-radius: 4px;
`

const Title = styled.p`
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 24px;
    letter-spacing: -0.2px;
    color: #1C1C1C;
    padding: 1px 10px;
    width: 190px;
`

const ColLine1 = styled.div`
    width: 247px;
    border: 1px solid #E0E0E0;
    margin: 20px auto;
`

const Button = styled.button`
    background: linear-gradient(180deg, #127FFF 0%, #0067FF 100%);
    border: 1px solid #0D6EFD;
    border-radius: 6px;
    font-style: normal;
    font-weight: 500;
    font-size: 16px;
    line-height: 19px;
    text-align: center;
    color: #FFFFFF;
    padding: 10px;
    width: 248px;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 10px auto;
`
const Button1 = styled.button`
    background: #FFFFFF;    
    border: 1px solid #0D6EFD;
    border-radius: 6px;
    font-style: normal;
    font-weight: 500;
    font-size: 16px;
    line-height: 19px;
    text-align: center;
    color: #0D6EFD;
    padding: 10px;
    width: 248px;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 10px auto;
`

const Save = styled.p`
    font-style: normal;
    font-weight: 500;
    font-size: 16px;
    line-height: 24px;
    letter-spacing: -0.1px;
    color: #0D6EFD;
    margin: 20px auto;
`

const ProductDetails = () => {
    return (
        <Box>
            <FlexCol>
                <Img src={Tshirt} />
                <Flex>
                    <SmallImg src={Tshirt} />
                    <SmallImg src={Tshirt} />
                    <SmallImg src={Tshirt} />
                    <SmallImg src={Tshirt} />
                    <SmallImg src={Tshirt} />
                    <SmallImg src={Tshirt} />
                </Flex>
            </FlexCol>

            <FlexCol>
                <Span>✓ In stock</Span>
                <H1>Mens Long Sleeve T-shirt Cotton Base Layer Slim Muscle</H1>
                <FlexRow>
                        <Rating>⭐⭐⭐⭐ 9.3 </Rating> <Reviews> • 32 reviews • </Reviews> <Reviews> 154 sold </Reviews>
                </FlexRow>
                <FlexRow1>
                    <FlexCol1>
                        <Price>$98.00</Price>
                        <P>50-100 pcs</P>
                    </FlexCol1>
                    <Line />
                    <FlexCol1>
                        <PriceGray>$90.00</PriceGray>
                        <P>100-700 pcs</P>
                    </FlexCol1>
                    <Line />
                    <FlexCol1>
                        <PriceGray>$78.00</PriceGray>
                        <P>700+ pcs</P>
                    </FlexCol1>
                </FlexRow1>

                <FlexRow>
                    <Name>Price: </Name>
                    <Text>Negotiable</Text>
                </FlexRow>
                    <ColLine />
                <FlexRow>
                    <Name>Type: </Name>
                    <Text>Classic  shoes</Text>
                </FlexRow>
                <FlexRow>
                    <Name>Material:  </Name>
                    <Text>Plastic material</Text>
                </FlexRow>
                <FlexRow>
                    <Name>Design: </Name>
                    <Text>Modern nice</Text>
                </FlexRow>
                    <ColLine />
                <FlexRow>
                    <Name>Customization:  </Name>
                    <Text>Customized logo and design custom packages</Text>
                </FlexRow>
                <FlexRow>
                    <Name>Protection:   </Name>
                    <Text>Refund Policy</Text>
                </FlexRow>
                <FlexRow>
                    <Name>Warranty:  </Name>
                    <Text>2 years full warranty </Text>
                </FlexRow>
                <ColLine />
            </FlexCol>

            <FlexCol>
                <Div>
                    <FlexRow style={{marginTop:'5%'}}>
                        <Letter>R</Letter>
                        <FlexCol>
                            <Title>Supplier</Title>
                            <Title>Guanjoi Trading LLC</Title>
                        </FlexCol>
                    </FlexRow>
                    <ColLine1 />
                    
                    <FlexRow>
                        <Name> <img src={US} /></Name>
                        <Text>United States</Text>
                    </FlexRow>
                    <FlexRow>
                        <Name> 🛡️ </Name>
                        <Text>Verified Seller</Text>
                    </FlexRow>
                    <FlexRow>
                        <Name> 🌐 </Name>
                        <Text>Worldwide shipping</Text>
                    </FlexRow>

                    <Button>Send inquiry</Button>
                    <Button1>Seller’s profile</Button1>
                </Div>
                <Save>
                    ♡ Save for later
                </Save>
            </FlexCol>
        </Box>
    )
}

export default ProductDetails;