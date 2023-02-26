import React from 'react'
import styled from 'styled-components'

const SlidingText = () => {

    // let str = "If it can’t be reduced, reused, repaired, rebuilt, refurbished, refinished, resold, recycled, or composted, then it should be restricted, re-designed or removed from production."

  return (
    <Wrapper style={{overflowX: "hidden",         backgroundColor:"#f0f1f3" , scroll:"none",}}>
        <div className="cont"> 
        <span className="text1"> 40% OFF  </span> <span> &nbsp; &nbsp; </span>
        <span className="text2"> on all the </span> <span> &nbsp; &nbsp; </span>
        <span className="text3"> Sustainable Products... </span>
        </div>
    </Wrapper>
  )
}

export default SlidingText
const Wrapper = styled.section`
    .cont{
        overflow-y: hidden;
        transition: all 6s ease-in infinite ;
        position:relative;
        right:-80rem;
        animation:scroolText 15.3s ease-in infinite;
        height:3rem;
        display:flex;
        justify-content:center;
        align-items:center;
        cursor:pointer;
        background-color:#f0f1f3;
        overflow-x: hidden;


        ${'' /* margin-top: 53rem; */}

    }

    .cont:hover {
        animation-play-state: paused;
    }

    .text1{
        font-style:italic;
        color:red;        background-color:#f0f1f3;
    }

    .text3{
        font-weight:600;
        color:green;
        background-color:#f0f1f3;
    }

    ${'' /* animation  */}

    @keyFrames scroolText{
        0%{
            ${'' /* left:120%; */}
            left:65%;
        }
        100%{
            ${'' /* left:-90%; */}
            left:-100%;
        }
    }

    ${'' /* responsive css  */}
    @media screen and (max-width: 570px) {

         @keyFrames scroolText{
        0%{
            ${'' /* left:120%; */}
            left:100%;
        }
        100%{
            ${'' /* left:-90%; */}
            left:-100%;
        }
    }

    }
`
