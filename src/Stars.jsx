import React from 'react';
import {  BsStarFill , BsStarHalf } from "react-icons/bs";
import styled from 'styled-components';



const Stars = ({stars}) => {

    // console.log( typeof(stars ) === String  );


    // const stars = 4.4;

    const starFunc = () => {

       if (stars <= 5 && stars >= 4.6 ) {
            // console.log("stars 5 - 4.6 ")
            return  <div className="color"> <BsStarFill /> <BsStarFill />  <BsStarFill />  <BsStarFill />  <BsStarFill />        </div> 
        }
        else if (stars <= 4.5 && stars >= 4.1 ) {
            // console.log("stars 4.5 - 4.1 ")
            return (<div className="color">   <BsStarFill /> <BsStarFill /> <BsStarFill /> <BsStarFill />    </div>)
        }
        else if (stars <= 4 && stars >= 3.6 ) {
            // console.log("stars 4 - 3.6 ")
            return (<div className="color">   <BsStarFill /> <BsStarFill /> <BsStarFill />   <BsStarFill />     </div>)
        }
        else if (stars <= 3.5 && stars >= 3.1 ) {
            // console.log("stars 3.5 - 3.1 ")
            return (<div className="color">   <BsStarFill /> <BsStarFill /> <BsStarFill />   <BsStarHalf />     </div>)
        }
        else if (stars <= 3 && stars >=2.6 ) {
            // console.log("stars 3 - 2.6 ")
            return (<div className="color">   <BsStarFill /> <BsStarFill /> <BsStarFill />    </div>)
        }
        else if (stars <= 2.5 && stars >=2.1 ) {
            // console.log("stars 2.5 - 2.1 ")
            return (<div className="color">   <BsStarFill /> <BsStarFill /> <BsStarHalf />    </div>)
        }
        else if (stars <= 2.0 && stars >=1.6 ) {
            // console.log("stars 2.0 - 1.6 ")
            return (<div className="color">   <BsStarFill /> <BsStarFill />  </div>)
        }
        else if (stars <= 1.5 && stars >=1.1 ) {
            // console.log("stars 1.5 - 1.1  ")
            return (<div className="color">   <BsStarFill />  <BsStarHalf />    </div>)
        }
        else if (stars <= 1.0 && stars >=0.5 ) {
            // console.log("stars 1 ")
            return (<div className="color"> <BsStarFill />    </div>)
        }
    }


  return (
    <Wrapper>
    <div>
        {starFunc()}

    </div>
    </Wrapper>
  )
}

export default Stars



// stars <= 5 || stars >= 4.5 ? " ⭐️ ⭐ ️⭐️ ⭐️ ⭐️ " : null  && 
// stars <= 4 || stars >= 3.5 ? " ⭐️ ⭐ ️⭐️ ⭐️ " : null     &&
// stars <= 3 || stars >=2.5 ? " ⭐️ ⭐ ️⭐️ " : null &&
// stars <= 2 || stars >=1.5 ? " ⭐️ ⭐ ️" : null &&
// stars <= 1 || stars >=0.5 ? " ⭐️ " : null 




const Wrapper = styled.section`
.color{
    color:orange;
}
`;