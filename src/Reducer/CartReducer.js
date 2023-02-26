import React from 'react'

const CartReducer = (state,action) => {

    // for item start
let HowMuchItem = 1;
if(action.type === "CART_ITEMS"){
    const demo = action.payload;
    HowMuchItem = demo;
  }
  // console.log("item is ans " , HowMuchItem);



  if(action.type === "CART_ARRAY"){

    let cont  = action.payload;
    // console.log(cont);

    for (const obj of cont) {
        // console.log(obj);
        let newObjForCart = {
          productName : obj.productName,
          id:obj.id,
          image : obj.images[1],
          quantity: 1 ,
          price:obj.price,
          total : obj.price * HowMuchItem,
        }
        return{
          ...state,
          CartArray:[...state.CartArray , newObjForCart], 
        }
    }

    // return{
    //   ...state,
    //   CartArray:[...state.CartArray , cont], 
    // }
  }

  if(action.type === "DELETE_CART"){
    let demo = action.payload; 
    // console.log(demo);

    let filt = state.CartArray.filter((curEl,ind)=>{
      // console.log(curEl[ind]);
      return curEl.id !== demo;
    })

    return{
      ...state,
      CartArray : filt,
      // CartObj : filt,
    }
  }

  return {...state
  }
}

export default CartReducer
