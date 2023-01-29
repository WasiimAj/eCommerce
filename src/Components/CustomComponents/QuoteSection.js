import React from 'react';
import styled from 'styled-components';

import background from "../../Images/qoute.png";

const Box =styled.div`
    width: 90%;
    height: 420px;
    margin:auto;
    background: url(${background});
    background-repeat: no-repeat;
    background-position: right center;
    background-blend-mode: multiply;
    opacity: 0.7; 
    border: 1px solid #E0E0E0;
    border-radius: 6px;
`

const Overlay = styled.div`
    width:100%;
    height: 100%;
    margin: auto auto;
    border-radius: 6px; 
    background: linear-gradient(94.99deg, #2C7CF1 7.19%, rgba(0, 209, 255, 0.5) 89.49%);
    display:flex;
    align-items: center;
    justify-content: space-between;
`

const Div = styled.div`
    width:50%;
    height:100%;
    display: flex;
    align-items: flex-start;
    justify-content: flex-start;
    flex-direction: column;
`

const Title = styled.h1`
    width: 75%;
    font-style: normal;
    font-weight: 600;
    font-size: 32px;
    line-height: 39px;
    letter-spacing: -0.2px;
    color: #FFFFFF;
    padding: 50px 5px 5px 50px;
`

const P = styled.p`
    width: 65%;
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 24px;
    letter-spacing: -0.2px;
    color: #FFFFFF;
    padding: 6px 5px 5px 50px;
`

const Form = styled.div`
    width: 491px;
    height: 346px;
    background: #FFFFFF;
    box-shadow: 0px 1px 2px rgba(56, 56, 56, 0.25);
    border-radius: 6px;
    margin:30px;
    display:flex;
    align-items: flex-start;
    justify-content: flex-start;
    flex-direction: column;
`

const Header = styled.h1`
    width:90%;
    margin: auto;
    font-style: normal;
    font-weight: 600;
    font-size: 20px;
    line-height: 28px;
    letter-spacing: -0.2px;
    color: #1C1C1C;
    padding: 20px 5px 10px;
`

const Input = styled.input`
    width:440px;
    height:40px;
    background: #FFFFFF;
    border: 1px solid #E3E8EE;
    border-radius: 6px;
    outline:none;
    margin: 10px auto;
    padding:10px;
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 19px;
    color: #8B96A5;
`

const Textarea = styled.textarea`
    width:440px;
    height: 73px;
    max-width: 440px;
    max-height: 73px;
    background: #FFFFFF;
    border: 1px solid #E3E8EE;
    border-radius: 6px;
    outline:none;
    margin: 10px auto;
    padding:10px;
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 19px;
    color: #8B96A5;
`

const SmallInputsBox = styled.div`
    width:90%;
    display:flex;
    align-items: flex-start;
    justify-content: flex-start;
    margin: 0 auto;
`

const SmallInput = styled.input`
    width: 206px;
    height:40px;
    background: #FFFFFF;
    border: 1px solid #E3E8EE;
    border-radius: 6px;
    outline:none;
    padding:10px;
    margin: 10px 0;
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 19px;
    color: #8B96A5;    
`

const Select = styled.select`
    width:111px;
    height:40px;
    background: #FFFFFF;
    border: 1px solid #E3E8EE;
    border-radius: 6px;
    outline:none;
    padding:10px;
    margin: 10px 8px;
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 19px;
    color: #8B96A5;    
`

const Button = styled.button`
    background: linear-gradient(180deg, #127FFF 0%, #0067FF 100%);
    border: 1px solid #0D6EFD;
    border-radius: 6px;
    cursor: pointer;
    font-style: normal;
    font-weight: 500;
    font-size: 16px;
    line-height: 19px;
    text-align: center;
    color: #FFFFFF;
    padding:10px;
    margin: 10px 25px 20px 25px;
`

const QuoteSection = () => {
    return (
        <Box>
            <Overlay>
                <Div style={{width:'50%'}}>
                    <Title>
                        An easy way to send requests to all suppliers
                    </Title>
                    <P>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt.
                    </P>
                </Div>
                <Form>
                    <Header>Send quote to suppliers</Header>
                    <Input placeholder='What item you need?'/>
                    <Textarea placeholder='Type more details'></Textarea>

                    <SmallInputsBox>
                        <SmallInput placeholder='Quantity'/>
                        <Select>
                            <option>Pcs</option>
                        </Select>
                    </SmallInputsBox>
                    <Button>Send inquiry</Button>
                </Form>
            </Overlay>
        </Box>
    )
}

export default QuoteSection