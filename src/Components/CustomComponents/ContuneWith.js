import React from 'react';
import styled from 'styled-components';



const Image = styled.img`
    width: 22px;
    height: 22px;
    margin: 0 1rem;
`;



const ContuneWith = (props) => {

    const Button = styled.button`
    width:90%;
    height:40px;
    margin:auto;
    background: ${props.background};
    border: 1px solid #E0E0E0;
    box-shadow: 0px 1px 3px rgba(56, 56, 56, 0.1);
    border-radius: 6px;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    cursor: pointer;
    `;

    const Text = styled.p`
        font-style: normal;
        font-weight: 500;
        font-size: 16px;
        line-height: 19px;
        text-align: center;
        letter-spacing: -0.1px;
        color: ${props.color};
        padding: 0px 3rem;
    `;

    return (
        <Button>
            <Image src={props.src}/>
            <Text> {props.text} </Text>
        </Button>
    )
}

export default ContuneWith