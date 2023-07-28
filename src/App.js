import './App.css';
import Container from 'react-bootstrap/Container';
import Header from './Components/header';
import {Route, Routes, useNavigate} from 'react-router-dom'
import Home from './Components/home';
import { useState, useEffect } from 'react';
import { Button , ToggleButton, ToggleButtonGroup} from 'react-bootstrap';
import Background from './Components/background';
import face from './Images/face.png'



function App() {

  const[theme, setTheme] = useState('white')
  

  const navigate = useNavigate();
  const toggleLight = () => {
    if (theme === 'black'){
      setTheme('white');
    }
  };

  const toggleDark = () => {
    if (theme === 'white') {
      setTheme('black');
    } 
  };

  useEffect(() => {
    document.body.className = theme;
  }, [theme]);
  
  return (
    <div className='theme' style={{backgroundColor: '', top: '0px', right: '0px', bottom: '0px', left: '0px'}}>
    <Background/>
    <Container>
    
    <Header
    theme={theme}
    />

        <div className='d-flex flex-column' style={{position: 'relative'}}>
            <Container className='d-flex justify-content-evenly'>
                <img alt='face' src={face} width={'500px'} style={{margin: 'auto'}}/>

                <div className='d-flex flex-column justify-content-center' style={{fontWeight:'bold', fontSize: 'large'}}>
                    <p>HI, I'M DEANDRE LOUIS</p>
                    <p>FULL STACK WEB DEVELOPER</p>
                    <p>DIGITAL ARTIST</p>
                </div>

            </Container>
        </div>
    
    <Routes>
                  <Route exact path="/home" element={<Home/>}/>
                  <Route exact path="/register" element={() => navigate("/")} />
                  <Route
                    element={({ location }) => {
                      return (
                        <div
                          style={{
                            padding: "50px",
                            width: "100%",
                            textAlign: "center",
                          }}
                        >
                          The page <code>{location.pathname}</code> could not be
                          found.
                        </div>
                      );
                    }}
                  />
                </Routes>

    </Container>
    <ToggleButtonGroup 
      type="radio" 
      name="options" 
      defaultValue={'white'}
      style={{position:'sticky', bottom:5}}>
                  <ToggleButton id="tbg-radio-1" value={'white'} onClick={toggleLight}>
                    ☼
                  </ToggleButton>
                  <ToggleButton id="tbg-radio-2" variant='outline-dark' value={'black'} onClick={toggleDark}>
                  ☾
                  </ToggleButton>
    </ToggleButtonGroup>
    </div>
    
  );
}

export default App;
