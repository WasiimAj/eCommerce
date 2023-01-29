import React from 'react';
import styled from 'styled-components';


const Nav = styled.nav`
    width: 240px;
    height: 1448px;
    display: flex;
    flex-direction: column;
`;

const Title = styled.p`
    width: 100%;
    font-style: normal;
    font-weight: 600;
    font-size: 16px;
    line-height: 19px;
    color: #1C1C1C;
    border-top: 1px solid #E3E8EE;
    padding: 10px 0;
`

const A = styled.a`
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 19px;
    color: #505050;
    padding: 8px 0px;
    text-decoration: none;
`

const SeaAll = styled.a`
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 19px;
    color: #0D6EFD;
    padding: 8px 0px;
    text-decoration: none;
`

const CheckBoxDiv = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    margin: 3% 0;
`

const CheckBox = styled.input`
    border: none;
    border: 2px solid #BDBDBD;
    border-radius: 5px;
    width: 20px;
    height: 20px;
`

const CheckBoxText = styled.p`
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 19px;
    color: #1C1C1C;
    padding: 0 13px;
`

const Range = styled.input`
    background: #AFD0FF;
    border-radius: 2px;
    width: 212px;
    height: 4px;
`

const Input = styled.input`
    background: #FFFFFF;
    width: 110px;
    height: 40px;
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 19px;
    color: #BBBCBE;
    outline: none;
    border: none;
    border: 1px solid #E3E8EE;
    border-radius: 6px;
    padding: 5px;
    margin: 1%;
`

const Button = styled.button`
    background: #FFFFFF;
    border: 1px solid #E3E8EE;
    box-shadow: 0px 1px 2px rgba(56, 56, 56, 0.08);
    border-radius: 6px;
    font-style: normal;
    font-weight: 500;
    font-size: 16px;
    line-height: 19px;
    text-align: center;
    color: #0D6EFD;
    padding: 11px;
    cursor: pointer;
`

const Radio = styled.input`
    width: 20px;
    height: 20px;
    background: #009688;
`


const CategoryNav = () => {
    return (
        <Nav>
            <Title>Category</Title>
            <A href='#'>Mobile accessory</A>
            <A href='#'>Electronics</A>
            <A href='#'>Smartphones </A>
            <A href='#'>Modern tech</A>
            <SeaAll href='#'>See all</SeaAll>

            <Title>Brands</Title>
            <CheckBoxDiv>
                <CheckBox type='checkbox' />
                <CheckBoxText>Samsung</CheckBoxText>
            </CheckBoxDiv>
            <CheckBoxDiv>
                <CheckBox type='checkbox' />
                <CheckBoxText>Apple</CheckBoxText>
            </CheckBoxDiv>
            <CheckBoxDiv>
                <CheckBox type='checkbox' />
                <CheckBoxText>Huawei</CheckBoxText>
            </CheckBoxDiv>
            <CheckBoxDiv>
                <CheckBox type='checkbox' />
                <CheckBoxText>Pocco</CheckBoxText>
            </CheckBoxDiv>
            <CheckBoxDiv>
                <CheckBox type='checkbox' />
                <CheckBoxText>Lenovo</CheckBoxText>
            </CheckBoxDiv>
            <SeaAll href='#'>See all</SeaAll>

            <Title>Features</Title>
            <CheckBoxDiv>
                <CheckBox type='checkbox' />
                <CheckBoxText>Metallic</CheckBoxText>
            </CheckBoxDiv>
            <CheckBoxDiv>
                <CheckBox type='checkbox' />
                <CheckBoxText>Plastic cover</CheckBoxText>
            </CheckBoxDiv>
            <CheckBoxDiv>
                <CheckBox type='checkbox' />
                <CheckBoxText>8GB Ram</CheckBoxText>
            </CheckBoxDiv>
            <CheckBoxDiv>
                <CheckBox type='checkbox' />
                <CheckBoxText>Super power</CheckBoxText>
            </CheckBoxDiv>
            <CheckBoxDiv>
                <CheckBox type='checkbox' />
                <CheckBoxText>Large Memory</CheckBoxText>
            </CheckBoxDiv>
            <SeaAll href='#'>See all</SeaAll>

            <Title>Price range</Title>
            <Range type='range' />
            <div style={{margin:'5% 0'}}>
                <Input placeholder='0'/>
                <Input placeholder='999999'/>
            </div>
            <Button>Apply</Button>

            <Title>Condition</Title>
            <CheckBoxDiv>
                <Radio type='radio' name='a'/>
                <CheckBoxText>Any</CheckBoxText>
            </CheckBoxDiv>
            <CheckBoxDiv>
                <Radio type='radio' name='a'/>
                <CheckBoxText>Refurbished</CheckBoxText>
            </CheckBoxDiv>
            <CheckBoxDiv>
                <Radio type='radio' name='a'/>
                <CheckBoxText>Brand new</CheckBoxText>
            </CheckBoxDiv>
            <CheckBoxDiv>
                <Radio type='radio' name='a'/>
                <CheckBoxText>Old items</CheckBoxText>
            </CheckBoxDiv>

            <Title>Ratings</Title>
            <CheckBoxDiv>
                <CheckBox type='checkbox' />
                <CheckBoxText>⭐⭐⭐⭐⭐</CheckBoxText>
            </CheckBoxDiv>
            <CheckBoxDiv>
                <CheckBox type='checkbox' />
                <CheckBoxText>⭐⭐⭐⭐</CheckBoxText>
            </CheckBoxDiv>
            <CheckBoxDiv>
                <CheckBox type='checkbox' />
                <CheckBoxText>⭐⭐⭐ </CheckBoxText>
            </CheckBoxDiv>
            <CheckBoxDiv>
                <CheckBox type='checkbox' />
                <CheckBoxText>⭐⭐</CheckBoxText>
            </CheckBoxDiv>
        </Nav>
    )
}

export default CategoryNav