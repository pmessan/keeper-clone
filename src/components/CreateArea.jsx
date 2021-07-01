/* eslint-disable react/prop-types */
import React, { useState } from 'react';

function CreateArea(props) {
  const { onAdd } = props;
  const [Note, updateNote] = useState({
    title: '',
    content: '',
  });

  function newNoteHandler(event) {
    onAdd(Note);
    updateNote({ title: '', content: '' });
    event.preventDefault();
  }

  function onNoteChanged(event) {
    const { name, value } = event.target;
    updateNote((prevNote) => ({
      ...prevNote,
      [name]: value,
    }));
  }
  return (
    <div>
      <form onSubmit={newNoteHandler}>
        <input name="title" placeholder="Title" onChange={onNoteChanged} value={Note.title} />
        <textarea name="content" placeholder="Take a note..." rows="3" onChange={onNoteChanged} value={Note.content} />
        <button type="submit">Add</button>
      </form>
    </div>
  );
}

export default CreateArea;
