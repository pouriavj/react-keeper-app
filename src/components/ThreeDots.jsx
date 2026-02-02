import React, {useState} from "react";
import DropDown from "./DropDown";

function ThreeDots(props) {
  const [spanStyle, setSpanStyle] = useState({ background: "#424242b7" });
  const [toggle, setToggle] = useState({display: "none"})

  function handleMouseOver() {
    setSpanStyle({ background: "#dfa403" });
  }
  function handleMouseOut() {
    setSpanStyle({ background: "#424242b7" });
  }
  function handleClick(){
    setToggle(prevValue =>{
        if(prevValue.display === "none"){
            return {display: "unset"}
        }
        else{
            return {display: "none"}
        }
    })
  }
  return (
    <div className="three-dots">
        <DropDown display={toggle} onTheme={props.onTheme} onFont={props.onFont} onAlign={props.onAlign} />
      <div
        className="dots"
        onMouseOver={handleMouseOver}
        onMouseOut={handleMouseOut}
        onClick={handleClick}
      >
        <span style={spanStyle}></span>
        <span style={spanStyle}></span>
        <span style={spanStyle}></span>
      </div>
    </div>
  );
}

export default ThreeDots;
