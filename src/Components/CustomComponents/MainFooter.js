import React from 'react';
import styled from 'styled-components';

import us from "../../Images/us.png";
import brand from "../../Images/logo.png";
import facebook from "../../Images/facebook1.png";
import youtube from "../../Images/youtube.png";
import twiiter from "../../Images/twitter.png";
import linkedin from "../../Images/linkenin.png";
import instagram from "../../Images/instagram.png";

import googleApp from "../../Images/app-store.png";
import appStore from "../../Images/google-play.png";

const Container = styled.div`
    width:90%;
    height:100%;
    margin:auto;
    display:flex;
    align-items: center;
    justify-content: space-between;
`

const FooterBox = styled.footer`
    width:100%;
    height:324px;
    background:#FFFFFF;
    position: absolute;
    top:100%;
`;

const Section1 = styled.div`
    width:100%;
    height: 256px;
    margin:auto;
    background:#fffff;
`   

const Section2 = styled.div`
    width:100%;
    height: 68px;
    margin:auto;
    background:#EFF2F4;
    display: flex;
    align-items: center;
    justify-content: space-between;
`  

const P = styled.p`
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 24px;
    letter-spacing: -0.2px;
    color: #606060;
    padding:5px;
`

const Brand = styled.div`
    width: 23%;
    height:100%;
    display: flex;
    align-items: flex-start;
    justify-content: flex-start;
    flex-direction: column;
`

const BrandP = styled.p`
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 24px;
    letter-spacing: -0.2px;
    color: #505050;
    padding:15px 8px;
`

const FlexDiv = styled.div`
    margin:2% 0;
    width: 70%;
    height:30px;
    display: flex;
    align-items: center;
    justify-content: space-around;
`

const A = styled.a`
    text-decoration:none;
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 24px;
    letter-spacing: -0.2px;
    color: #8B96A5;
    padding: 3px 0px;
`;

const AboutSection = styled.div`
    width:70%;
    height:100%;
    display: flex;
`

const FlexCol = styled.div`
    display: flex;
    align-items: flex-start;
    justify-content: flex-start;
    flex-direction: column;
    width:20%;
    height:100%;
`

const Title = styled.p`
    font-style: normal;
    font-weight: 500;
    font-size: 16px;
    line-height: 22px;
    color: #1C1C1C;
    padding:5px 0 10px 0;
`


const MainFooter = () => {
    return (
        <FooterBox>
            <Section1>
                <Container>
                    <Brand>
                        <img src={brand} />
                        <BrandP>
                            Best information about the company gies here but now lorem ipsum is
                        </BrandP>

                        <FlexDiv>
                            <A href='#facebook'><img src={facebook} alt='facebook-icon' /></A>
                            <A href='#facebook'><img src={twiiter} alt='twiiter-icon' /></A>
                            <A href='#facebook'><img src={linkedin} alt='linkedin-icon' /></A>
                            <A href='#facebook'><img src={instagram} alt='instagram-icon' /></A>
                            <A href='#facebook'><img src={youtube} alt='youtube-icon' /></A>        
                        </FlexDiv>
                    </Brand>
                    
                    <AboutSection>
                        <FlexCol>
                            <Title>About</Title>
                            <A href='#'>About Us</A>
                            <A href='#'>Find store</A>
                            <A href='#'>Categories</A>
                            <A href='#'>Blogs</A>
                        </FlexCol>

                        <FlexCol>
                            <Title>Partnership</Title>
                            <A href='#'>About Us</A>
                            <A href='#'>Find store</A>
                            <A href='#'>Categories</A>
                            <A href='#'>Blogs</A>
                        </FlexCol>

                        <FlexCol>
                            <Title>Information</Title>
                            <A href='#'>Help Center</A>
                            <A href='#'>Money Refund</A>
                            <A href='#'>Shipping</A>
                            <A href='#'>Contact us</A>
                        </FlexCol>

                        <FlexCol>
                            <Title>For users</Title>
                            <A href='#'>Login</A>
                            <A href='#'>Register</A>
                            <A href='#'>Settings</A>
                            <A href='#'>My Orders</A>
                        </FlexCol>

                        <FlexCol>
                            <Title>Get app</Title>
                            <A href='#'>
                                <img src={appStore} alt='app-store' />
                            </A>
                            <A href='#'>
                                <img src={googleApp} alt='google-app' />
                            </A>
                        </FlexCol>

                    </AboutSection>
                </Container>
            </Section1>
            <Section2>
                <Container>
                    <P> © 2023 Ecommerce. </P>
                    <div style={{display:'flex', alignItems: 'center'}}>
                        <img src={us} alt='us'/>
                        <P>English ⏏</P>
                    </div>
                </Container>
            </Section2>
        </FooterBox>
    )
}

export default MainFooter