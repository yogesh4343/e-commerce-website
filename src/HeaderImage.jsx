import React from 'react'
import styled from 'styled-components'

const HeaderImage = () => {
  return (
    <Wrapper>
        <div className="mainAbout">
        {/* <img className="img" src="./Image/about_bg.png" alt="About_Background" /> */}
        <img className="img" src="https://i0.wp.com/www.greenershapes.com/wp-content/uploads/2021/05/What-is-Compostable-Food-Packaging-What-Does-it-Mean-Greener-Shapes.png?fit=1920%2C650&ssl=1" alt="About_Background" />
      </div>

        <div className="thaught_Div">
        <div className="left"></div>
        <div className="right">
          <div className="one" data-aos="fade-up"> The purpose  </div>
          {/* <div className="one" > The purpose  </div> */}
          {/* <div className="two" data-aos="fade-left"> Were I start - is the idea of use. </div> */}
          <div className="two" > Were I start - is the idea of use. </div>
          {/* <div className="three" data-aos="fade-left"> It is not recycling, it's reuse. </div> */}
          <div className="three" > It is not recycling, it's reuse. </div>
        </div>
        </div>

    </Wrapper>
  )
}

export default HeaderImage


const Wrapper = styled.section`
.mainAbout{
  position:relative;
  background-color:#f0f1f3;
}

.img{
  width:100%;
  height:46rem;
  ${'' /* position:relative; */}
}

${'' /* .mainThaughrDiv{
  position:absolute;
  width: 100%;
} */}

.thaught_Div{
  width:100%;
  color:black;
  height:18rem;
  display:flex;
  position:absolute;
  top:14.1rem;
}

.left{
  width:45%;
  background:transparent;
  height:fit-content;
}

.right{
  width:55%;
  ${'' /* background:orange; */}
  height:fit-content;
  background:;
  box-sizing:border-Box;
  background:;


    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    margin: auto;
    text-align: center;

}

.one{
  font-family: fantasy;
  font-size:5.2rem;
  font-weight:800;
  color: cadetblue;
  width:100%;
  margin-bottom: 2rem;

}

.two{
  font-family: 'Roboto Slab', serif; 

  width:100%;
  ${'' /* margin-left:4rem; */}
  margin-bottom: 1rem;

  font-size: 2.5rem;
}

.three{
  font-family: 'Roboto Slab', serif;
  width:100%;
  ${'' /* margin-left:4rem; */}

  font-size: 2.5rem;
}

${'' /* responive */}
@media (max-width: 1080px) {
  .one{
    font-size:4rem;
  }
  .two{
    font-size:2.0rem;
  }
  .three{
    font-size:2.0rem;
  }
  .thaught_Div{
    top:13.4rem;
  }
}

@media (max-width: 870px) {
  .one{
    font-size:3.6rem;
  }
  .two{
    font-size:1.7rem;
  }
  .three{
    font-size:1.7rem;
  }
  .thaught_Div{
    top:13.0rem;
  }
}

@media (max-width: 750px) {
  .right{
    margin:0px;
  }
  .one{
    font-size:3rem;
  }
  .two{
    font-size:1.4rem;
    margin-botton:0rem;
  }
  .three{
    font-size:1.4rem;
  }
  .thaught_Div{
    top:12.8rem;
  }
  .img{height:30rem;}
}



@media (max-width: 650px) {
  .one{
    font-size:2.6rem;
  }
  .two{
    font-size:1.2rem;
  }
  .three{
    font-size:1.2rem;
  }
  .thaught_Div{
    top:9.4rem;
  }
  .img{
    height:24rem;
  }
}

@media (max-width: 523px) {
  .one{
    font-size:1.4rem;
    margin-bottom:2rem;
  }
  .two{
    font-size:.9rem;
  }
  .three{
    font-size:0.9rem;
  }
  .thaught_Div{
    top:8.2rem;
  }
  .img{
    height:19rem;
  }
}

@media (max-width: 393px) {
  .one{
    font-size:1.3rem;
  }
  .two{
    font-size:.8rem;
  }
  .three{
    font-size:0.8rem;
  }
  .thaught_Div{
    top:7.2rem;
  }
  .img{
    height:17rem;
  }
}

`;