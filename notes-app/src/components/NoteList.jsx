import React from "react";
import Note from "./Note";

function NotesList(props) {
  const { listOfNotes, onClickDeleteNote } = props;

  const isEmptyNotesList = listOfNotes.length === 0;

  const createList = () => {
    return listOfNotes.map((item, index) => (
      <Note
        key={`note${index}`}
        noteIndex={index}
        titleNote={item.title}
        textNote={item.text}
        dateToday={item.date}
        onClickDeleteNote={onClickDeleteNote}
      />
    ));
  };

  return (
    <div className="notesList">
      {isEmptyNotesList ? <div>No Notes</div> : createList()}
    </div>
  );
}

export default NotesList;
