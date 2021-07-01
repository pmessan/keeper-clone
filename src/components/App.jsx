/* eslint-disable react/no-array-index-key */
import React, { useState } from 'react';
import Header from './Header';
import Footer from './Footer';
import Note from './Note';
import CreateArea from './CreateArea';

function App() {
  const [notesArray, updateNotesArray] = useState([]);

  function addNote(note) {
    updateNotesArray([...notesArray, note]);
  }

  function deleteNote(noteId) {
    updateNotesArray(notesArray.filter((note, index) => index !== noteId));
  }

  return (
    <div>
      <Header />
      <CreateArea onAdd={addNote} />
      {notesArray.map((note, index) => (
        <Note
          key={index}
          id={index}
          title={note.title}
          content={note.content}
          onDeleteRequest={deleteNote}
        />
      ))}
      <Footer />
    </div>
  );
}

export default App;
