import React from 'react'
import styled from 'styled-components';
import { useCartContext } from './Context/CartContext';

const Cart_Total = () => {

    // let cost;
    const {CartArray} = useCartContext();

    console.log(CartArray)


    let total = 0
    
    CartArray.map((curEl,ind)=>{
        total = total + curEl.total;
        console.log(total);
    })
        
        return (
            <Wrapper>
        <div className="total_main">
            <div className="left"></div>
            {/* <div className="right" data-aos="fade-left"> */}
            <div className="right" >
                <div className="right_inner">
                    Your Items
                </div>
                <div className="right_Content">
                    <p className="coupon">
                        Apply Coupon : <span> <input type="text"   placeholder="Apply Coupon.." /> </span>
                    </p>
                    <div className="Total">Grand Total :  ₹ <span> {total} </span></div>
                </div>
            </div>
        </div>
    </Wrapper>
  )
// };
}

export default Cart_Total;

const Wrapper = styled.section`
    .total_main{
    width: 100%;
    display: flex;
    justify-content: space-between;
    
    margin-top:3rem;
    width: 80vw;
    border-radius:23px;
    ${'' /* transform:translate(720px , 10px); */}

    }

    .total_main:hover{
        ${'' /* transform:translate(10px , 10px); */}
    }

    .left{
        ${'' /* background:grey; */}
        width:50%;
    }
    .right{
        background:#6d6dca;
        color:white;
        width:50%;
        display: flex;
        flex-flow: row-reverse;
        padding:1rem;
        height:10rem;
        display: flex;
        flex-direction: column;
        height:auto;
        border-radius: 2rem;
    }
    .right_inner{
        font-size: 2rem;
        font-weight:700;
    }
    .coupon{
        font-size: 1.2rem;
        font-weight:500;
        padding-top:1.4rem;
        color: gold;
    }
    .coupon span input{
        border:none;
        background:#6d6dca;
        border-bottom: 0.6rem solid gold;
        border-left: 1px solid pink;
        border-top: 1px solid pink;
        border-right: 1px solid pink;
        color:white;
        width:100%;
        ::-webkit-input-placeholder { /* Chrome/Opera/Safari */
        color: pink;
        font-size:12px;
        padding-left:12px;
        }
    }
    .coupon span input:placeholder{
        color:white;
    }
    .Total{
        font-size: 1.2rem;
        font-weight:500;
        padding-top:1.4rem;
    }
    .Total span{
        border:3px dotted gold;
        padding:.5rem;
        border-radius:12px;
        
        }

        ${'' /* responsive  */}

        @media (max-width: 540px) {
            .left{
                width:0rem;
            }
            .right{
                width:auto;
            }
            .table{
                margin: 1rem auto;
            }
        }
`;