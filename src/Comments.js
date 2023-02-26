import React from 'react'
import styled from 'styled-components';
import { AiFillLike , AiFillDislike} from "react-icons/ai";
import { BsReplyFill} from "react-icons/bs";

const Comments = () => {
  return (
    <Wrapper>
        <p className="customer">Customer's Comments</p>
        <div className="content">


        <div className="comments">
            <div className="comment">
                <p className="title">John</p>
                <span className="hour">Few Hours Ago</span>
            </div>
            <div className="cont">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Illum quidem esse eveniet ipsam quam, officiis sequi animi, porro quos sed quod laborum odio optio aliquam debitis reprehenderit nobis nulla soluta!
            </div>
            <div className="icons">
                <div className="innerIcon">
                <div className="up"><AiFillLike /> </div>
                <div className="down"> <AiFillDislike /> </div>
                </div>
                <div className="reply">
                    <BsReplyFill />  <span>reply</span>
                </div>
            </div>
        </div>


        <div className="comments">
            <div className="comment">
                <p className="title">dyano</p>
                <span className="hour">3 Hours Ago</span>
            </div>
            <div className="cont">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Illum quidem esse eveniet ipsam quam, officiis sequi animi, porro quos sed quod laborum odio optio aliquam debitis reprehenderit nobis nulla soluta!
            </div>
            <div className="icons">
                <div className="innerIcon">
                <div className="up"><AiFillLike /> </div>
                <div className="down"> <AiFillDislike /> </div>
                </div>
                <div className="reply">
                    <BsReplyFill />  <span>reply</span>
                </div>
            </div>
        </div>


        <div className="comments">
            <div className="comment">
                <p className="title">Mercy</p>
                <span className="hour"> 1 Week Ago</span>
            </div>
            <div className="cont">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Illum quidem esse eveniet ipsam quam, officiis sequi animi, porro quos sed quod laborum odio optio aliquam debitis reprehenderit nobis nulla soluta!
            </div>
            <div className="icons">
                <div className="innerIcon">
                <div className="up"><AiFillLike /> </div>
                <div className="down"> <AiFillDislike /> </div>
                </div>
                <div className="reply">
                    <BsReplyFill />  <span>reply</span>
                </div>
            </div>
        </div>



        </div>
    </Wrapper>
  )
}

export default Comments

const Wrapper = styled.section`
.content{
    display:flex;
    justify-content:center;
    overflow: scroll;
    flex-wrap:wrap;
    flex-direction:row;
    margin:0rem 0rem 8rem 0rem ;
}
.customer{
    margin:8rem 0rem 2rem 0rem ;
    width:100%;
    text-align:center;
    font-size:23px;
    color:#2196f3;

}
    .comments{
        margin:2rem .7rem;
        max-width:55%;
        width:26rem;
        cursor:pointer;
        padding:17px;
        border:1px solid grey;
        border-radius:12px;
        box-shadow:10px 10px 10px grey;
    }
    .title{
        font-size: 1.25rem;
        margin-top: 0;
        margin-bottom: 0.5rem;
        font-weight: 500;
        line-height: 1.2;
    }
    .hour{
        font-size: .8rem;
        font-weight: 500;
        line-height: 1.2;
        margin-bottom:1rem;
    }
    .cont{
        margin-top:1rem;
    }
    .icons{
        display:flex;
        justify-content:space-between;
        align-items:center;
        text-align:center;
        text-align:center;
        margin:1rem;
        font-size:22px;
        color:grey
    }
    .innerIcon{
        display:flex;
        justify-content:center;
        align-items:center;
        text-align:center;
        gap:22px;
        font-size:22px;
        color:grey
    }
    .reply span{
        font-size:16px;
    }
    .up:hover , .down:hover , .reply:hover {
        color: #2196f3;


    }

    ${'' /* responsive  */}

    @media screen and (max-width: 507px) {
    .comments{
         max-width: 85%;
    }
}
        
`;