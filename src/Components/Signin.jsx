import React from 'react';
import styled from 'styled-components';

// [-] Components Import 
import Title from './CustomComponents/Title';
import Label from './CustomComponents/Label';
import Input from './CustomComponents/Input';
import CheckBox from './CustomComponents/CheckBox';
import Button from './CustomComponents/Button';
import Or from './CustomComponents/Or';
import ContuneWith from './CustomComponents/ContuneWith';

// [-] Images Import 
import google from "../Images/google.png";
import facebook from "../Images/facebook.png";
import SignInFooter from './CustomComponents/SignInFooter';


const Box = styled.div`
    width: 24rem;
    height: 561px;
    background: #ffffff;
    box-shadow: 0px 3px 10px rgba(32, 32, 32, 0.1);
    border-radius: 6px;
    margin: 3% auto;
    display:flex;
    flex-direction: column;
`;

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

const Signin = () => {
    return (
        <>
            <Box>
                <Title title="Sign in" />
                <Label labelText="Username" />
                <Input placeholder="Email or phone" type="text"/>
                <Label labelText="Password" />
                <Input placeholder="Type here" type="password"/>
                <CheckBox checkboxText="Remember me"/>
                <Button text="Log In" />
                <Or/>

                <ContuneWith 
                    src={google} 
                    text="Continue with Google" 
                    background="#FFFFFF"
                    color="#606060"
                    />
                <ContuneWith 
                    src={facebook} 
                    text="Continue with Facebook" 
                    background="#4267B2"
                    color="#FFFFFF"
                    />

                <P>
                    Don’t have an account? <A href='/register'> Register now </A>
                </P>

            </Box>    

            <SignInFooter />
        </>
    )
}

export default Signin