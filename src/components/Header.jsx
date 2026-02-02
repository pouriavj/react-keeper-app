import React from "react";
import HighlightIcon from "@mui/icons-material/Highlight";

function Header() {
  return (
    <header>
      <h1>
        <HighlightIcon />
        Keeper
      </h1>
      <button className="hamburger" id="hamburger">
        <span></span>
        <span></span>
        <span></span>
      </button>
    </header>
  );
}

export default Header;
