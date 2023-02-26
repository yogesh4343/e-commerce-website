// import React, { useEffect } from 'react';
import React from 'react';
import styled from 'styled-components';
import Carousel from 'react-bootstrap/Carousel';
// import AOS from "aos";
// import "aos/dist/aos.css";



const Slider = () => {

  // useEffect(() => {
  //   AOS.init({
  //     offset:300,
  //     duration:1000,
  //   });
  //   AOS.refresh();
  // }, []);
  
  const main = {
    margin: "1rem 0rem 8rem 0rem",
  }


  return (
    <Wrapper style={main}>
      <Carousel>

      <Carousel.Item>
        {/* <img className="d-block w-100"  id="img" src="./Image/slider5.png" alt="First slide" /> */}
        <img className="d-block w-100" id="img"  src="https://cdn.shopaccino.com/ecofriendlystationary/slideshows/slider-409777_l.jpg?v=446" alt="Second slide" />
        <Carousel.Caption>
          {/* <p className="slider1_1" data-aos="fade-right" >BECOME</p> */}
          {/* <p className="slider1_2" data-aos="fade-left" >SUSTAINABLE</p> */}
        </Carousel.Caption>
      </Carousel.Item>

{/* ===== */}

      <Carousel.Item >
        {/* <img className="d-block w-100" id="img"  src="./Image/slider6.png" alt="Second slide" /> */}
        <img className="d-block w-100"  id="img" src="https://cdn.shopaccino.com/ecofriendlystationary/slideshows/whatsapp-image-2020-06-17-at-45449-pm-1-817635_l.jpeg?v=446" alt="First slide" />

        <Carousel.Caption className="second">
          <div className="slider_2">
          {/* <span className="slider2_1"  data-aos="fade-top">Living  <span>SUSTAINABLY</span>  </span> */}
          {/* <p  className="slider2_2"  data-aos="fade-bottom">Should'nd Be Expensive</p> */}
          </div>
        </Carousel.Caption>
      </Carousel.Item>

{/* ===== */}

      <Carousel.Item>
        {/* <img className="d-block w-100"  id="img" src="https://www.itmeriten.se/wp-content/uploads/slider2/image-slider-with-thumbnail2.jpeg" alt="Third slide" /> */}
        <img className="d-block w-100"  id="img" src="https://cdn.shopaccino.com/ecofriendlystationary/slideshows/for-homepage-835634_l.jpg?v=446" alt="Third slide" />

        <Carousel.Caption>
          {/* <h3>Third slide label</h3> <p> Praesent commodo cursus magna, vel scelerisque nisl consectetur. </p> */}
        </Carousel.Caption>
      </Carousel.Item>

{/* ===== */}
      
    </Carousel>
    </Wrapper>
  )
}

export default Slider

const Wrapper = styled.section`
#img{
  height: 40rem;
    background-size: cover;
}
.slider1_1{
    font-size:4rem;
    font-family: 'Roboto Slab', serif;
    position: absolute;
    top: -13rem;
}
.slider1_2{
    font-size:4rem;
    font-family: 'Roboto Slab', serif;
    position: absolute;
    top: -7rem;
    left: -0.4rem;
    color:green;
    font-weight:800;
    opacity:10;
}

.slider_2{
  display:flex;
  gap:1rem;
  color:black;
    font-weight:800;
    font-size:1.4rem;
    justify-content:space-around;
    max-width:100%;
    width:80%;
    margin:auto;
  font-family: 'Roboto Slab', serif;
  width: 100%;
  opacity:10;
  cursor:pointer;
}

.slider2_1:hover , .slider2_2:hover{
  color:violet;
  transition:all .4s ease-in;   
  font-weight:900;
}

.slider2_1{
  opacity:10;
}

${'' /* responseive  */}

@media (max-width: 800px) {
  #img{
  height: 20rem;
}
}
@media (max-width: 500px) {
  #img{height: 17rem;}
  }

@media (max-width: 997px) {
  .slider_2{    font-size:1.3rem; 
    justify-content: space-between;
  }
}

@media (max-width: 700px) {
  .slider_2{    font-size:1.3rem; 
    justify-content: space-between;
  }
  .slider2_1{
    width: fit-content;
    font-size: 1.1rem;
  }
  .slider2_2{
    width: fit-content;
    font-size: 1.1rem;
  }
}

@media (max-width: 570px) {
  .slider2_1{
    font-size: .8rem;
  }
  .slider2_2{
    font-size: .8rem;
  }

}

@media (max-width: 416px) {
  .slider2_1{
    font-size: .6rem;
  }
  .slider2_2{
    font-size: .6rem;
  }

}

@media (max-width: 1136px) {
  .slider1_1{
    font-size:3.4rem;
  }
  .slider1_2{
    font-size:3.4rem;
  }
}

@media (max-width: 890px) {
  .slider1_1{
    font-size:2.5rem;
    top: -12rem;
  }
  .slider1_2{
    font-size:2.5rem;
  }
}

@media (max-width: 700px) {
  .slider1_1{
    font-size:2rem;
    top:-7rem;
  }
  .slider1_2{
    font-size:2rem;
    top:-4rem;
  }
}

@media (max-width: 540px) {
  .slider1_1{
    font-size:1.8rem;
    top:-7rem;
  }
  .slider1_2{
    font-size:1.8rem;
    top:-4rem;
  }
}



`;