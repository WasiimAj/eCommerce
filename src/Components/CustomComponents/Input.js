import React from 'react';
import styled from 'styled-components';

const InputFeild = styled.input`
    width: 20.5rem;
    margin:auto;
    background: #FFFFFF;
    border: 1px solid #E0E0E0;
    border-radius: 6px;
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 19px;
    color: #A9ACB0;
    outline:none;
    padding:10px;
`

const Input = (props) => {
    return (
        <InputFeild type={props.type} placeholder={props.placeholder} />
    )
}

export default Input