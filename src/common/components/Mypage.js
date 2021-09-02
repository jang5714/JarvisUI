import React from 'react'
import styled from 'styled-components';
import profileimg from '../images/profile.jpg'
import setting from '../images/settings.png'
import logout from '../images/logout.png'
import showNav from '../images/right-arrow.png'
import hideNav from '../images/left-arrow.png'
import { Link } from 'react-router-dom';


const MyPage = () => {
    const openNav = () => {
        document.getElementById('mypage').style.display = 'block';
        document.getElementById('show-button').style.display = 'none';
        document.getElementById('hide-button').style.display = 'block';

    }
    const closeNav = () => {
        document.getElementById('mypage').style.display = 'none';
        document.getElementById('show-button').style.display = 'block';
        document.getElementById('hide-button').style.display = 'none';


    }
    
    return (<>
    <br/>
    <ButtonDiv>
    <MyPageDiv id="mypage">
        <br/>
        <DivMyPage>
            <br/>
            <Profile src={profileimg} alt=""/>
            <h3>홍길동님, 안녕하세요!</h3>
            <Menu>    
            <Menuul>
                <Menuli>
                    <Link to="/"><Icon src = {setting} alt=""/>Setting</Link>
                </Menuli>
                <Menuli>
                    <Link to="/"><Icon src = {logout} alt=""/>LogOut</Link>
                </Menuli>
            </Menuul>
        </Menu>
        </DivMyPage>    
    </MyPageDiv>
        <img id="show-button" src={showNav} onClick={openNav} style={{display:'none'}}/>
        <img id="hide-button" src={hideNav} onClick={closeNav}/>
    </ButtonDiv>
    

    </>)
}
export default MyPage

const ButtonDiv = styled.div`
    position:fixed;
    display:inline;
`
const MyPageDiv = styled.div`
    float:left;
    width: 250px;
    height: 450px;
    background-color: #20c997;
    border-radius:20px;

`
const DivMyPage = styled.div`
    text-align:center;
`
const Profile = styled.img`
    margin: auto;
    width:80%;
    height:30%;
`
const Menu = styled.div`
    float:left;
`
const Menuul = styled.ul`
    padding:20px;
    list-style-type:none;
`
const Menuli = styled.li`
    padding:10px;
`
const Icon = styled.img`
    float:left;
    width: 20px;
    height: 20px;
    padding: 3px;
`
