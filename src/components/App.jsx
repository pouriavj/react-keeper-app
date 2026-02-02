import React, { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import CreateArea from "./CreateArea";
import Loading from "./Loading";


function App() {
  //Initializing the notes array to show notes on the page
  const [notes, setNotes] = useState([]);

  //addNote function that is been sent to be called inside the CreateArea component
  function addNote(note) {
    setNotes((prevValue) => {
      return [...prevValue, note];
    });
  }
  //deleteNote function that is sent to Note.jsx and recieves note id 
  //and uses that id to filter all notes except that note with filter
  //used inside useState function with its prevValue
  function deleteNote(id){
    setNotes(prevValue =>{
      return prevValue.filter((item) =>{
        return item.id !== id
      })
    })
  }
  return (
    <div className="page-container">
      <Loading />
      <Header />
      <CreateArea onAdd={addNote} />
      <div className="container">
      {notes.map((item) => (
        // Using map function to render a Note component for each note item 
        // and send its key,id,title,content to the Note.jsx
        // Using arrow annonymos function with just one input one output, and put the whole map + component inside {}
        
        <Note
          key={item.id}
          id={item.id}
          title={item.title}
          content={item.content}
          onDelete={deleteNote}
        />
        
      ))}
      </div>
      <Footer />
    </div>
  );
}

export default App;
