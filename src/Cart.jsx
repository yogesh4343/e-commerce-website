import React from "react";
import styled, { createGlobalStyle } from "styled-components";
import { useCartContext } from "./Context/CartContext";
import Header from "./Header";
import { FaTrash } from "react-icons/fa";
import Cart_Total from "./Cart_Total";
import { Link } from "react-router-dom";
import Footer from "./Footer";

const Cart = () => {
  const { CartArray, DeleteButtonFunc } = useCartContext();
  console.log(CartArray);

  // ans
  // const {productname , image , quantity , price} = CartArray;
  // console.log(productname , image , price , quantity );

  return (
    <Wrapper>
      <Header />
      <div className="main">
        <h4 className=" text-center my-4 title"> CART </h4>

        {CartArray.length > 0 ?         
        <div className="cart_upper_lower">
          <div className="table">
            <table className="tableInner table-striped text-center align-middle " id="tableInner">
              <thead>
                <tr>
                  <th scope="col">S.NO</th>
                  <th scope="col">PRODUCT</th>
                  <th scope="col">NAME</th>
                  <th scope="col">QUANTITY</th>
                  <th scope="col">PRICE</th>
                  <th scope="col">TOTAL PRICE</th>
                  <th scope="col">DELETE</th>
                </tr>
              </thead>

              <tbody>
                {CartArray.map((curEl, ind) => {
                  console.log(curEl.id);
                  return (
                    <tr key={ind}>
                    <th scope="row"> {ind + 1} </th>
                      <td> <img className="image" src={curEl.image} alt="image" /> </td>
                      <td>{curEl.productName}</td>
                      {/* <td> {curEl.quantity}</td> */}
                      <td> {1}</td>
                      <td> {curEl.price} </td>
                      <td> {curEl.total} </td>
                      <td> <FaTrash className="delete" onClick={() => DeleteButtonFunc(curEl.id)} />
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
          {/* total  */}
          <div className="total">
            <Cart_Total cartItemPrice={CartArray} />
          </div>
        </div> : 
        <div className="cart_upper_lower">
          <div className="table">
            <table className="table-striped text-center align-middle " id="tableInner">
              <thead>
                <tr>
                  <th scope="col">S.NO</th>
                  <th scope="col">PRODUCT</th>
                  <th scope="col">NAME</th>
                  <th scope="col">QUANTITY</th>
                  <th scope="col">PRICE</th>
                  <th scope="col">TOTAL</th>
                  <th scope="col">DELETE</th>
                </tr>
              </thead>

              <tbody>
              </tbody>

            </table>
              <div className="cartCont">
                <div className="spanTag">
                  No Items 
                </div>
                <div className="innerContButton">
                 <Link to="/product"> <button className="button"> Continue Shopping </button> </Link>
                </div>
              </div>
          </div>
          {/* total  */}
          <div className="total">
            <Cart_Total cartItemPrice={CartArray} />
          </div>
        </div>
        }
      </div>

    </Wrapper>
  );
};

export default Cart;

const Wrapper = styled.section`
  .main {
    height: 45rem;
    color:blue;
    margin:7rem auto;
  }
  .main h4{
    color:blue;
    font-weight:600;
  }

  .table {
    max-width: 90%;
    margin: 1rem auto;
  }
  .title{
    font-size:3rem;
    font-family: serif;
    color:#6f6fd2;
  }
  #tableInner{
    width:100%;
  }
  ${
    "" /* .img{ display: flex; justify-content: center ; align-items: center; gap:12px;   } */
  }
  .image {
    width: 4rem;
  }
  .delete {
    color: blue;
    font-size:18px;
  }
  .delete:hover {
    color: red;
    font-size: 22px;
  }
  ${
    "" /* .continueShoppingButton{border:none; border-radius:12px; padding:12px; background-color:blue; color:white;  } `; */
  }

  .buttons {
    display: flex;
    justify-content: space-between;
  }
  .total {
    margin-top: 3rem;
    display: flex;
    justify-content: space-between;
    width: 100%;
    max-width: 80%;
    margin: 3rem auto;
  }
  .spanTag {
    ${'' /* background-color: bisque; */}
    font-size:2rem;
    font-family: serif;
    margin-bottom: 3rem;
  }
  .cart_upper_lower {
    max-height: 20vh;
    height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }.cartCont{
    ${'' /* background: aqua; */}
    text-align:center;
    padding:12px;
  }
  .innerContButton .button{
    background:#6f6fd2;
    color:white;
    border:none;
    border-radius:12px;
    padding:12px;
    
  }

  ${"" /* responsive  */}

  @media only screen and (max-width: 800px) {
    .table {
      margin: 2rem auto;
      font-size: 12px;
    }
  }

  @media (max-width: 540px) {
            .table{
                margin: 1rem auto;
                font-size:10px;
            }
  }
`;
