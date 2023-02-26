import React, { useState } from 'react'
import styled from 'styled-components'
import Header from './Header';
import { BsListCheck, BsGridFill } from "react-icons/bs";
import Grid from './Grid';
import List from './List';
import { useProductContext } from './Context/ProductContext';
import Footer from './Footer';

const Product = () => {

  const {allProduct} = useProductContext(); 
  // console.log(featureProduct);
    const[grid , setGrid] = useState(true);


    const GridFunc = () => {
        setGrid(true);
    }
    const ListFunc = () => {
        setGrid(false);
    }

  return (
    <Wrapper>
        <Header />
        <div className="leftRight">
        {/* <div className="leftContainer"> Filter  </div> */}
        {/* <div className="leftContainer">  </div> */}

        <div className="rightContainer">
          <div className="rightContainerTop">
            <div className="left">
              <div className="gridStyle" onClick={GridFunc}> <BsGridFill  className="gridStyleInner"/> </div>
              <div className="listStyle" onClick={ListFunc}> <BsListCheck  className="listStyleInner"/> </div>
            </div>

            <div className="middle">
              <strong className="length"> {allProduct.length} </strong> <span>items are available, Do Continue : )</span>
              {/* <strong className="length"> {all_products.length} </strong> are available */}
            </div>
            
            {/* <div className="right">   DropDown </div> */}
            {/* <div className="right">   <DropDown /> </div> */}
          </div>

          <div className="rightContainerLower">
                {/* <div className="gridContainer"> <> {grid === true ? <Grid /> : <List/> } </> </div> */}
                {grid === true ? (
              <>  <div className="gridContainer">  <Grid />  </div> </> ) : ( <div className="list"> <List /> </div>
            )}
          </div>
        </div>
      </div>

      <Footer />
    </Wrapper>
  )
}

export default Product

const Wrapper = styled.section`
  .leftRight {
    display: flex;
    justify-content: space-around;
    margin: 1rem;
  }
  ${"" /* .leftContainer{width:20%; margin:1rem 0px 1rem 12px;   } */}
  .leftContainer {
    width: 25%;
    margin: 0rem 0px 1rem 6px;
  }
  .rightContainer {
    width: 100%;
    margin-top: 5rem;
  }
  .rightContainerTop {
    display: flex;
    justify-content: space-around;
    text-align:center;
    align-items:center;
  }
  .left {
    display: flex;
    gap: 1rem;
    font-size: 19px;
    cursor: pointer;
  }
  .rightContainerLower {
    margin: 12px 0px 12px 0px;
    display: flex;
    flex-direction: column;
    max-width: 88%;
    margin: 3rem auto;
  }
  .list {
    margin: 0px 0px 12px 0px;
    display: flex;
    flex-direction: column;
  }
  .gridContainer {
    display: flex;
    gap: 0.5rem;
    flex-wrap: wrap;
    margin: auto;
    text-align: center;
    display: flex;
    justify-content: center;
  }

  .length{color:forestgreen; 
    font-size: 18px;
};

  .main {
    display: flex;
    gap: 1rem;
    flex-wrap: wrap;
    margin: auto;
    text-align: center;
    display: flex;
    justify-content: center;
  }

  .grid {
    width: 17rem;
    box-shadow: 4px 10px 12px grey;
    padding: 12px;
    border-radius: 12px;
    margin: 1rem;
  }
  .gridStyle , .listStyle{
    color:green;
    width:3.2rem;
    font-size:32px;
    transition: 1s ease-out ;
  }

  .gridStyle:hover , .listStyle:hover{
    transform: scale(1.4);
  }

  ${"" /* responsive */}

  @media screen and (max-width: 1100px) {
    .leftRight {
      margin: 2rem 1rem;
    }
  }
  @media screen and (max-width: 1000px) {
    .leftContainer {
      width: 30%;
    }
  }
  @media screen and (max-width: 850px) {
    .leftContainer {
      width: 24%;
    }
  }
  @media screen and (max-width: 680px) {
    .leftRight {
      display: flex;
      flex-direction: column;
    }
  }
  @media screen and (max-width: 550px) {
    .leftRight {
      margin: 2rem 0.5rem;
    }
  }
  @media only screen and (max-width: 680px) {
    .leftContainer{width:80%;     margin: 0rem 0px 1rem 0px; margin:auto; }
}
  @media only screen and (max-width: 540px) {
    .leftContainer{width:100%; margin: 0rem 0px 1rem 0px; margin:auto;    }
    .middle .length{font-size: 16px;};
    .middle span{font-size: 12px;};

    .gridStyle, .eXflsh .listStyle {
    width: 1.2rem;
    font-size: 25px;
    }
    .listStyle {
    width: 1.2rem;
    font-size: 25px;
    }
}

`;