import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import Navigation from 'component/Nevigation';
import Video from '../resource/Jarvis.mp4'
const Login = ()=> (
<BodyDiv id="body">
<Videojarvis controls>
    <source src={Video}/>
</Videojarvis>
    <Div>
        <From>
            <H1>Jarvis</H1>
            <br/>
            <Button>Google Login</Button>
            <br/>
            <Button>Facebook Login</Button>
            <br/>
            <Button>Twiter Login</Button>
            <br/>
            <LoginButton >Login</LoginButton>
            <>&nbsp;</>
            <JoginButton>Join</JoginButton>
        </From>
    </Div>
</BodyDiv>
)

export default Login

const From = styled.form`
    z-index: 2;
`

const Videojarvis = styled.video`
    position: fixed;
    right: 0;
    bottom: 0;
    min-width: 100%;
    min-height: 100%;
    z-index: -1;
    allow='autoplay; encrypted-media'
`
const BodyDiv = styled.div`
    width: 100%;
    height: 100%;
    
`

const JoginButton = styled.button`
    border-width: 3px;
    height: 30px;
    width: 20%;
    ;
`


const LoginButton = styled.button`
    border-width: 3px;
    height: 30px;
    width: 78%;
`

const Button = styled.button`
    border-width: 3px;
    height: 30px;
    width: 300px;
`

const Div = styled.div`
    display: flex;
    justify-content: center;
    line-height:3em;
`

const H1 = styled.h1`
    width: 100%;
    height: 30px;
    color : white;
    font-size: 100px;
    margin-top: 70%;
    
`

