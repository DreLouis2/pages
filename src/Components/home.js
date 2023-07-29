import { Container } from 'react-bootstrap';
import face from './../Images/face.png'
import Background from './background';



function Home() {


    return (
        <>
        <div className='d-flex flex-row my-5' style={{position: 'relative'}}>

            <div className='d-flex align-items-center' style={{width: '100%', textAlign: 'center',  flex: '2'}}>

                <div className='d-flex flex-column justify-content-start' style={{textAlign: 'left', fontWeight: 'bold'}}>
                    <h1 className='py-1' style={{fontWeight: 'bold'}}>Dre Louis</h1>
                    <h5 className=''>Full Stack Web Developer & Digital Artist</h5>
                    <p className='py-2'>I build user-friendly and accessible digital experiences for the web.</p>
                    <div></div>
                </div>

            </div>
                
            <div className='d-flex justify-content-start' style={{flex: '1'}}>
            </div>

        </div>

        
        <div className='my-5'>
                <h6>About</h6>

                <p>
                Hey, my name is DeAndre "Dre" Louis and I'm a recently graduated Web Developer with 6+ years of experience in client relations. I want to combine my experience in client relations and customer service with my newly acquired skills to create digital experiences that simplify daily life for consumers everywhere.                  
                </p>
        </div>

        <div className='my-5 py-2'>
                <h6>Experience</h6>

            <div className='d-flex flex-column'>
                <div className='d-flex'>
                    <div style={{flex: 2}}>
                        <p>January 2019 - Present</p>
                    </div>
                    <div style={{flex: 4}}>
                        <ul>
                            <li>Resolved escalated customer and client issues regarding medical claims, medical authorizations, and group benefit limits.</li>
                            <li>Maintained a tracker to ensure accurate statistics were reported to clients. </li>
                            <li>Worked with internal teams to ensure appropriate information was reflected within client databases. </li>
                            <li>Provided timely updates on escalated issues to both internal and external clients. </li>
                        </ul>
                        {/* <div className='d-flex'>
                            <div style={{height:  '30px', width: '50px', color: 'blue', textAlign: 'center', borderRadius: '10%', border: 'solid 1px blue'}}>
                                <p style={{color: 'blue'}}>hi</p>
                            </div>
                        </div> */}
                    </div>
                </div>
            </div>

        </div>

        </>
      );
}

export default Home;