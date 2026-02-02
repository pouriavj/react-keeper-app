import React, { useState } from "react";

function TypeTools(props) {
  const [hovered, setHovered] = useState(false);
  function makeBold() {
    props.setStyles("bold");
    setHovered(prevValue => {
        return !prevValue;
    })
  }
  return (
    <div className="tools-container">
      <div className="tool-flex">
        <span onClick={makeBold} style={{backgroundColor: hovered && "#eee", color: hovered && "#dfa403"}} className="tool-item">
          <i className="fa-solid fa-bold"></i>
        </span>
        <span className="tool-item">
          <i className="fa-solid fa-italic"></i>
        </span>
        <span className="tool-item">
          <i className="fa-solid fa-underline"></i>
        </span>
        <span className="tool-item">
          <i className="fa-solid fa-strikethrough"></i>
        </span>
        <span className="tool-item">
          <i className="fa-solid fa-list"></i>
        </span>
        <span className="tool-item">
          <i className="fa-solid fa-image"></i>
        </span>
      </div>
    </div>
  );
}

export default TypeTools;
