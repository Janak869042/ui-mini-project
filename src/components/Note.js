import UpdateNote from "./UpdateNote";

const Note = (props) => {
  const onDeleteHandler = (id) => {
    const filtered = props.notes.filter((note) => note.id !== id);
    props.setNotes(filtered);
  };
  const onUpdateHandler = (id) => {
    props.setNoteId(id);
  };

  return (
    <ul>
      {props.notes.length !== 0 ? (
        props.notes.map((note) => (
          <UpdateNote
            key={note.id}
            id={note.id}
            title={note.title}
            content={note.content}
            onDelete={onDeleteHandler}
            onUpdate={onUpdateHandler}
          />
        ))
      ) : (
        <div>
          <h5>Note will show here.....</h5>
        </div>
      )}
    </ul>
  );
};
export default Note;
