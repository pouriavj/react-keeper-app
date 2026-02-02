import React, { useState } from "react";
import DeleteIcon from "@mui/icons-material/Delete";
import Fab from "@mui/material/Fab";
import ThreeDots from "./ThreeDots";

function Note(props) {
  const [editContent, setEditContent] = useState(false);
  const [counter, setCounter] = useState(1);
  const [fontCounter, setFontCounter] = useState(1);
  const [theme, setTheme] = useState({
    backgroundImage: "radial-gradient(#eee 10.7%, transparent 0)",
  });
  const [font, setFont] = useState({ fontSize: "1.1em" });
  const [align, setAlign] = useState(true);

  function handleEdit() {
    setEditContent((prevValue) => !prevValue);
  }

  function handleTheme() {
    setCounter((prevValue) => {
      if (prevValue === 3) return 0;
      else return prevValue + 1;
    });
    if (counter === 0)
      setTheme({
        backgroundImage: "radial-gradient(#eee 10.7%, transparent 0)",
      });
    if (counter === 1)
      setTheme({
        backgroundImage: "linear-gradient(#eee 10.7%, transparent 0)",
      });
    if (counter === 2)
      setTheme({
        backgroundImage: "none",
        background: "#fff0b2ff",
      });
    if (counter === 3)
      setTheme({
        backgroundImage: "none",
        background: "white",
      });
    console.log(counter);
  }
  function handleFont() {
    setFontCounter((prevValue) => {
      if (prevValue === 3) return 0;
      else return prevValue + 1;
    });
    if (fontCounter === 0)
      setFont({
        fontSize: "1.1em",
      });
    if (fontCounter === 1)
      setFont({
        fontSize: "1.2em",
      });
    if (fontCounter === 2)
      setFont({
        fontSize: "1.3em",
      });
    if (fontCounter === 3)
      setFont({
        fontSize: "1.4em",
      });
  }
  function handleAlign() {
    setAlign((prevValue) => {
      return !prevValue;
    });
  }
  const themeAlign = {
    ...theme,
    textAlign: align ? "left" : "right",
  }
  return (
    <div className="note" style={themeAlign}>
      <ThreeDots
        onTheme={handleTheme}
        onFont={handleFont}
        onAlign={handleAlign}
      />
      <h1
        contentEditable={editContent}
        style={{
          border: editContent ? "1px dashed #3d3d3d52" : "none",
          fontSize: font.fontSize,
        }}
      >
        {props.title}
      </h1>
      <p
        contentEditable={editContent}
        style={{
          border: editContent ? "1px dashed #3d3d3d52" : "none",
          fontSize: font.fontSize,
        }}
      >
        {props.content}
      </p>
      <div className="edit-buttons">
        <button
          onClick={() => {
            //onClick it calls the props delete function and sends the current component props.id
            //to be used inside App.jsx for deleting the note
            //the function called inside an anonnymos function so it runs only after click
            props.onDelete(props.id);
          }}
        >
          <DeleteIcon className="Delete" />
        </button>
        <button onClick={handleEdit}>
          {editContent ? (
            <i className="fa-solid fa-check edit"></i>
          ) : (
            <i className="fa-solid fa-edit edit"></i>
          )}
        </button>
      </div>
    </div>
  );
}

export default Note;
