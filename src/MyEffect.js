import React, { useEffect, useState } from "react";

const MyEffect = ()=>{

   const [widthValue, setWidthValue] = useState(window.screen.width);

   const actualSize = ()=>{
       setWidthValue(window.innerWidth);
       console.log("Window Size Changed");
       console.log(window.innerWidth);
   }

   useEffect(()=>{
       
      //console.log('Event Added');
       window.addEventListener("resize", actualSize);

       return()=>{
          // console.log('Event Removed');
           window.removeEventListener("resize", actualSize);
       }
   })

    return (
      <div>
          <h1 className="text">The Actual Size of the window is now:</h1>
          <h2 className="value">{widthValue}</h2>
      </div>
    )
}

export default MyEffect;