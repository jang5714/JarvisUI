import react from 'react'
import styled from 'styled-components'
import jarvis from 'common/images/jarviss.gif'
const Backvideo = ()=>(
    <Div>
    <Img src={jarvis}/>
    </Div>
)

export default Backvideo

const Div = styled.div`
    background-size: cover;
    height: 100%
    padding: 0;
    margin: 0; 
`

const Img = styled.img`
    display: flex;
    background-size: cover;
    background-repeat: no-repeat;
    padding: 0;
    margin: 0;


`