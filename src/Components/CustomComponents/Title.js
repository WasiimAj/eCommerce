import React from 'react';
import styled from 'styled-components';

const H3 = styled.h3`
    width:90%;
    font-style: normal;
    font-weight: 600;
    font-size: 24px;
    line-height: 32px;
    letter-spacing: -0.2px;
    color: #1C1C1C;
    justify-content: center;
    align-items: center;
    margin:auto;
    padding: 10px;
`

const Title = (props) => {
    return (
        <H3>{props.title}</H3>
    )
}

export default Title