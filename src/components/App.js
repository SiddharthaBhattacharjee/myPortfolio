import React from 'react';
import { BrowserRouter, Routes, Route, NavLink} from 'react-router-dom';
import Home from './Home';
import About from './About';
import Projects from './Projects';
import NoPage from './NoPage';
import Contact from './Contact';
import './App.css';

function App() {
    return (
        <div className='main'>
            <div className="sub" style={{width:"95%",height:"92%", backgroundColor:"#1E2D3D"}}>
                <BrowserRouter>
                    <nav className='navbar'>
                        <div className='innerNavbar'>
                            <p className="myName">My Portfolio</p>
                            <NavLink to="/" className='Link' activeClassName="active">Home</NavLink>
                            <NavLink to="/about" className='Link' activeClassName="active">About-me</NavLink>
                            <NavLink to="/projects" className='Link' activeClassName="active">Projects</NavLink>
                        </div>
                        <NavLink to="/contact" className='Linkouter' activeClassName="active">Contact Me</NavLink>
                    </nav>
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/about" element={<About />} />
                        <Route path="/projects" element={<Projects />} />
                        <Route path="/*" element={<NoPage />} />
                        <Route path="/contact" element={<Contact />} />
                    </Routes>
                </BrowserRouter>
            </div>
        </div>

    );
}

export default App;