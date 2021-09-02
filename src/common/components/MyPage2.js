import React from 'react'
import styled from 'styled-components';
import profileimg from 'common/images/user.png'
import setting from 'common/images/user.png'
import logout from 'common/images/user.png'
import { Link } from 'react-router-dom';

const MyPage = () => {
    const openNav = () => {
        document.getElementById('mypage').style.display = 'block';

    }
    const closeNav = () => {
        document.getElementById('mypage').style.display = 'none';
    }
    
    return (<>
    <button onClick={openNav}>openNav</button>
    <MyPageDiv id="mypage">
        <ButtonX onClick={closeNav}>X</ButtonX>
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
    </>)
}
export default MyPage

const MyPageDiv = styled.div`
    float:left;
    width: 250px;
    height: 450px;
    background-color: white;
`
const ButtonX = styled.button`
    float:right;
`
const DivMyPage = styled.div`
    text-align:center;
    background-color: white;
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