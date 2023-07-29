import { Container } from 'react-bootstrap';
import face from './../Images/face.png'
import Background from './background';


function Home() {
    return (
        <>


        <div className='d-flex flex-row' style={{position: 'relative'}}>
                <div className='d-flex justify-content-end' style={{flex: '1'}}>
                    <img alt='face' src={face} width={'50%'}/>
                </div>
                <div className='d-flex align-items-center' style={{width: '100%', margin:  '0', textAlign: 'center',  flex: '1'}}>
                    <div className='d-flex flex-column justify-content-start' style={{fontWeight:'bold', fontSize: 'x-large', textAlign: 'left'}}>
                        <p>HI, I'M DEANDRE LOUIS</p>
                        <p>FULL STACK WEB DEVELOPER</p>
                        <p>DIGITAL ARTIST</p>
                    </div>
                </div>
        </div>
        </>
      );
}

export default Home;