import './App.css';
import Container from 'react-bootstrap/Container';
import Header from './Components/header';
import {Route, Routes, useNavigate} from 'react-router-dom'
import Home from './Components/home';
import { useState, useEffect } from 'react';
import { Button , ToggleButton, ToggleButtonGroup} from 'react-bootstrap';
import Background from './Components/background';
import BackgroundWhite from './Components/backgroundWhite';
import face from './Images/face.png'



function App() {

  const[theme, setTheme] = useState('black')
  

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
  
  const [comp, setComp] = useState('home')

  useEffect(() => {
    console.log(comp)
  }, [comp]);
  

  return (
    <div className='theme' style={{top: '0px', right: '0px', bottom: '0px', left: '0px'}}>
    {theme === 'white'? <BackgroundWhite/>  : <Background/>}
    <Container>
    
    <Header
    theme={theme}
    setComp={setComp}
    />

    <Routes>
      <Route  exact path='/pages/index.html/home' element={<Home/>}>
      </Route>
    </Routes>

    </Container>
    <ToggleButtonGroup 
        type="radio" 
        name="options" 
        defaultValue={'white'}
        style={{position:'sticky', top:0,  }}>
                    <ToggleButton id="tbg-radio-1" value={'white'} style={{height: '40px'}} onClick={toggleLight}>
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
