import React from 'react'
import styled from 'styled-components'
import { useProductContext } from './Context/ProductContext';
import SingleProduct from './SingleProduct';

const FeatureProducts = () => {
  const {featureProduct} = useProductContext();

  // console.log(featureProduct);
  return (
    <>
    <Wrapper>
        <div>
          <div className="mainContainer">
            <div className="container">
              <div className="check">
                <h5 className="text-success " >Check Now </h5>
              </div>
              <div className="services">
                <h1 className="text-primary" >Our Featured Products</h1>
              </div>
              <div className="map">

                {/* map  */}
                  {featureProduct.map((curEl,ind) => {
                    {/* console.log(curEl); */}
                  return <SingleProduct {...curEl}  key={ind} />
                  })}

              </div>
            </div>
          </div>
        </div>
      </Wrapper>
    </>
  )
}

export default FeatureProducts

const Wrapper = styled.section`
  .mainContainer {
    width: 100%;
    padding: 2rem 0rem;
    background-color: rgba(234, 234, 234, 0.43);
    margin-bottom: 2rem;
    margin: 4rem 0rem;
  }

  .container {
    width:100%;
    margin: 0rem auto;
    padding: 2rem 20px;
  }

  .map {
    display: flex;
    margin: 0rem 0rem;
    justify-content: space-evently;
    justify-content: center;
    flex-wrap: wrap;



    ${'' /* display: flex;
    flex-direction: row;
    width: max-content;
    scroll-behavior: smooth;
    overflow-x: hidden; */}
  }

  @media screen and (max-width: 1400px) {
    .container {
      width: 66%;
    }
  }
  @media screen and (max-width: 1200px) {
    .container {
      width: 75%;
    }
    .container {
    width: 80%;
    }
  }

  @media screen and (max-width: 1048px) {
  .map{width:100%; }
}


  @media screen and (max-width: 990px) {
    .container {
      width: 100%;
      padding: 2rem 0px;
      max-width: 90vw;
    }
  }
  @media screen and (max-width: 870px) {
    .container {
       max-width: 95vw;
      text-align: center;
    }
    .map {
      display: flex;
      flex-wrap: wrap;
      margin: 0px auto;
      width: 100%;
    }
  }
  @media screen and (max-width: 770px) {
    .container {
      width: 100vw;
      text-align: center;
    }
    .map {
      display: flex;
      flex-wrap: wrap;
      margin: 0px auto;
      width: 100%;
    }
  }`;