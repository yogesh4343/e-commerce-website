import React from 'react';


const ProductReducer = (state,action) => {

  if(action.type === "SET_ALL_PRODUCT" ){
    let cont = action.payload;
    // console.log(cont);
      const res = cont.filter((curEl,ind)=>{
        return curEl.featured === true
      }) ;
    return {
      ...state,
      allProduct:cont,
      featureProduct : res,
    }
  }






// ye correct wala hai pehle 🥳🥳🥳

  // Single_Product_Page_Function

  // if (action.type === "Single_Product_Page_Function") {
  //   let demo = state.allProduct;
  //   console.log(demo);
  //   const index = action.payload;
  //   // console.log(index);
  //   const indexNumChange = Number(index)


    
  //     const Single_Product_Obj = demo.filter(( curEl , ind ) => {
  //       return curEl.id === indexNumChange;
  //     })
  //   // console.log(Single_Product_Obj);

  //   return{
  //     ...state,
  //     singlePageObject:Single_Product_Obj,
  //   }

  // }



  // ========
  if (action.type === "Single_Product_Page_Function") {
    const cont = action.payload;
    // console.log(cont);
    // for (const obj of cont) {
      // console.log(obj)
      return{
        ...state,
        // singlePageObject:obj,
        singlePageObject:cont,
      }
    // }


    
      // const Single_Product_Obj = cont.map(( curEl , ind ) => {
      //   return curEl.id;
      // })
    // console.log(Single_Product_Obj);

    // return{
    //   ...state,
    //   singlePageObject:cont,
    // }

  }
  // ========


  
  return {
    ...state
  }
}

export default ProductReducer ;