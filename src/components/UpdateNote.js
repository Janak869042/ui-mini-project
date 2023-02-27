import './UpdateNote.css'
const UpdateNote = (props) => {

    const onClickDeletesHandler = () => {
        props.onDelete(props.id)
    }
    const onClickUpdatesHandler = () => {
      props.onUpdate(props.id)
    }

  return (
    <div className="update-mains">
    <div className="update-main">
      <h3>{props.title}</h3>
      <p>{props.content}</p>
      </div>
      <button onClick={onClickDeletesHandler}>Delete</button>
      <button 
      data-bs-toggle="modal" 
      data-bs-target="#exampleModal" 
      onClick={onClickUpdatesHandler}>
      Update</button>
    </div>
  );
};

export default UpdateNote;
