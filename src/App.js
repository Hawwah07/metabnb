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
{/* <input
      type="button"
      value="Click to Open Popup"
      onClick={togglePopup}
    /> */}
    <Router>
    <Navbar />
    <Routes>
        <Route  path='/'  element={<Home />} />
        <Route path='/place-to-stay' element={<Placetostay/>} />
        <Route path='/Nfts' element={<Nfts/>} />
        <Route path='/community' element={<Community/>} />
        {/* <Route path='/sign-up' element={<SignUp/>} /> */}
    </Routes>
    </Router>
    {/* {isOpen && <Popup
      content={<>
        <b>Design your Popup</b>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
        <button>Test button</button>
      </>}
      handleClose={togglePopup}
    />} */}
    </>
)


};
 

  
export default App;
