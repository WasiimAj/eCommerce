import React from 'react';
import styled from 'styled-components';

import Background from "../../Images/backgrond2.png";

const Box = styled.div`
    width: 73.4rem;
    height:120px;
    margin: 1% auto;
    background-repeat:no-repeat;
    border-radius: 8px;
    background:red;
    background: url(${Background});
    display:flex;
    align-items: center;
    justify-content: space-between;
`
const Flex = styled.div`
    width: 40%;
    height:100%;
    display:flex;
    align-items: flex-start;
    justify-content: center;
    flex-direction: column;
`

const Flex1 = styled.div`
    width: 40%;
    height:100%;
    display:flex;
    align-items: center;
    justify-content: flex-end;
`   

const H1 = styled.p`
    font-family: 'Inter';
    font-style: normal;
    font-weight: 600;
    font-size: 24px;
    line-height: 32px;
    letter-spacing: -0.2px;
    color: #FFFFFF;
    padding: 5px 15px;
`

const P = styled.p`
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 19px;
    color: #FFFFFF;
    opacity: 0.7;
    padding: 0px 15px;
`

const Button = styled.button`
    font-style: normal;
    font-weight: 500;
    font-size: 16px;
    line-height: 19px;
    text-align: center;
    color: #FFFFFF;
    background: #FF9017;
    border-radius: 6px;
    outline:none;
    border:none;
    padding:10px;
    cursor: pointer;
    margin: 2rem;
`

const DiscountFooter = () => {
    return (<>
        <Box>
            <Flex>
                <H1>Super discount on more than 100 USD</H1>
                <P>Have you ever finally just write dummy info</P>
            </Flex>
            <Flex1>
                <Button>Shop now</Button>
            </Flex1>
        </Box>
        </>
    )
}

export default DiscountFooter