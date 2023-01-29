import React from 'react';
import styled from 'styled-components';

// [-] Components Import 
import Title from './CustomComponents/Title';
import Label from './CustomComponents/Label';
import Input from './CustomComponents/Input';
import CheckBox from './CustomComponents/CheckBox';
import Button from './CustomComponents/Button';
import SignInFooter from './CustomComponents/SignInFooter';

const Box = styled.div`
    width: 24rem;
    height: 700px;
    background: #ffffff;
    box-shadow: 0px 3px 10px rgba(32, 32, 32, 0.1);
    border-radius: 6px;
    margin: 2% auto;
    display:flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
`;

const SmallInput = styled.input`
    background: #FFFFFF;
    border: 1px solid #E0E0E0;
    border-radius: 6px;
    width:42%;
    margin:auto .5%;
    padding:10px;
`

const Line = styled.div`
    width:340px;
    height: .5px;
    margin:auto;
    background: #E0E0E0;
`

const P = styled.p`
    font-style: normal;
    font-weight: 500;
    font-size: 16px;
    line-height: 24px;
    text-align: center;
    letter-spacing: -0.1px;
    color: #606060;
`

const A = styled.a`
    text-decoration:none;
    padding:5px;
    color:#428dfd;
`

const Register = () => {
    return (
        <>
        <div style={{position: 'relative'}}>
            <Box>
                <Title title="Register" />
                <div style={{margin:'auto', width:'90%'}}>
                    <SmallInput type="text" placeholder='Name'/>
                    <SmallInput type="text" placeholder='Surname'/>
                </div>
                <Label labelText="Your e-mail " />
                <Input text="email" placeholder="example@mail.com"/>

                <Label labelText="Phone" />
                <Input type="text" placeholder="00-000-00-00"/>

                <Label labelText="Password" />
                <Input type="password" placeholder="At least 6 characters."/>

                <Label labelText="Repeat Password" />
                <Input type="password" placeholder="Type here"/>

                <Button text="Register now"/>
                <CheckBox checkboxText="I agree with Terms and Conditions"/>
                
                <Line />

                <P>
                    Already have an accaunt?  <A href='/login'> Logn in </A>
                </P>
            </Box>

        </div>
            <SignInFooter />
        </> 
    )
}

export default Register