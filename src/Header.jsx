import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

const Header = () => {
  return (
    <Wrapper>
      <div className="header_main">
      <span className="logo_main">
      {/* <img className="logo" src="./Image/logo.png" alt="Logo" /> */}
      {/* <img className="logo" src="https://cdn.pixabay.com/photo/2017/02/18/19/20/logo-2078018_1280.png" alt="Logo" /> */}
      <img className="logo" src="https://cdn.pixabay.com/photo/2016/07/04/10/13/apple-1496375_1280.png" alt="Logo" />
      </span>
        <div className="links">
        <Link className="link"  to="/e-commerce-website"> <h4>Home</h4> </Link>
        <Link className="link"  to="/about"> <h4> About</h4> </Link>
        <Link className="link"  to="/product"> <h4>Products</h4> </Link>
        <Link  className="link" to="/cart"> <div className="cart"> 🛒 </div> </Link>
        </div>
      </div>
    </Wrapper>
  )
}

export default Header












const Wrapper = styled.section`
.header_main{
    width:100%;
    height:5rem;
    ${'' /* background:#f4f5f7; */}
    background:transparent;
    align-items: center;
    display: flex;
    flex-direction: row;
    justify-content:space-between;
    cursor:pointer;
    ${'' /* box-shadow: 0px 6px 22px 20px #040404; */}
    z-index:10;
    position:absolute;
    top:0px;
    ${'' /* left:0px; */}
    }

.logo {
    width:4rem;
}
.links{
    display:flex;
    gap:2rem;
    padding-right:1rem;
    justify-content:center;
    align-items:center;
    transition : all 4s ease-in;
}

.link{
    list-style:none;
    text-decoration:none;
    margin:0;
}

.link > h4{
    margin:0;
    font-size:1.1rem;
    color:black;
}

.links > h4{
    margin:0;
    font-size:17px;
}
.logo_main{
    padding-left:1rem;
}

.cart{
    display:flex;
    justify-content:center;
    align-items:center;
    font-size:2rem;
    transition:all .4s ease-in;   

    background: white;
    width: 3rem;
    height: 3rem;
    border-radius: 50%;
}
.link>h4:hover{
    transition:all .3s ease-in;   
    padding: 6px;
    border-bottom: 3px solid blue;
    border-radius:12px;
    font-family: 'Encode Sans', sans-serif;
    ${'' /* color:white; */}
    font-family: 'Yeseva One', cursive;
}
.cart:hover{
    font-size:2.6rem;
}


${'' /* responive  */}

@media (max-width: 500px) {
    .link > h4{
    font-size:13px;
    font-weight:800;
}
.links{
    gap:0.8rem;
}
.cart{
    font-size:1.3rem;
}
.cart:hover{
    font-size:1.6rem;
}
}
`