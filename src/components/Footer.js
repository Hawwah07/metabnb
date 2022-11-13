import React from "react";
import BottomLogo from "../images/bottomlogo.png";
import Facebook from "../images/facebook.png";
import Twitter from "../images/twitter.png";
import Instagram from "../images/instagram.png";


const Footer = () => {
    return (
        <div id="bottom">
            <div className="bottom-img">
            <div className="bottom-img-one">
                <img src={BottomLogo} alt="Twenty" />
            </div>
            <div className="bottom-img-two">
            <img src={Facebook} alt="Twenty" />
            <img src={Twitter} alt="Twenty-one" />
            <img src={Instagram} alt="Twenty-two" />
            </div>
            <p> &copy 2022 Metabnb</p>
            
            </div>
            <div className="bottom-text">
                <div className="bottom-text-one">
                <ul>
                    <h3>Community</h3>
                    <li>NFT</li>
                    <li>Tokens</li>
                    <li>Landlords</li>
                    <li>Discord</li>
                </ul>
                </div>
                <div className="bottom-text-two">
                <ul>
                    <h3>Places</h3>
                    <li>Castle</li>
                    <li>Farms</li>
                    <li>Beach</li>
                    <li>Learn more</li>
                </ul>
                </div>
                <div className="bottom-text-two">
                <ul>
                    <h3>About us</h3>
                    <li>Reach map</li>
                    <li>Creators</li>
                    <li>Career</li>
                    <li>Contact us</li>
                </ul>
                </div>
            </div>
        </div>
    )};

export default Footer;