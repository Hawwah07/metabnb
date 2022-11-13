// import logo from './logo.svg';
import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
// import Popup from './components/PopUp';
import { BrowserRouter as Router, Routes, Route}
    from 'react-router-dom';
import Home from './pages/Home';
import Community from './pages/Community';
import Nfts from './pages/Nfts';
import Placetostay from './pages/Placetostay';
// import Contact from './pages/contact';
// import { useState } from 'react';


function App() {
//     const [isOpen, setIsOpen] = useState(false);
 
//   const togglePopup = () => {
//     setIsOpen(!isOpen);
//   }
return (
    <>

    <Router>
    <Navbar />
    <Routes>
        <Route  path='/metabnb'  element={<Home />} />
        <Route path='/place-to-stay' element={<Placetostay/>} />
        <Route path='/Nfts' element={<Nfts/>} />
        <Route path='/community' element={<Community/>} />
        {/* <Route path='/sign-up' element={<SignUp/>} /> */}
    </Routes>
    </Router>
    
    </>
)


};
 

  
export default App;
