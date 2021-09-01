import react from 'react'
import Video from '../resource/Jarvis.mp4'
const Backvideo = ()=>(
    <>
    <Videojarvis controls>
            <source src={Video}/>
    </Videojarvis>
    </>
)

export default Backvideo

const Videojarvis = styled.video`
    position: fixed;
    right: 0;
    bottom: 0;
    min-width: 100%;
    min-height: 100%;
    z-index: -1;
    allow='autoplay; encrypted-media'
`