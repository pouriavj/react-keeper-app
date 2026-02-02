import React, { useState } from "react";

function Loading() {
    const [loadingClass , setLoadingClass] = useState({
        loadingScreen: "loading",
        loadingAnimation: "page-loader"
    })
    window.addEventListener('load', () =>{
        setTimeout(() =>{
            setLoadingClass({
                loadingScreen: "hidden",
                loadingAnimation: "hidden"
            })
        }, 1000)
    })
    
  return (
    <div className={loadingClass.loadingScreen}>
      <div className={loadingClass.loadingAnimation}></div>
    </div>
  );
}

export default Loading;
