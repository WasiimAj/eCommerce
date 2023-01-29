import React from 'react'
import styled from 'styled-components'

const ButtonElement = styled.button`
    background: #0D6EFD;
    border: 1px solid #0D6EFD;
    border-radius: 6px;
    width:90%;
    font-style: normal;
    font-weight: 500;
    font-size: 16px;
    line-height: 19px;
    text-align: center;
    color: #FFFFFF;
    margin:auto;
    padding:10px;
    cursor: pointer;
`


const Button = (props) => {
    return (
        <ButtonElement>
            {props.text}
        </ButtonElement>
    )
}

export default Button