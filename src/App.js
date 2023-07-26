import logo from './logo.svg';
import './App.css';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Header from './Components/header.js';
import {Route, Routes, useNavigate} from 'react-router-dom'
import Background from './Components/background'

function App() {

  const navigate = useNavigate();
  
  return (
    <>
    <Background/>
    <Header/>

    <Container>
    <Routes>
                  <Route exact path="/login" element={() => navigate("/")} />
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
    </>
  );
}

export default App;
