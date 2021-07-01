/* eslint-disable react/prop-types */
import React from 'react';

function Note(props) {
  const {
    title, content, id, onDeleteRequest,
  } = props;

  return (
    <div className="note">
      <h1>{title}</h1>
      <p>{content}</p>
      <button type="button" onClick={() => { onDeleteRequest(id); }}>DELETE</button>
    </div>
  );
}

export default Note;
