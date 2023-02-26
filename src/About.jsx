import React from 'react';
import styled from 'styled-components';
import { useProductContext } from './Context/ProductContext';
import Footer from './Footer';
import Header from './Header';
import HeaderImage from './HeaderImage';

const About = () => {
  const {featureProduct} = useProductContext();
  console.log(featureProduct);
  return (
    <Wrapper>

      <Header />
      <HeaderImage />

      <div className="about">
        <h2 className="heading" data-aos="fade-down">
            About Sustainable Products..
        </h2>
        <div className="about_Content_1">
        It’s high time for all of us to think about our impression and capacity to lessen the waste and its impacts on the climate. This must be finished by settling on a responsible choice of utilizing eco-friendly products. Earthly Eco-friendly products like bamboo toothbrushes, bamboo straws, plant-based coffee cups, and many sustainable products are items that are not unsafe to the climate. These are items produced using sustainable and organic raw materials. Earthly products are of the best quality and in the best designs. What’s more, it’s shockingly easy to roll out sure improvements to your way of life just by sorting out where to begin. Rather than utilizing a plastic cup, trade it for eco-friendly cups and eco-friendly containers. Earthly organic products are the most affordable option in the market. The other alternatives are expensive and lack quality.
        </div>

        <div className="about_Content_2">
          Enter Earthly, a spot for businesses that need to be a part of the green movement. We do an amazing job to give you the information and alternative sustainable products for your cafes and food business. Earthly has a fair trade policy for all business deals. You have the right to place orders for sustainable products that go with your budget and business. We’re endeavoring to set new principles, increase present expectations, and review what is useful for your business and our planet. Each move you make as a business is a chance to be better. When you shop at Earthly, you add to a superior future for every one of us. So now you know a superior method to shop sustainable products, and join the development beneath! We offer a variety of biodegradable options like biodegradable cups, biodegradable containers, organic toothbrushes and many more to choose from.
        </div>
      </div>

      <Footer />
    </Wrapper>
  )
}

export default About

const Wrapper = styled.section`
.about{
  
}
.heading{
  text-align:center;
  margin:3.2rem 0rem;
  color: cadetblue;
  font-family: fantasy;
  font-weight: 800;  
  font-size:2.4rem;
}
.about_Content_1{
  max-width:100%;
  width:70%;
  margin: 2rem auto;
  font-size:1.4rem;

  text-align: center;
  line-height: 1.875em;
}
.about_Content_2{
  font-size:1.4rem;
  max-width:100%;
  width:70%;
  margin: 2rem auto;
  text-align: center;
  line-height: 1.875em;
}


${'' /* responsive */}

@media (max-width: 880px) {
  .about_Content_1 , .about_Content_2{
    width:90%;
  }
}
@media (max-width: 500px) {
  .about .heading{
    font-size:1.8rem;
  }
  .about_Content_1 , .about_Content_2{
    font-size:1rem;
  }
}
@media (max-width: 380px) {
  .about .heading{
    font-size:1.4rem;
  }
}
@media (max-width: 280px) {
  .about .heading{
    font-size:1rem;
  }
}
`;