import React from 'react';
import styled from 'styled-components';

import view1 from "../../Images/list.png"
import view2 from "../../Images/list1.png"

const Box = styled.div`
    width: 100%;
    height:62px;
    background: #FFFFFF;
    border: 1px solid #E3E8EE;
    border-radius: 6px;
    display: flex;
    align-items: center;
    justify-content: space-between;
`

const TotalProducts = styled.p`
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 19px;
    color: #1C1C1C;
    padding: 19px;
`

const CheckBox = styled.input`
    border-radius: 5px;
    width: 20px;
    height: 20px;
`

const Text = styled.p`
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 19px;
    color: #1C1C1C;
    padding: 15px;
`

const Select = styled.select`
    background: #FFFFFF;
    border: 1px solid #E3E8EE;
    border-radius: 6px;
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 19px;
    color: #1C1C1C;
    padding: 10px;
    outline:none;
`

const Flex = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
`

const Flex1 = styled.div`   
    width: 70px;
    display: flex;
    align-items: center;
    justify-content: space-around;
    border: 1px solid #E3E8EE;
    padding: 10px;
    border-radius: 6px;
    margin: 0 10px;
`

const FilterdProduct = () => {
    return (
        <Box>
            <TotalProducts>12,911 items in Mobile accessory</TotalProducts>
            <Flex>
                <CheckBox type='checkbox' />
                <Text>Verified only</Text>
                <Select>
                    <option>Featured</option>
                </Select>
                <Flex1>
                    <img src={view2} />
                    <img src={view1} />
                </Flex1>
            </Flex>
        </Box>
    )
}

export default FilterdProduct