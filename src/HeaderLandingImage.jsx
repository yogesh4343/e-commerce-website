import { formToJSON } from 'axios'
import React, { useEffect, useState } from 'react'
import styled from 'styled-components'

const firstText = ">Welcome"
const secondText = "Living Sustainable"
const thirdText= "Use Eco Friendly Products"

const HeaderLandingImage = () => {

    const [first , setFirst] = useState("");
    const[index,setIndex] = useState(0);
    const [second , setSecond] = useState("");
    const [third , setThird] = useState("");
    

    // useEffect(()=>{
    //     if(index < secondText.length){
    //         setTimeout(() => {
    //             setSecond(second + secondText[index]);
    //             setIndex(index+1);
    //         }, 300);
            
    //     }
    // },[second]);

    const effect = useEffect(()=>{
        if(index < thirdText.length){
            setTimeout(() => {
                setThird(third + thirdText[index]);
                setIndex(index+1);
            }, 150);
            
        }
    },[third]);



  return (
    <Wrapper>
    <div className="mainCont">
        {/* <div className="img"><img src="../Image/Home_bg2.png" alt="HeaderLandingImage" /></div> */}
        <div className="img"><img src="https://images.squarespace-cdn.com/content/v1/5def7ff22d0d3203aa21fe12/1583699659939-67TKD1QWE98C2ONB1776/3d+tiles7.jpg" alt="HeaderLandingImage" /></div>
        {/* https://images.squarespace-cdn.com/content/v1/5def7ff22d0d3203aa21fe12/1583699659939-67TKD1QWE98C2ONB1776/3d+tiles7.jpg */}

        <div className="cont">
            <div className="left">
            <div className="first"> {firstText}</div>
            <div className="second">{secondText}</div>
            <div className="third">{third}<span className="Pointer">|</span></div>
            </div>
            <div className="right"></div>
        </div>
    </div>
    </Wrapper>
  ) 
}








export default HeaderLandingImage
const Wrapper = styled.section`
.Pointer{
    animation : blink 1s ease-in infinite;
}
@keyframes blink{
    to{
        color:transparent;
        display:none;
    }
    from{
        color:#033c93;
    }
}
${'' /* @keyframes blink{from,to{color:transparent}50%{color:#000}} */}
${'' /* .main{
    height:84vh;
    display:flex;
} */}

.mainCont{
    position: relative;
    top: 0px;
}
.img{
    position: relative;
}
.img img{
    position: relative;
    width:100%;
    height:100vh;
}
.cont{
    width:100%;
    position: absolute;
    top:0rem;
    height:100%;
    padding:3rem;
    color:white;

    text-align: left;
    display: flex;
    justify-content: flex-start;
    align-items: center;
}
.left{
    width:auto;
}
.left .first{
    font-size:4rem;
    font-family: 'Rubik Mono One', sans-serif;
    color:black;
    margin-bottom:3rem;
    color: azure;
}
.left .second{
    font-size:4rem;
    font-weight:700;
    color: azure;
    margin-bottom:1rem;
}
.left .third{
    font-size:4rem;
    font-family: 'Yeseva One', cursive;
    color:#033c93;
}
.right{
    width:30%;
}



${'' /* responsive  */}
@media screen and (max-width: 1318px) {
    .cont{
        top:6rem;
    }    
    .left .first{
        font-size:3rem;
    }
    .left .second{
        font-size:3rem;
    }
    .left .third{
        font-size:3rem;
    }
}

@media screen and (max-width: 1020px) {
    .cont{
        top:3rem;
    }    

    .left .first{
    font-size:2.6rem;
    margin-bottom:2.3rem;
}
.left .second{
    font-size:2.4rem;
    margin-bottom:1rem;
}
.left .third{
    font-size:2.4rem;
}
}

@media screen and (max-width: 882px) {
    .cont{
        top:2.3rem;
    }    

    .left .first{
    font-size:1.7rem;
    margin-bottom:1.4rem;
}
.left .second{
    font-size:1.7rem;
    margin-bottom:1rem;
}
.left .third{
    font-size:1.7rem;
}
}

@media screen and (max-width: 617px) {
    .cont{
        top:2.0rem;
    }    

    .left .first{
    font-size:1.4rem;
    margin-bottom:1.1rem;
}
.left .second{
    font-size:1.4rem;
    margin-bottom:.8rem;
}
.left .third{
    font-size:1.4rem;
}
.right{
    width:20%;
}
}

@media screen and (max-width: 447px) {
    .img img{
        height:49vh;
    }
    .cont{
        top:1.6rem;
    }    

    .left .first{
    font-size:1.3rem;
    margin-bottom:.9rem;
}
.left .second{
    font-size:1.3rem;
    margin-bottom:.6rem;
}
.left .third{
    font-size:1.3rem;
}
.right{
    width:18%;
}
.cont{
    padding:1.4rem;
}
}
`;