import React, { useRef } from "react";
import classes from './NewTodos.module.css'

const NewTodos:React.FC<{onAddTodo:(text:string) => void}> = (props) => {
    //when we use props then we also need to define its a functional component add generic type and add function ,parameter and its type
  const todoTextInputRef = useRef<HTMLInputElement>(null);

  const submitFormHandler = (event: React.FormEvent) => {
    event.preventDefault();

    const enteredTodo = todoTextInputRef.current!.value;
     // the ? is becouse the ref does't have set value when we use yet
     //u can use ! on place of ? ,use ! mark when you 100% sure that input field does't empty
      if(enteredTodo.trim().length === 0){
        //error
        return;
      }

      props.onAddTodo(enteredTodo)
    
      todoTextInputRef.current!.value=('')
};
  return (
    <form onSubmit={submitFormHandler} className={classes.form}>
      <label htmlFor="text">Todo Text</label>
      <input type="text" id="text" ref={todoTextInputRef} />
      <button>Add todo </button>
    </form>
  );
};

export default NewTodos;
