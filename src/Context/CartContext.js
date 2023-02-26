import React, { createContext, useContext, useReducer } from 'react'
import reducer from '../Reducer/CartReducer';

let Create_Cart_Context = createContext();
const initialState = {
    CartArray : [],
    // CartObj : {},
}
const CartContext = ({children}) => {

    const [state , dispatch] = useReducer(reducer , initialState);

    // console.log(state.CartArray);

    // CartButton
    const CartButton = (cont , num)=>{
        // console.log(cont , num);
        dispatch({type:"CART_ARRAY" , payload:cont});

        // for item func start 
        Items(num);
    }

    // items in cart 
    const Items = (item)=>{
        // console.log("item " , item);
        dispatch({type:"CART_ITEMS" , payload:item});
    }



      // func 
  const DeleteButtonFunc = (ind)=>{
    console.log("Delete BUtton Click");
    console.log(ind)
    dispatch({type:"DELETE_CART" , payload:ind})
  }
  return (
    <>
        <Create_Cart_Context.Provider value={{...state ,CartButton , DeleteButtonFunc}}>{children}</Create_Cart_Context.Provider>
    </>
  )
}


const useCartContext = ()=>{
    return useContext(Create_Cart_Context);
}

export {CartContext , useCartContext};
