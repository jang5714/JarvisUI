import React from 'react'
import styled from 'styled-components'

const Header = () => {
    return(<>
    <HeaderDiv>
        <h1>Jarviis</h1>
    </HeaderDiv>
    </>)
}
export default Header

const HeaderDiv = styled.div`
    text-align:center;
    // position:fixed;
    // width:100%;
    height:100px;
    background-color: lightgray;
    padding: 10px;
`