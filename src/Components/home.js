import { Container } from 'react-bootstrap';
import face from './../Images/face.png'
import Background from './background';


function Home() {
    return (
        <>


        <div className='d-flex flex-column' style={{position: 'relative'}}>
            <Container className='d-flex justify-content-evenly'>
                <img alt='face' src={face} width={'500px'} style={{margin: 'auto'}}/>

                <div className='text-light d-flex flex-column justify-content-center' style={{fontWeight:'bold', fontSize: 'large'}}>
                    <p>HI, I'M DEANDRE LOUIS</p>
                    <p>FULL STACK WEB DEVELOPER</p>
                    <p>DIGITAL ARTIST</p>
                </div>

            </Container>
        </div>
        </>
      );
}

export default Home;