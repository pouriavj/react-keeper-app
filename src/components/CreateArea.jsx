import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import AddIcon from "@mui/icons-material/Add";
import Fab from "@mui/material/Fab";
import Zoom from "@mui/material/Zoom";
import TypeTools from "./TypeTools";

function CreateArea(props) {
  //UseState variable to track the first time user clicks on the input
  const [formClicked, setFormClicked] = useState(false);

  //Initializing the note constant with useState
  const [note, setNote] = useState({
    title: "",
    content: "",
  });

  const [textStyle, setTextStyle] = useState({
    fontWeight: "",
  });

  function handleChange(event) {
    //Fetching input name and value to use it for saving text
    
    
    const { name, value } = event.target;

    //Saving new inputs inside the note array with useState
    //Using [key]: value syntax to identify the field that is sending text automatically
    return setNote((prevValue) => {
      return {
        ...prevValue,
        [name]: value,
      };
    });
  }
  //The function to set state to true when user clicks on the form
  function initialClick() {
    setFormClicked(true);
  }
  function handleClick(event) {
    //Calling the onnAdd function from props to save note inside App array
    //Sending all of the note object + a unique id for each note to the App
    props.onAdd({
      ...note,
      id: uuidv4(),
    });
    //Reseting the input back to empty after sending it to App
    setNote({
      title: "",
      content: "",
    });
    //Prevent default behaviour of button inside a form which is to refresh the page
    event.preventDefault();
  }

  function setTextStyles(style) {
    if (style === "bold") {
      setTextStyle((prevStyle) => {
        if (prevStyle.fontWeight === "bold") {
          return { ...prevStyle, fontWeight: "" };
        } else {
          return { ...prevStyle, fontWeight: "bold" };
        }
      });
    }
  }
  return (
    <div className="create">
      <form className="create-note">
        {
          //The correct syntax to conditionally rendering the title input only when user clicks on the form, all inside {} ternary opt
          formClicked && (
            <input
              style={textStyle}
              onChange={handleChange}
              name="title"
              placeholder="Title"
              value={note.title}
            />
          )
        }
        <textarea
          style={textStyle}
          onClick={initialClick}
          onChange={handleChange}
          name="content"
          placeholder="Take a note..."
          rows={
            //Render 1 rows if form is not clicked and 3 if its clicked , note rows= {js code ternary opt}
            formClicked ? "10" : "1"
          }
          value={note.content}
        />
        {formClicked && <TypeTools setStyles={setTextStyles} />}
        <Zoom in={formClicked}>
          <Fab className="Fab" onClick={handleClick}>
            <AddIcon />
          </Fab>
        </Zoom>
      </form>
    </div>
  );
}

export default CreateArea;
