import React, { useEffect } from 'react'
import { NavLink } from 'react-router-dom';
import styled from 'styled-components'
import ArrayOfAnObject from './ArrayOfAnObject';
import { useProductContext } from './Context/ProductContext';
import SingleProduct from './SingleProduct';

const Grid = () => {
    const {allProduct} = useProductContext();
    // console.log(allProduct);


    const GridMap = allProduct.map(( curEl , ind ) => {
      // console.log(curEl);
      
      
      
      return (
        <NavLink to={`/page/${curEl.id}`} key={ind}>
            <Wrapper>
                    <div className="container">
                      <div className="image">
                      <img className="img" src={curEl.images[2]} alt="img" />
                      </div>
                      <div className="contentDiv">
              <div className="leftContent"> {curEl.productName} </div>
              <div className="rightContent"> ₹ {curEl.price}  </div>
            </div>
                  </div>
          </Wrapper>
        </NavLink>
        
      )
    })
    return GridMap ;
}

export default Grid

const Wrapper = styled.section`
  .img {
    width: 100%;
    height: 15.6rem;
  }
  .content {
    display: flex;
    justify-content: space-between;
    margin:12px 0px 0px 0px;
  }
  .contentDiv{
    font-size:16px;
    display:flex;
    align-items: center;
    gap: 20px;
    justify-content: space-around;
    margin-top:12px;
    font-weight: 700;
    background: #0D6EFD;
    padding:12px;
    border-radius:12px;
    color:white;
    transition: 14s;
    display:none;
    opacity:0;
  }
  .leftContent {
    ${'' /* font-size: 8px; */}
  }
  .rightContent {
    ${'' /* font-size: 8px; */}
  }
  .container {
    ${'' /* width: 100%;
    padding: 0px; */}
    
    width:19rem; box-shadow:4px 10px 12px grey; padding:12px; border-radius:12px; margin:1rem;      height: 17rem;
    transition:all 4s ease-in ;

  }
  .container:hover .contentDiv{
    display:flex;
    transform: translate(0px, -59px);
    opacity:1;
    ${'' /* transition-property: all;
  transition-property: transform; */}
    ${'' /* transition:all 4s ease-in ; */}
    transition: opacity 6s ease-out ;
  }

  `;