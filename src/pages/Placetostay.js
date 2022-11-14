import React from 'react';
import ImageList1 from "../images/imagelist1.png";
import ImageList2 from "../images/imagelist2.png";
import ImageList3 from "../images/imagelist3.png";
import ImageList4 from "../images/imagelist4.png";
import ImageList5 from "../images/imagelist5.png";
import ImageList6 from "../images/imagelist6.png";
import ImageList7 from "../images/imagelist7.png";
import ImageList8 from "../images/imagelist8.png";
import ImageList9 from "../images/imagelist9.png";
import ImageList10 from "../images/imagelist10.png";
import ImageList11 from "../images/imagelist11.png";
import ImageList12 from "../images/imagelist12.png";
import ImageList13 from "../images/imagelist13.png";
import ImageList14 from "../images/imagelist14.png";
import ImageList15 from "../images/imagelist15.png";
import ImageList16 from "../images/imagelist16.png";
import Setting from "../images/setting.png";
import Footer from "../components/Footer"

  
const Placetostay = () => {
  return (
    <div class="container-stays">
    <div className="top-bar" >
      <p>Resturant</p>
      <p>Cottage</p>
      <p>Castle</p>
      <p>fantast city</p>
      <p>breach</p>
      <p>Carbins</p>
      <p>Off-grid</p>
      <p>Farm</p>
      <button type="submit" class="location-btn"> Location <img src={Setting} alt='setting' /> </button>
      
    </div>
    <div className="img-list-body">
        <div className="img-list-body-one">
    <img src={ImageList5} alt="Five" />
        <img src={ImageList6} alt="Six" />
        <img src={ImageList7} alt="Seven" />
        <img src={ImageList8} alt="Eight" />
        </div>
        <div>
        <img src={ImageList1} alt="One" />
        <img src={ImageList2} alt="Two" />
        <img src={ImageList3} alt="Three" />
        <img src={ImageList4} alt="Four" />
        </div>
        <div>
        <img src={ImageList9} alt="One" />
        <img src={ImageList10} alt="Two" />
        <img src={ImageList11} alt="Three" />
        <img src={ImageList12} alt="Four" />
        </div>
        <div>
        <img src={ImageList13} alt="One" />
        <img src={ImageList14} alt="Two" />
        <img src={ImageList15} alt="Three" />
        <img src={ImageList16} alt="Four" />
        </div>
        </div>

        <Footer />
    </div>
  );
};
  
export default Placetostay;