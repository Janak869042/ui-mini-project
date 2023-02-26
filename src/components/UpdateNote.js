import './UpdateNote.css'
const UpdateNote = (props) => {

    const onClickDeletesHandler = () => {
        props.onDelete(props.id)
    }
    const onClickUpdatesHandler = () => {
      props.onUpdate(props.id)
    }

  return (
    <div className="update-delete">
      <h2>{props.title}</h2>
      <p>{props.content}</p>
      <button onClick={onClickDeletesHandler}>Delete</button>
      <button data-bs-toggle="modal" data-bs-target="#exampleModal" onClick={onClickUpdatesHandler}>Update</button>
    </div>
  );
};

export default UpdateNote;
