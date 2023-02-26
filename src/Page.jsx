import React, { useEffect, useState } from 'react'
import { NavLink, useParams } from 'react-router-dom'
import styled from 'styled-components'
import { useProductContext } from './Context/ProductContext'
import Header from './Header' ;
import { TbTruckDelivery, TbReplace, TbIcons } from "react-icons/tb";
import { GrSecure } from "react-icons/gr";
import Stars from "./Stars";
import { useCartContext } from './Context/CartContext';
import AddToCart from './AddToCart';
import { BsFilePlusFill , BsFileMinusFill } from "react-icons/bs";



let careGuide = "";
let description = "";
let features = [];
let images = [];
let price = [];
let productName = [];
let starRating= "";
let idx= "";



const Page = () => {

    const [img , setImg] = useState(false);
    const {CartButton} = useCartContext();
    
    const {id} = useParams();
    // console.log(id);

    const { SingleProductPageFunction ,singlePageObject} = useProductContext()
    
    // const [careGuide , description ,  features , images , price , productName] = singlePageObject;

    // console.log(singlePageObject);

    for (let i = 0; i < singlePageObject.length; i++) {
        careGuide = singlePageObject[i].careGuide
        description = singlePageObject[i].description
        features = singlePageObject[i].features
        images = singlePageObject[i].images
        price = singlePageObject[i].price
        productName = singlePageObject[i].productName
        starRating = singlePageObject[i].starRating
        idx = singlePageObject[i].id
    }
    // console.log(images);

    const clickLeftImageFunction =(e)=>{
        let srcs = e.target.src;
        console.log("console" , srcs );
        setImg(srcs);
    }

    // Ad to cart sol =====
    const [state,setState] = useState(0);
    
    const minusFunction =()=>{
        // console.log('minus function');
        if (state <= 0) {
            return 0
        }else{
            setState(state - 1);
        }
    }
    const plusFunction =()=>{
        // console.log("plus function");
        setState(state + 1);
    }
    
    
    
    useEffect(() => {
        SingleProductPageFunction(id);
    },[]);
        
        return (
            <Wrapper>
        <Header />

        <div className="main">
                <div className="leftDiv">
                  {/* <h1 className="text-center text-primary">Images</h1> */}

                  <div className="allImagesDiv">
                    {/* left  */}
                    <div className="leftImages">
                      {images.map((curEl,ind) =>{
                        return <div className="left" key={ind} onClick={clickLeftImageFunction}>
                            <img src={curEl} alt="pic" className="pic"/>
                            </div>; 
                        }) }
                    </div>

                    {/* right  */}
                    <div className="rightImages">
                      {/* {<img src={"."+images[0]} alt="right Pic" className="pic"  />} */}
                      {img ? <img src={img} alt="right Pic" className="pic" /> :  <img src={images[0]} alt="right Pic" className="pic" />
}
                    </div>
                  </div>
                </div>

                {/* right  */}
                <div className="rightDiv">
                  <h1 className="title"> {productName}  </h1>

                  {/* <Stars className="stars" stars={singleProduct.stars} /> */}
                  <p> <Stars stars={starRating} /> </p>
                  
                  <p className="rivew"> <p> ({starRating} Customer Review ) </p> </p>

                  <p className="cancelPrice"> MRP : <del> ₹850.00</del> </p>

                  <p className="rivew">Deal Of The Day : ₹ {price} </p>
                  
                  <p className="desc"> Description : {careGuide} </p>

                  <div className="delivery">
                  
                    <div className="first">
                      <div className="icon"> <TbTruckDelivery />  </div>
                      <p className="data">Free Delivery</p>
                    </div>

                    <div className="second">
                      <div className="icon"> <TbReplace /> </div>
                      <p className="data">30 Days Replacement</p>
                    </div>

                    <div className="third">
                      <div className="icon"> <GrSecure /> </div>
                      <p className="data">iStore Delivered</p>
                    </div>

                    <div className="fourth">
                      <div className="icon"> <TbIcons /> </div>
                      <p className="data">2 Years Warranty</p>
                    </div>
                  
                  </div>

                  <hr />

                  <p className="available">
                    Stock : <strong> Limited Stock, Hurry Up!!  </strong>
                  </p>

                  <p className="id">Id : <strong> {idx} </strong></p>

                  <p className="brand">Brand : <strong> Eco Friendly </strong></p>
                




                    {/* <AddToCart /> */}

                    <div className="addToCart">

                    <div className="buttons">
                        <div className="minus" onClick={minusFunction}> <BsFileMinusFill /> </div>
                        <p className="num"> {state} </p>
                        <div className="plus" onClick={plusFunction}> <BsFilePlusFill /> </div>
                    </div>

                    {/* <NavLink to="/cart"><button className="addCart"  onClick={()=>CartButton(description , features , images , price , productName , starRating , careGuide , idx)}> Add To Cart</button></NavLink> */}
                    <NavLink to="/cart"><button className="addCart"  onClick={()=>CartButton(singlePageObject , state )}> Add To Cart</button></NavLink>

                    </div>
                </div>
              </div>


    </Wrapper>
  )
}

export default Page

const Wrapper = styled.section`
  .main {
    max-width: 70%;
    width: 100%;
    margin: 6rem auto;
    display: flex;
  }

  ${"" /* left  */}
  .main {
    gap: 1rem;
  }
  .leftImages {
    margin: 9px auto;
  }
  .left img {
    width: 10rem;
    margin-bottom: 6px;
    height: 10rem;
  }
  .pic{
    box-shadow: 10px 15px 8px -7px rgba(0, 0, 0, 0.75);
  }
  .left{
    ${'' /* height: 9rem; */}
  }
  .rightImages {
    margin: auto;
    ${'' /* margin: 7rem 0rem; */}
  }
  .rightImages img {
    width: 18.7rem;
  }

  ${"" /* right  */}

  .rivew p {font-size: 12px;  margin: 10px auto; }
  .title {
    text-transform: capitalize;
    color:#0D6EFD;
    text-shadow: 2px 2px 5px darkgrey;
  }
  .leftDiv {
    width: 50%;
  }
  .leftDiv h1 {
    text-shadow: 2px 2px 5px darkgrey;
    margin: 10px auto;
  }
  .allImagesDiv {
    margin: auto;
    display: flex;
    height: 100%;
  }
  .rightDiv {
    width: 50%;
  }
  .stars {
    margin: 0px;
    margin: 10px auto;
  }
  ${'' /* .colors{display:flex; gap:.5rem } */}
  .cancelPrice {
    margin: 10px auto;
  }
  .desc{
    margin: 10px auto;
  }
  .delivery {
    display: flex;
    justify-content: space-between;
    gap: 8px;
    text-align: center;
    margin: 2rem 0.6rem;
    flex-flow: nowrap;
    font-size: 14px;
    margin: 10px auto;
  }

  .addCart{
    background-color:#0D6EFD;
    color:white;
    padding:.8rem;
    border:none;
    border-radius:12px;
  }

  .buttons{display: flex; gap:12px; text-align:center; aligh-items:center; margin:12px 0px }
.num{ font-size:22px; }
.plus{font-size:32px; }
.minus{font-size:32px; }
p{margin: auto 0px; }

  ${"" /* responsive  */}

  @media screen and (max-width: 1430px) {
    .delivery {
      font-size: 14px;
    }
  }
  @media screen and (max-width: 1380px) {
    .main {
      max-width: 80%;
    }
  }
  @media screen and (max-width: 1218px) {
    .main {
      max-width: 90%;
    }
    .allImagesDiv {
      margin: auto 8px;
    }
    .rightImages img {
      width: 16rem;
    }
    .delivery {
      font-size: 13px;
    }
  }
  @media screen and (max-width: 1037px) {
    .main {
      max-width: 97%;
      gap: 0.5rem;
    }
    .rightImages img {
      width: 17.5rem;
    }
    .delivery {
      font-size: 13px;
    }
    .leftImages {
      margin: auto 2px;
    }
  }
  @media screen and (max-width: 995px) {
    ${
      "" /* .delivery{flex-wrap:wrap; width:85%; display: flex;
     justify-content: center; } */
    }
    .rightImages img {
      width: 16.5rem;
    }
    .rightDiv {
      font-size: 14px;
    }
  }
  @media screen and (max-width: 885px) {
    .main {
      flex-wrap: wrap;
      max-width: 90%;
    }

    .leftDiv {
      width: 90%;
      margin: 2rem auto;
      font-size: 18px;
    }
    .leftDiv h1 {
      text-align: center;
      width: 100%;
    }

    .rightDiv {
      width: 90%;
      margin: 2rem auto;
      font-size: 18px;
    }
    .rightDiv h1 {
      text-align: center;
      margin-top:4rem;
    }
    .delivery {
      font-size: 15px;
      margin: 10px auto;
    }
    .leftImages img {
      width: 12rem;
    }
    .rightImages img {
      width: 22.5rem;
    }
  }

  @media screen and (max-width: 710px) {
    .leftDiv {
      width: 100%;
    }
    .leftImages img {
      width: 10rem;
    }
    .rightImages img {
      width: 21.5rem;
    }
    .rightDiv {
      font-size: 15px;
    }
  }
  @media screen and (max-width: 590px) {
    .rightImages img {
      width: 16rem;
    }
    .leftImages img {
      width: 8rem;
    }
    .rightDiv {
      font-size: 14px;
    }
    .delivery {
      font-size: 14px;
    }
  }
  @media screen and (max-width: 470px) {
    .rightImages img {
      width: 14rem;
    }
    .leftImages img {
      width: 7rem;
    }
    .delivery {
      font-size: 12px;
    }
  }
  `;