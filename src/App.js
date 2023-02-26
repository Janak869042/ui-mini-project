import React, { useState } from "react";
import './App.css'
import NoteForm from "./components/NoteForm";
import NoteHeader from "./components/NoteHeader";
import Note from "./components/Note";
import Interface from "./components/Interface";
//retrieve data from local
const noteFromLocalStorage = () => {
  let getNote = JSON.parse(localStorage.getItem("notes"));
  if (getNote) {
    return getNote;
  }
  return [];
};
const App = () => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  const [notes, setNotes] = useState(noteFromLocalStorage);

  const [noteId, setNoteId] = useState("");
//store data for local
  localStorage.setItem("notes", JSON.stringify(notes));
  return (
    <div>
      <NoteHeader />
      <Interface
        noteId={noteId} setNoteId={setNoteId}
        notes={notes} setNotes={setNotes}
      />
      <NoteForm
        title={title} setTitle={setTitle} content={content} setContent={setContent}
        setNotes={setNotes}
      />
      <Note notes={notes} setNotes={setNotes} setNoteId={setNoteId} />
    </div>
  );
};
export default App;
