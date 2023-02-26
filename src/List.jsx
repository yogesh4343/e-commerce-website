import React from 'react'
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import { useProductContext } from './Context/ProductContext';

const List = () => {

  const {allProduct} = useProductContext();


   const MapCont = allProduct.map(( curEl , ind ) => {

    return (
      <NavLink to={`/page/${curEl.id}`}  style={{textDecoration: "none" , color:"black",}}        key={curEl.id}  >

        <Wrapper style={{ marginTop: "1rem"}}>
        <div className="main">
              <div className="left">

                <img className="img" src={curEl.images[3]} alt="images" />
              </div>
              <div className="right">
                <p className="heading"> {curEl.productName}  </p>
                <p className="price"> ₹ {curEl.price } </p>
                <p className="desc"> { curEl.description }</p>
                <button className="btn btn-primary btn-sm"> Show More </button>
              </div>
            </div>
      </Wrapper>
    </NavLink>
  )
})
  return MapCont;
}

export default List

const Wrapper = styled.section`
  .main {
    max-width:100%;
    width: 90%;
    background-color: #fff;
    padding: 12px;
    gap: 1rem;
    box-shadow: 4px 6px 10px grey;
    border-radius: 12px;
    margin-top: 2rem;
  }
  .img {
    width: 22rem;
    height: 18rem;
  }
  .left {
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .heading {
    font-size: 30px;
    margin-bottom: 5px;
  }
  .right {
    margin: 12px 0px;
    width: 60%;
  }

  ${"" /* responsive */}

  @media screen and (max-width: 1450px) {
    .img {
      width: 18rem;
    }
    .desc {
      font-size: 15px;
    }
    .main {
      gap: 1rem;
    }
    .right {
      padding: 8px;
    }
    .heading {
      font-size: 25px;
      margin-bottom: 5px;
    }
  }
  @media screen and (max-width: 1300px) {
    .img {
      width: 16rem;
      height: 12rem;
    }
    .main {
      padding: 5px;
    }
  }
  @media screen and (max-width: 1170px) {
    .img {
      width: 14rem;
      height: 17rem;
    }
    .heading {
      font-size: 22px;
      margin-bottom: 5px;
    }
  }
  @media screen and (max-width: 1000px) {
    .img {
      width: 12rem;
      ${'' /* height: 9rem; */}
    }
    .price {
      margin: 0px 0px 8px 0px;
    }
  }
  @media screen and (max-width: 850px) {
    .img {
      width: 10rem;
      ${'' /* height: 8rem; */}
    }
  }
  @media screen and (max-width: 550px) {
    .img {
      width: 8rem;
      ${'' /* height: 6rem; */}
    }
    .heading {
      font-size: 14px;
    }
    .price {
      font-size: 12px;
    }
    .desc {
      font-size: 12px;
    }
  }
`;