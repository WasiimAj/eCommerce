import React from 'react';
import styled from 'styled-components';

const Box = styled.div`
    width:90%;
    margin:auto;
    display: flex;
    align-items: center;
`

const CheckBoxElement = styled.input`
    border-radius: 5px;
    width: 1.25rem;
    height:1.25rem;
`;

const CheckboxTextEle = styled.p`
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 19px;
    color: #1C1C1C;
    width:90%;
    margin:auto;
    padding: 0px 10px;
`

const CheckBox = (props) => {
    return (
        <Box>
            <CheckBoxElement type="checkbox"/>
            <CheckboxTextEle>
                {props.checkboxText}
            </CheckboxTextEle>
        </Box>
    )
}

export default CheckBox