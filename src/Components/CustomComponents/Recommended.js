import React from 'react';
import styled from 'styled-components';

import t1 from "../../Images/t1.png";
import t2 from "../../Images/t2.jpg";
import t3 from "../../Images/t3.png";
import t4 from "../../Images/t4.png";
import t5 from "../../Images/t5.png";
import t6 from "../../Images/t6.png";
import t7 from "../../Images/t7.png";

const Box = styled.div`
    width:90%;
    height: auto;
    margin: 1% auto;
`

const Title = styled.h1`
    font-style: normal;
    font-weight: 600;
    font-size: 24px;
    line-height: 32px;
    letter-spacing: -0.2px;
    color: #1C1C1C;
    padding: 15px 10px;
`

const Flex = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
`

const Section = styled.div`
    width:100%;
    height:310px;
    display: flex;
    align-items: flex-start;
    justify-content: flex-start;
    margin: 10px 0;
`

const Product = styled.div`
    width:20%;
    height:310px;
    background: #F7F7F7;
    border-radius: 4px;
    background: #FFFFFF;
    border: 1px solid #E0E0E0;
    border-radius: 6px;
    margin: 10px;
`

const Img = styled.img`
    height:60%;
    display: flex;
    margin: 15px auto;
`

const Price = styled.p`
    font-style: normal;
    font-weight: 500;
    font-size: 16px;
    line-height: 22px;
    color: #1C1C1C;
    padding: 10px 16px 1px;
`

const Disc = styled.p`
    width: 75%;
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 24px;
    letter-spacing: -0.2px;
    color: #8B96A5;
    padding:1px 16px;
`

const Recommended = () => {
    return (
        <Box>
            <Title>Recommended items</Title>
            <Flex>
                <Section>
                    <Product>
                        <Img src={t1} />
                        <Price>$10.30</Price>
                        <Disc>
                            T-shirts with multiple colors, for men
                        </Disc>
                    </Product>
                    <Product>
                        <Img src={t2} />
                        <Price>$11.90</Price>
                        <Disc>
                            Jeans shorts for men blue color 
                        </Disc>
                    </Product>
                    <Product>
                        <Img src={t3} />
                        <Price>$12.30</Price>
                        <Disc>
                            Brown winter coat medium size
                        </Disc>
                    </Product>
                    <Product>
                        <Img src={t4} />
                        <Price>$34.00</Price>
                        <Disc>
                            Jeans bag for travel for men
                        </Disc>
                    </Product>
                    <Product>
                        <Img src={t5} />
                        <Price>$99.0</Price>
                        <Disc>
                            Leather wallet
                        </Disc>
                    </Product>
                </Section>

                <Section>
                    <Product>
                        <Img src={t6} />
                        <Price>$8.99</Price>
                        <Disc>
                            Headset for gamingwith mic
                        </Disc>
                    </Product>
                    <Product>
                        <Img src={t7} />
                        <Price>$9.99</Price>
                        <Disc>
                            Canon camera black, 100x zoom
                        </Disc>
                    </Product>
                    <Product>
                        <Img src={t1} />
                        <Price>$12.30</Price>
                        <Disc>
                            Brown winter coat medium size
                        </Disc>
                    </Product>
                    <Product>
                        <Img src={t2} />
                        <Price>$34.00</Price>
                        <Disc>
                            Jeans bag for travel for men
                        </Disc>
                    </Product>
                    <Product>
                        <Img src={t3} />
                        <Price>$19.00</Price>
                        <Disc>
                            Leather wallet
                        </Disc>
                    </Product>
                </Section>

            </Flex>
        </Box>
    )
}

export default Recommended