import React from 'react'
import styled from 'styled-components'

const SubscribeBox = styled.div`
    width:100%;
    height:190px;
    background: #EFF2F4;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
`

const Titile = styled.p`
    font-style: normal;
    font-weight: 600;
    font-size: 20px;
    line-height: 28px;
    text-align: center;
    letter-spacing: -0.2px;
    color: #1C1C1C;
`

const P = styled.p`
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 24px;
    text-align: center;
    letter-spacing: -0.2px;
    color: #606060;
    padding: 5px 0px 21px;
`

const InputBox = styled.div`
    width:380px;
    height:40px;
    display: flex;
    align-items: center;
    justify-content: space-between;
`

const Input = styled.input`
    width: 274px;
    height:40px;
    background:#ffffff;
    border: 1px solid #E3E8EE;
    border-radius: 6px;
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 19px;
    color: #8B96A5;
    padding:0 10px;
    outline:none;
`

const Button = styled.button`
    width: 110pxpx;
    height:40px;
    background: linear-gradient(180deg, #127FFF 0%, #0067FF 100%);
    border: 1px solid #0D6EFD;
    border-radius: 6px;
    font-style: normal;
    font-weight: 500;
    font-size: 16px;
    line-height: 19px;
    text-align: center;
    color: #FFFFFF;
    padding:8px;
    cursor: pointer;
`

const SubscribeFooter = () => {
    return (
        <SubscribeBox>
            <Titile>
                Subscribe on our newsletter
            </Titile>
            <P>
                Get daily news on upcoming offers from many suppliers all over the world
            </P>
            <InputBox>
                <Input placeholder='✉️ Email'/>
                <Button>Subscribe</Button>
            </InputBox>
        </SubscribeBox>
    )
}

export default SubscribeFooter;