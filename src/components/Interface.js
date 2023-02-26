import FormFace from './FormFace.js'
import './Interface.css';
const Interface = (props) => {

    const updateHandler = () => {
      const updatedNotes = props.notes.map((note) => {
        if (props.noteId === note.id) {
          return {
            ...note,
            title: document.getElementById("title").value,
            content: document.getElementById("content").value,
          };
        }
        return note;
      });
  
      props.setNotes(updatedNotes);
    };
  
    return (
      <FormFace updateHandler={updateHandler} />
    );
  };
  
  export default Interface;