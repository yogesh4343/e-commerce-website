import React, { useState } from 'react'
import styled from 'styled-components';
import { BsFilePlusFill , BsFileMinusFill } from "react-icons/bs";


const AddToCart = (props) => {

    const [state,setState] = useState(0);

    const {cont} = props.cartCont;
    console.log(cont);
    
    const minusFunction =()=>{
        console.log('minus function');
        if (state <= 0) {
            return 0
        }else{
            setState(state - 1);
        }
    }
    const plusFunction =()=>{
        console.log("plus function");
        setState(state + 1);
    }


  return (
    <Wrapper>
        AddToCart
        <div className="buttons">
            <div className="minus" onClick={minusFunction}> <BsFileMinusFill /> </div>
            <p className="num"> {state} </p>
            <div className="plus" onClick={plusFunction}> <BsFilePlusFill /> </div>
        </div>
    </Wrapper>
  )
}

export default AddToCart

const Wrapper = styled.section`
.buttons{display: flex; gap:12px; text-align:center; aligh-items:center; margin:12px 0px }
.num{ font-size:22px; }
.plus{font-size:32px; }
.minus{font-size:32px; }
p{margin: auto 0px; }

`;