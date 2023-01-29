import React from 'react';
import styled from 'styled-components';

const OrElement = styled.p`
    font-style: normal;
    font-weight: 400;
    font-size: 13px;
    line-height: 18px;
    text-align: center;
    letter-spacing: -0.2px;
    color: #A9ACB0;
    display: flex;
    align-items: center;
    justify-content: space-evenly;

    &:after {
        content: "";
        width: 143px;
        height: .5px;
        background:#E0E0E0;
    }

    &:before {
        content: "";
        width: 143px;
        height: .5px;
        background:#E0E0E0;
    }

`

const Or = () => {
    return (
        <OrElement>
            OR
        </OrElement>
    )
}

export default Or