import React from 'react';
import styled from 'styled-components';

import Background from "../../Images/trending-background.png";
import User from "../../Images/userAvatar.png";


const Box = styled.div`
    width:90%;
    height: 400px;
    margin: 1% auto;
    background: #ffffff;
    border: 1px solid #E3E8EE;
    border-radius: 6px;
    display:flex;
    align-iteams:center;
    justfy-content:space-between;
`;

const Section1 = styled.div`
    width: 25%;
    height: 94%;
    margin: 1% .5%;
`;

const Section2 = styled.div`
    width: 664px;
    height: 94%;
    margin: 1% .5%;
    background: url(${Background});
    background-repeat: no-repeat;
`;

const Section3 = styled.div`
    width: 25%;
    height: 94%;
    margin: 1% .5%;
    display:flex;
    align-items: center;
    justify-content: flex-start;
    flex-direction: column;
`;

const Active = styled.p`
    font-style: normal;
    font-weight: 500;
    font-size: 16px;
    line-height: 19px;
    color: #1C1C1C;
    background: #E5F1FF;
    border-radius: 6px;
    padding: 10px 15px;
`;

const Titles = styled.p`
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 19px;
    color: #505050;
    padding: 10px 15px;
`;

const H3 = styled.h3`
    font-style: normal;
    font-weight: 400;
    font-size: 28px;
    line-height: 34px;
    color: #1C1C1C;
    padding: 2px 8px;
`

const H1 = styled.h1`
    font-style: normal;
    font-weight: 700;
    font-size: 32px;
    line-height: 39px;
    color: #1C1C1C;
    padding: 2px 8px;
`

const Button = styled.button`
    background: #FFFFFF;
    border-radius: 6px;
    font-style: normal;
    font-weight: 500;
    font-size: 16px;
    line-height: 19px;
    text-align: center;
    color: #1C1C1C;
    padding:8px;
    outline:none;
    border:none;
    cursor: pointer; 
    margin: 2% 8px; 
`;

const UserBox = styled.div`
    width: 70%;
    height:150px;
    background: #E3F0FF;
    border-radius: 6px;
    margin: .5%;
`;

const UserBox2 = styled.div`
    width: 70%;
    height: 95px;
    background: #F38332;
    border-radius: 6px;
    margin: .5%;
`;

const UserBox3 = styled.div`
    width:70%;
    height: 95px;
    background: #55BDC4;
    border-radius: 6px;
    margin: .5%;
`;

const P = styled.p`
    width: 70%;
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 19px;
    color: #FFFFFF;
    padding:15px;
`;

const UserSection = styled.div`
    display:flex;
    align-items: center;
    justify-content: space-between;
`;

const UserText = styled.p`
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 19px;
    color: #1C1C1C;
    padding: 8px;
    width: 80%;
`;

const Join = styled.button`
    width:90%;
    background: linear-gradient(180deg, #127FFF 0%, #0067FF 100%);
    border: 1px solid #0D6EFD;
    border-radius: 6px;
    font-style: normal;
    font-weight: 500;
    font-size: 13px;
    line-height: 16px;
    text-align: center;
    color: #FFFFFF;
    margin: 3px 5%;
    padding: 7px;
    cursor: pointer;
`;

const Login = styled.button`
    width:90%;
    background: #FFFFFF;
    border-radius: 6px;
    font-style: normal;
    font-weight: 500;
    font-size: 13px;
    line-height: 16px;
    text-align: center;
    color: #0D6EFD;
    margin: 3px 5%;
    padding: 7px;
    cursor: pointer;
    border: 1px solid #E3E8EE;
`;

const Trending = () => {
    return (
        <Box>
            <Section1>
                <Active>Automobiles </Active>
                <Titles> Clothes and wear </Titles>
                <Titles> Home interiors </Titles>
                <Titles> Computer and tech </Titles>
                <Titles> Tools, equipments </Titles>
                <Titles> Sports and outdoor </Titles>
                <Titles> Animal and pets </Titles>
                <Titles> Machinery tools     </Titles>
                <Titles> More category </Titles>
            </Section1>

            <Section2>
                <div style={{width:'80%', margin:' 6% auto'}}>
                    <H3>Latest trending</H3>
                    <H1>Electronic items</H1>
                    <Button>Learn more</Button>
                </div>
            </Section2>
            
            <Section3>
                <UserBox>
                    <UserSection>
                        <img style={{margin:'11px'}} src={User} alt='user-avatar'/>
                        <UserText>
                            Hi, user let’s get stated
                        </UserText>
                    </UserSection>
                    <Join>Join now</Join>
                    <Login>Log in</Login>

                </UserBox>

                <UserBox2>
                    <P>Get US $10 off with a new supplier</P>
                </UserBox2>
                <UserBox3>
                    <P>Send quotes with supplier preferences</P>
                </UserBox3>
            </Section3>
        </Box>
    )
}

export default Trending;