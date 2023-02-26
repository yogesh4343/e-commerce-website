import React from 'react'
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

const SingleProduct = (props) => {
  const {careGuide , description , features , id , images , price , productName } = props;



  return (
    <NavLink className="link"  to={`/page/${id}`} > 
      <Wrapper>
          {/* Product */}
          <div className="main">
            <div className="imageDiv">
              <img className="img" src={images[0]} alt="Img" />
              {/* <img className="img" src="image" alt="img" /> */}
              <span> {productName} </span>
            </div>
            <div className="contentDiv">
              <div className="left"> {productName} </div>
              <div className="right"> ₹ {price}  </div>
            </div>
      </div>
      </Wrapper>
    </NavLink>
  )
}




















export default SingleProduct


const Wrapper = styled.section`
.nav{text-decoration: none; }
.main{padding:12px; background-color:#fff; height: 17rem; border-radius: 12px; margin: 20px 22px 0px 0px; box-shadow:4px 12px 12px grey;  width:22rem; z-index:1 ;     transition : all 4s ease-in; cursor:pointer;   }
.img{width:100%; height:100%; border-radius: 12px;  width: 20.6rem;  height: 15.6rem; z-index:1 }
.contentDiv{display:flex; width: 100%; justify-content: space-between;  margin: 10px 0px ; color:black; z-index:10;  display:none; font-size:14px; 
    background: #0D6EFD;
    padding: 0.5rem ;
    transition : 4s ease-in infinite;
 }
.imageDiv{position:relative; }
span{position:absolute; background:white; border-radius:12px; padding:4px 6px;  right: 1rem; top: 5px;     background: beige; }
span:hover{ color:black; border:1px solid white; cursor:pointer;  }

.main:hover .contentDiv {
  display:flex;
  width: 100%;
    justify-content: space-between;
    background: #0D6EFD;
    border-radius:12px;
    color:white;
    transform: translate(1px, -48px);
    transition : transform 400s ease-in;
}

@media screen and (max-width: 1048px) {
  .main{margin: 20px 22px 0px 0px; }
}
@media screen and (max-width: 1400px) {
    .main{height:13.1rem; }
    .imageDiv{height:10rem; }
    span {padding: 3px 5px; font-size: 14px; }
    .contentDiv{margin: 8px 0px ;}
}

@media screen and (max-width: 870px) {
    ,main{width: auto; margin: 10px auto; }
};

@media screen and (max-width: 770px) {
  .main{
    margin:12px ;
    width: 22rem;
    ${'' /* height: 13.6rem; */}
  }

  .img{
    width: 15rem;
    height:12rem;
  }

  .imageDiv span{
    font-size:9px;
  }

  .main:hover .contentDiv {
    transform: translate(1px, -14px);
    transition : transform 400s ease-in;
}
}
`;