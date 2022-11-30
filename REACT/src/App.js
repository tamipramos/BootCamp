import './App.css';
import { Note } from './Note.js';
import React, { useState } from 'react'

//Aplicación
export default function App(props) {

  const [notes, setNotes] = useState(props.notes);
  const [newNote, setNewNote] = useState('')
  const [showAll, setShowAll] = useState(true)
  let state=true;
  const handleChanges = (event) => {
    setNewNote(event.target.value);
  }
  const handleSubmit = (event) => {
    event.preventDefault();
    const noteToAddToState = {
      id: notes.length + 1,
      content: newNote,
      date: new Date().toISOString(),
      important: Math.random() < 0.5,
    };
    if (newNote.length >= 4){
    setNotes(notes.concat(noteToAddToState));
    setNewNote("");
    state=true
  }
  else {
    setNewNote("")
    state=false
  }
  }
const handleShowAll = () => {
  setShowAll(() => !showAll)
}
  return (
    <div style={{color: 'white'}}>
      <h1 className='App' style={{color: 'white'}}>Notes</h1>
      
        <form className='App' onSubmit={handleSubmit}>
            <input type='text' onChange={handleChanges} value={newNote}></input>
              <br />
            <button>Insertar Nota</button>
        </form>
        <p>{state ? '' : 'DEBE INSERTAR AL MENOS 4 CARACTERES.'}</p>
        <br />
            <button onClick={handleShowAll}>{showAll ? 'Mostrar importantes' : 'Mostrar todos'}</button>
        <ul style={showAll ? {color: 'cyan'} : {color: 'red'} }>

            {notes
            .filter((note) => {
              if (showAll === true) return true
              return note.important === true
            })
            .map((note) => (
              <Note key={note.id} note={note} />    
            ))}
        </ul>
    </div>
  );
};
