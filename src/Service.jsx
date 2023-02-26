import React from 'react'
import styled from 'styled-components'

const Service = () => {
  return (
    <Wrapper>

        <div className="bothSection">
        <p className="title">Convenient Services</p>
        <p className="lowerTitle">Bringing the Art to You-The Eco Friendly Product</p>
        <div className="Section_One">
            <div className="left" data-aos="fade-up">
                <div className="heading"> Shipping & Delivery </div>
                <div className="paragraph"> As professionals , we believe that buying our products should be fun, exciting and enjoyable. This service is designed to meet the needs of our buyers, and help them find the inspiration to come away with a piece they absolutely love. Shop with us today for a convenient and satisfying experience.</div>
            </div>

            <div className="right" data-aos="fade-up">
                <img src="https://static.wixstatic.com/media/b7569128e76a405e9b04cc240497d066.jpg/v1/fill/w_1280,h_800,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/b7569128e76a405e9b04cc240497d066.jpg" alt="Shipping Image" />
            </div>
        </div>

        <div className="Section_Two">
        <div className="left" data-aos="fade-up">
                <img src="https://static.wixstatic.com/media/df52bc_8f25999eebba4a4fb4673cd3da923310~mv2.jpg/v1/fill/w_592,h_390,al_c,lg_1,q_80,enc_auto/df52bc_8f25999eebba4a4fb4673cd3da923310~mv2.jpg" alt="Subscripiton" />
            </div>

            <div className="right" data-aos="fade-up">
                <div className="heading"> Our Subscription Models</div>
                <div className="paragraph">At Bambrew, we know finding that perfect product at great price isn’t always easy, and is often overshadowed by the long-term commitment and significant price tag. Our subscription services make sure you come away with exactly what you want. Find out more about how this service can help you with the product you love at an absolute amazing price</div>
            </div>
        </div>
        </div>

    </Wrapper>
  )
}

export default Service
const Wrapper = styled.section`
        
    .title{
        color:#69C183;
        text-align: center;
        line-height: 1.35em;
        margin:2rem auto;
        font-size: 40px;
    }    
    .lowerTitle{
        text-align:center;
        margin:0rem 0rem 7rem 0rem;
        font-family: 'Dancing Script', cursive;
        font-size:18px;
    }
    .bothSection{
        margin:2rem auto;
    }        

    .Section_One{
        max-width:90%;
        width:100%;
        margin:auto;
        display:flex;
        margin:2rem auto;
        background-color: rgba(234,234,234,0.43);
    }
    .Section_One .left{
        width: 50%;
        margin: auto;
    };
    .Section_One .left .heading{
        color: #69C183; 
        text-align:center;
        font-size:22px;
        margin-top: 1rem;
    };
    .Section_One .left .paragraph{
        height: 100%;
        margin: 3rem 2rem;
        text-align: center;
        line-height: 1.875em;
        font-size: 15px;
    }
    .Section_One .left img{
        width: -webkit-fill-available;
        ${'' /* height: -webkit-fill-available; */}
        height:100%;
    }   
    .Section_One .right{
        width:50%;
    }
    .Section_One .right img{
        width: -webkit-fill-available;
        height: 100%;
    }




    .Section_Two{
        max-width:90%;
        width:100%;
        margin:auto;
        display:flex;
        background-color: rgba(234,234,234,0.43);
    };
    .Section_Two .left{
        width:50%;
    };
    .Section_Two .right .heading{
        color: #69C183; 
        text-align:center;
        font-size:22px;
        margin-top: 1rem;
    }
    .Section_Two .right .paragraph{
        height: 100%;
        margin: 3rem 2rem;
        text-align: center;
        line-height: 1.875em;
        font-size: 15px;
    }
    .Section_Two .left img{
        width: -webkit-fill-available;
        ${'' /* height: -webkit-fill-available; */}
        height:100%;
    }
    .Section_Two .right{
        width:50%;
        margin:auto;
    }
    .Section_Two .right img{
        width: -webkit-fill-available;
        height: 100%;
    }

    ${'' /* responsive  */}

    @media only screen and (max-width: 950px) {
    .Section_One .left .paragraph{
        margin: 2rem .5rem;
        font-size: 12px;
    }
    .Section_Two .right .paragraph{
        margin: 2rem .5rem;
        font-size: 12px;
    }

    }

    @media only screen and (max-width: 615px) {
    .Section_One .left .paragraph{
        font-size: 10px;
        margin: 1rem 0.5rem;
    }
    .Section_Two .right .paragraph{
        font-size: 10px;
        margin: 1rem 0.5rem;
    }
    .Section_One{
        max-width:98%;
    }
    .Section_Two{
        max-width:98%;
    }
    .Section_One .left .heading{
        font-size:16px;
    }
    .Section_Two .right .heading{
        font-size:16px;
    }
    }

    @media only screen and (max-width: 405px) {
        .Section_One{
            flex-direction: column-reverse;
        }
        .Section_One .right{
            width:100%;
        }
        .Section_One .left{
            width:100%;
        }
        .Section_One .left .paragraph{
            font-size: 18px;
        }
        .Section_Two .right .paragraph{
            font-size: 18px;
        }

        .Section_Two .right .heading{
        font-size:22px;
        }

        .Section_One .left .heading{
            font-size:22px;
        }


        .Section_Two{
            flex-direction: column;
        }
        .Section_Two .left{
            width:100%;
        }
        .Section_Two .right{
            width:100%;
        }
    }
`;