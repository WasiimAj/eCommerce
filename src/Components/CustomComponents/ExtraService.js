import React from 'react';
import styled from 'styled-components';

import S1 from "../../Images/s1.png"
import S2 from "../../Images/s2.png"
import S3 from "../../Images/s3.png"
import S4 from "../../Images/s4.png"

import EM from '../../Images/emarat.png'
import AS from '../../Images/austrailia.png'
import US from '../../Images/unitedstate.png'
import RU from '../../Images/russian.png'
import IT from '../../Images/italiy.png'
import De from '../../Images/denemark.png'
import FR from '../../Images/france.png'
import CH from '../../Images/china.png'
import UK from '../../Images/unitedkingdom.png'

const Box = styled.div`
    width: 90%;
    height:700px;
    margin: 1% auto;
    display: flex;
    align-items: flex-start;
    justify-content: flex-start;
    flex-direction: column;
`;

const Title = styled.h1`
    font-style: normal;
    font-weight: 600;
    font-size: 24px;
    line-height: 32px;
    letter-spacing: -0.2px;
    color: #1C1C1C;
    padding: 15px 10px;
`

const ServiceBox = styled.div`
    width: 100%;
    height: 200px;
    display: flex;
    align-items: flex-start;
    justify-content: flex-start;
    margin: 1% 0;
`

const Service = styled.div`
    width: 25%;
    height: 200px;
    background: #FFFFFF;
    border: 1px solid #E0E0E0;
    border-radius: 6px;
    margin: 7px;
    position: relative;
`

const Img1 = styled.div`
    width: 100%;
    height: 60%;
    border-radius: 6px 6px 0 0 ;
    background: url(${S1});
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center bottom;
`

const Img2 = styled.div`
    width: 100%;
    height: 60%;
    border-radius: 6px 6px 0 0 ;
    background: url(${S2});
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center bottom;
`

const Img3 = styled.div`
    width: 100%;
    height: 60%;
    border-radius: 6px 6px 0 0 ;
    background: url(${S3});
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center bottom;
`

const Img4 = styled.div`
    width: 100%;
    height: 60%;
    border-radius: 6px 6px 0 0 ;
    background: url(${S4});
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center bottom;
`

const P = styled.p`
    width: 55%;
    font-style: normal;
    font-weight: 500;
    font-size: 16px;
    line-height: 22px;
    color: #1C1C1C;
    padding: 15px;
`


const A = styled.a`
    width: 55px;
    height: 55px;
    background: #D1E7FF;
    border: 2px solid #FFFFFF;
    border-radius: 50%;
    position: absolute;
    right: 6%;
    top: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
`

const RegionBox = styled.div`
    width: 20%;
    height: 40px;
    margin: 1%;
    display: flex;
    justify-content: flex-start;
    align-items: flex-start;
`

const Flex = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
`
const H1 = styled.p`
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 24px;
    letter-spacing: -0.2px;
    color: #1C1C1C;
    padding: 0 10px;
`

const H3 = styled.p`
    font-style: normal;
    font-weight: 400;
    font-size: 13px;
    line-height: 16px;
    color: #8B96A5;
    padding: 0 10px;
`

const Img = styled.img`
    margin: 5px 0;
    width: 28px;
    height: 20px;
`
const FlexRow = styled.div`
    width: 100%;
    display: flex;
    align-items: flex-start;
    justify-content: flex-start;
`

const ExtraService = () => {
    return (
        <Box>
            <Title>Our extra services</Title>
            <ServiceBox>
                <Service>
                    <Img1 background="S1"></Img1>
                    <P>
                        Source from Industry Hubs
                    </P>
                    <A>
                        🔍
                    </A>
                </Service>
                <Service>
                    <Img2></Img2>
                    <P>
                        Customize Your Products
                    </P>
                    <A>
                        📦
                    </A>
                </Service>
                <Service>
                    <Img3></Img3>
                    <P>
                        Fast, reliable shipping by ocean or air
                    </P>
                    <A>
                        ➤
                    </A>
                </Service>
                <Service>
                    <Img4></Img4>
                    <P>
                        Product monitoring and inspection
                    </P>
                    <A>
                        🛡️ 
                    </A>
                </Service>
            </ServiceBox>

            <Title>Suppliers by region</Title>

            <FlexRow>
                <RegionBox>
                    <Img src={EM} />
                    <Flex>
                        <H1>Arabic Emirates</H1>
                        <H3>shopname.ae</H3>
                    </Flex>
                </RegionBox>

                <RegionBox>
                    <Img src={AS} />
                    <Flex>
                        <H1>Australia</H1>
                        <H3>shopname.ae</H3>
                    </Flex>
                </RegionBox>

                <RegionBox>
                    <Img src={US} />
                    <Flex>
                        <H1>United States</H1>
                        <H3>shopname.ae</H3>
                    </Flex>
                </RegionBox>

                <RegionBox>
                    <Img src={RU} />
                    <Flex>
                        <H1>Russia</H1>
                        <H3>shopname.ae</H3>
                    </Flex>
                </RegionBox>

                <RegionBox>
                    <Img src={IT} />
                    <Flex>
                        <H1>Italy</H1>
                        <H3>shopname.ae</H3>
                    </Flex>
                </RegionBox>
            </FlexRow>

            <FlexRow>

                <RegionBox>
                    <Img src={De} />
                    <Flex>
                        <H1>Denmark</H1>
                        <H3>shopname.ae</H3>
                    </Flex>
                </RegionBox>

                <RegionBox>
                    <Img src={FR} />
                    <Flex>
                        <H1>France</H1>
                        <H3>shopname.ae</H3>
                    </Flex>
                </RegionBox>

                <RegionBox>
                    <Img src={EM} />
                    <Flex>
                        <H1>Arabic Emirates</H1>
                        <H3>shopname.ae</H3>
                    </Flex>
                </RegionBox>

                <RegionBox>
                    <Img src={CH} />
                    <Flex>
                        <H1>China</H1>
                        <H3>shopname.ae</H3>
                    </Flex>
                </RegionBox>

                <RegionBox>
                    <Img src={UK} />
                    <Flex>
                        <H1>Great Britain</H1>
                        <H3>shopname.ae</H3>
                    </Flex>
                </RegionBox>
            </FlexRow>
            

        </Box>
    )
}

export default ExtraService