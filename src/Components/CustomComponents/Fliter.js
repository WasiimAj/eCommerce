import React from 'react';
import styled from 'styled-components';

const Box = styled.div`
    width: 90%;
    height: 32px;
    margin: auto;
    display: flex;
    align-items: flex-start;
    justify-content: flex-start;
    margin: 1.5% 0;
`;

const Text = styled.p`
    width: 115px;
    height: 32px;
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 19px;
    color: #505050;
    background: #FFFFFF;
    border: 1px solid #0D6EFD;
    border-radius: 5px;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 0 4px;
`

const Clear = styled.a`
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 19px;
    color: #0D6EFD;
    padding: 5px;
    cursor: pointer;  
`

const Fliter = () => {
    return (
        <Box>
            <Text> Samsung x</Text>
            <Text> Apple x</Text>
            <Text> Poco x</Text>
            <Text> Metallic x</Text>
            <Text> 4 star x</Text>
            <Text> 3 star x</Text>
            <Clear>Clear all filter</Clear>
        </Box>
    )
}

export default Fliter