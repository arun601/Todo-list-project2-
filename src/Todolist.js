import React from "react";

const Todolist=(props)=>{
    return <>
    <div className="todo-style">
    <i className="fa fa-times" aria-hidden="true"
    onClick={()=>{
        props.onselect(props.id)
    }}
    ></i>
    <li>{props.text}</li>

    </div>

    </>
}
export default Todolist;