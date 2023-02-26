import React from "react";
import './NoteForm.css';
const NoteForm=(props)=>{

    const titleChangeHandler=(event)=>{
        props.setTitle(event.target.value);
    };
    const DescriptionChangeHandler=(event)=>{
        props.setContent(event.target.value );
    };
const submitHandler=(event)=>{
event.preventDefault();
const noteData ={
    id:Math.random().toString(),
title:props.title,
content:props.content,
};
//console.log(ExpenseData); instead of logging pass it and use it
props.setNotes(prevData=>[noteData,...prevData]);
props.setContent('');
props.setTitle('');
};
return(
    <form onSubmit={submitHandler} >
        <div className="new-expense__controls">
        <div className="new-expense__control">
                <label>Title</label>
                <input type="text" onChange={titleChangeHandler} value={props.title}/>
            </div>
            <div className="new-expense__control">
                <label>Description</label>
                <textarea cols={39} rows={6} value={props.content} onChange={DescriptionChangeHandler}/>
            </div>
        </div>
        <div className="new-expense__actions">
        <button type="submit">Add Note</button>
       </div>
    </form>
);
};
export default NoteForm;