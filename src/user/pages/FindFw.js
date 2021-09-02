import React from "react"
import styled from 'styled-components'
const FindFw = () => {
    return(
        <>
            <Div>
                <from action="form_ok.php" method="POST">
                    <p>비밀번호 입력 : </p>
                        <InPut1 id="input1" type="text" placeholder="변경할 비밀번호를 적어주세요"/>
                    <p>비밀번호 확인 : </p>
                        <InPut1 id="input1" type="text" placeholder="변경한 비밀번호를 한번 더 적어주세요"/>
                </from>
            </Div>
            <button style={{justifyContent:"center"}}>확인</button>
        </>
    )
}
export default FindFw
const Div = styled.div`
    disp
    width : 50%;
    height : auto;
    border-bottom:1px solid gray;
    border-left:1px solid gray;
    border-right:1px solid gray;
    border-top:1px solid gray;
    margin-right: 10px;
    justify-content: center;
`
const InPut1 = styled.input`
    width : 300px;
    height : 50px;
    border-bottom:1px solid gray;
    border-left:1px solid gray;
    border-right:1px solid gray;
    border-top:1px solid gray;
    margin-right: 10px;
    justify-content: center;
`