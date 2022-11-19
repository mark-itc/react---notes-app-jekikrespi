import React from "react";

function FormList(props) {
  const { onAddNoteClick } = props;
  return (
    <form className="notesform">
      <button className="addNoteButton" onClick={onAddNoteClick}>
        Add Note
      </button>
    </form>
  );
}

export default FormList;
