import react from 'react'
import styled from 'styled-components'

const FindID = () =>(
    <Div>
        <form>
        <H1>Jarvis</H1>
        <br/>
        <br/>
        <p>NAME?</p>
        <Input id="name" type="text"/>
        <p>Email?</p>
        <Inputemail id="email" type="email"/>
        <>&nbsp;</>
        <button>인증번호 받기</button>
        <Input id="number" type="text" placeholder="인증번호를 입력해주세요"/>
        <br/>
        <button>다음</button>
        </form>
    </Div>
)

export default FindID

const Div = styled.div`
    display: flex;
    justify-content: center;
    
`
const H1 = styled.h1`
    width: 100%;
    height: 30px;
    color : balck;
    font-size: 100px;
    margin-top: 50%;
    
`
const Input = styled.input`
    size: 10px;
    width: 50%
`
const Inputemail =styled.input`
    width: 50%
`
