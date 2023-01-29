import React from 'react';
import styled from 'styled-components';

const LabelText = styled.label`
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 19px;
    letter-spacing: -0.2px;
    color: #1C1C1C;
    margin:auto;
    width: 90%;
`;

const Label = (props) => {
    return (
        <LabelText>
            {props.labelText}
        </LabelText>
    )
}

export default Label