import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

const Navigation = () =>(
    <Nav class="navi" color="white">
        <NavItem>
            <NavList><Link to="/login">Login</Link></NavList>
            <NavList><Link to="/join">Join</Link></NavList>
            <NavList><Link to="/checklist">Checklist</Link></NavList>
            <NavList><Link to="/diary">Diary</Link></NavList>
            <NavList><Link to="/admin">Admin</Link></NavList>
            <NavList><Link to="/calendar">Calendar</Link></NavList>
            <NavList><Link to="/scheduler">Scheduler</Link></NavList>
            <NavList><Link to="/day">Day</Link></NavList>
            <NavList><Link to="/suggestion">Suggestion</Link></NavList>
            <NavList><Link to="/todo">ToDo</Link></NavList>
            <NavList><Link to="/findfw">FindFw</Link></NavList>
            <NavList><Link to="/findID">FindID</Link></NavList>
        </NavItem>
    </Nav>
)

export default Navigation

const Nav = styled.div`
    width: 100%;
    height: 30px;
    border-bottom: 1px solid #d1d8e4;
    color: white;
    z-index: 5;
`

const NavList = styled.ul`
    width: 1080px;
    display: flex;
    margin: 0 auto;
    color: white;
`

const NavItem = styled.li`
    width: auto;
    margin-left: 18px;
    margin-top: 5px;
    display: flex;
    color: white;

`
