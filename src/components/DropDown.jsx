import React, { useState } from "react";
import Zoom from "@mui/material/Zoom";

function DropDown(props) {
  const [isMousedOver, setMousedOver] = useState({
    theme: false,
    font: false,
    align: false,
  });

  function handleMouseOver(event) {
    if (event.target.className === "fa fa-palette") {
      return setMousedOver({
        theme: true,
        font: false,
        align: false,
      });
    } else if (event.target.className === "fa fa-font") {
      return setMousedOver({
        theme: false,
        font: true,
        align: false,
      });
    } else if (event.target.className === "fa fa-align-left") {
      return setMousedOver({
        theme: false,
        font: false,
        align: true,
      });
    }
  }
  function handleMouseOut(event) {
    return setMousedOver({
      theme: false,
      font: false,
      align: false,
    });
  }
  function changeTheme() {
    props.onTheme();
  }
  function changeFont() {
    props.onFont();
  }
  function changealign() {
    props.onAlign();
  }

  return (
    <div className="drop-down" style={props.display}>
      <Zoom in={props.display.display === "none" ? false : true}>
        <i
          onMouseOver={handleMouseOver}
          onMouseOut={handleMouseOut}
          onClick={changeTheme}
          className="fa fa-palette"
        ></i>
      </Zoom>
      <div
        className="label-theme"
        style={{ display: isMousedOver.theme ? "unset" : "none" }}
      >
        Theme
      </div>
      <Zoom in={props.display.display === "none" ? false : true}>
        <i
          onMouseOver={handleMouseOver}
          onMouseOut={handleMouseOut}
          onClick={changeFont}
          className="fa fa-font"
        ></i>
      </Zoom>
      <div
        className="label-font"
        style={{ display: isMousedOver.font ? "unset" : "none" }}
      >
        Font
      </div>
      <Zoom in={props.display.display === "none" ? false : true}>
        <i
          onMouseOver={handleMouseOver}
          onMouseOut={handleMouseOut}
          onClick={changealign}
          className="fa fa-align-left"
        ></i>
      </Zoom>
      <div
        className="label-align"
        style={{ display: isMousedOver.align ? "unset" : "none" }}
      >
        Alignment
      </div>
    </div>
  );
}

export default DropDown;
