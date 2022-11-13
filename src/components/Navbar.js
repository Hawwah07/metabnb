import React from "react";
import { Link } from 'react-router-dom';
import Toplogo from "../images/toplogo.png"
import Secondwolf from "../images/secondwolf.png"
import Buttonpic from "../images/buttonpic.png"
import { useState } from 'react';
import Popup from './PopUp';
  
const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
 
  const togglePopup = () => {
    setIsOpen(!isOpen);
  }
  return (
    <>
      <nav id="navbar">
      <img src={Toplogo} alt="Metabnb Logo" id="toplogo"/>
        <ul id="navlink">
          <li className="home">
          <Link to="/">
            Home
          </Link>
          </li>
          <li className="place">
          <Link to="/place-to-stay">
            Place to stay
            </Link>
            </li>
            <li className="nfts">
          <Link to="/nfts">
            NFTs
            </Link>
            </li>
            <li className="community">
          <Link to="/community">
            Community
            </Link>
            </li>
        </ul>
        <input id="btn"
        //  href="/" 
        value="Connect Wallet"
        onClick={togglePopup}
        />
      </nav>
      {isOpen && <Popup
      content={<>
        <h3>Connect Wallet</h3>
        <hr />
        <p>Choose your preferred wallet:</p>
        <a href="/" id="popup-btn"><img src={Secondwolf} alt="texting" /></a>
        <a href="/" id="popup-btn"><img src={Buttonpic} alt="texting" /></a>
      </>}
      handleClose={togglePopup}
    />}
    </>
  );
};
  
export default Navbar;