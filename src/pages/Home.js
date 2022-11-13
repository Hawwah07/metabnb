import React from "react";
// import Navbar from "../components/Navbar"
import Footer from "../components/Footer";
// import Image3 from "../images/image3.png";
// import Image4 from "../images/image4.png";
// import Image5 from "../images/image5.png";
// import Image6 from "../images/image6.png";
// import Image7 from "../images/image7.png";
// import Image8 from "../images/image8.png";
// import Image9 from "../images/image9.png";
import LogoTilt from "../images/logo_tilt.png";
import Wolf from "../images/wolf.png";
import Boat from "../images/boat.png";
import ImageList1 from "../images/imagelist1.png";
import ImageList2 from "../images/imagelist2.png";
import ImageList3 from "../images/imagelist3.png";
import ImageList4 from "../images/imagelist4.png";
import ImageList5 from "../images/imagelist5.png";
import ImageList6 from "../images/imagelist6.png";
import ImageList7 from "../images/imagelist7.png";
import ImageList8 from "../images/imagelist8.png";
import ImageGroup1 from "../images/imagegroup1.png";
import ImageGroup2 from "../images/imagegroup2.png";


const Home = () => {
  return (
    <div>
      <div className="heading">
      <div className="heading_box">
      <div className="home-heading">
        <h1 className="home-heading-h1">
          Rent a <span className="heading-text">Place</span> away from <span className="heading-text">Home</span> in the <span className="heading-text">Metaverse</span>
        </h1>
        <br />
        <p className="home-heading-p">
          we provide you access to luxury and affordable houses in the
          metaverse, get a chance to turn your imagination to reality at your
          comfort zone.
        </p>
      </div>
      <div className="search-bar">
        <input className="input-search" type="text" placeholder="Search for location" />
        <a href="/" className="search-bar-a"> Search </a>
      </div>
      </div>
      


      <div className="heading-img">
        {/* <img src={Image3} alt="three" className="heading-img-one"/>
        <img src={Image4} alt="Four" className="heading-img-two"/>
        <img src={Image5} alt="five" className="heading-img-three"/>
        <img src={Image6} alt="six" className="heading-img-four"/> */}
      <img src={ImageGroup1} alt="six" className="heading-img-group"/>
      </div>
      </div>
      <div className="mid-bar">
        <img src={LogoTilt} alt="MB Token" />
        <img src={Wolf} alt="METAMASK" />
        <img src={Boat} alt="Open Sea" />
      </div>

      <div className="body-div">
        <h1 className="body-heading">Inspiration for your next adventure</h1>
       <div className="body-img-div">
        <img src={ImageList1} alt="One" />
        <img src={ImageList2} alt="Two" />
        <img src={ImageList3} alt="Three" />
        <img src={ImageList4} alt="Four" />
        <img src={ImageList5} alt="Five" />
        <img src={ImageList6} alt="Six" />
        <img src={ImageList7} alt="Seven" />
        <img src={ImageList8} alt="Eight" />
      </div>
      </div>
      <div className="home-end">
        <div className="home-end-text-div">
          <h1>Metabnb NFTs</h1>
          <p>
            Discover our NFT gift collection. Loyal customers gets amazing gift
            cards which are traded as NFTs. These NFTs gives our customer access
            to loads of our exclusive services.
          </p>
        <div>
          <a className="home-end-button" href="/"> Learn more </a>
        </div>
        </div>
        <div className="end-image-div">
          {/* <img src={Image9} alt="Nine" className="end-img-three"/>
          <img src={Image7} alt="Seven" className="end-img-one"/>
          <img src={Image8} alt="Eight" className="end-img-two"/> */}
          <img src={ImageGroup2} alt="Eight" className="end-img-group"/>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Home;
