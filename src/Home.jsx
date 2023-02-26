import React from 'react'
import styled from 'styled-components'
import FeatureProducts from './FeatureProducts';
import Grid from './Grid';
import Header from './Header'
import HeaderImage from './HeaderImage'
import Slider from "./Slider";
import Contact from "./Contact";
import SlidingText from './SlidingText';
import Footer from './Footer';
import Service from './Service';
import HeaderLandingImage from './HeaderLandingImage';
import Comments from './Comments';


const Home = () => {
  return (
    <Wrapper>
        <Header />
        <HeaderLandingImage   />
        <SlidingText />
        {/* <HeaderImage /> */}
        <FeatureProducts />
        <Service />
        <Comments />
        <Slider />
        <Contact />

        <Footer />
    </Wrapper>
  )
}

export default Home


const Wrapper = styled.section`

  `;