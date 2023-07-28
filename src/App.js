import './App.css';
import Container from 'react-bootstrap/Container';
import Header from './Components/header';
import {Route, Routes, useNavigate} from 'react-router-dom'
import Home from './Components/home';
import { useState, useEffect } from 'react';
import { Button , ToggleButton, ToggleButtonGroup} from 'react-bootstrap';
import Background from './Components/background';


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
