import React from 'react';
import './addTodo.css'

const AddTodo = ({todos,setTodos,setInputText, inputText, status}) => {



    const addTodo = (e)=>{
        e.preventDefault();
        setTodos([...todos, {
            todoName : inputText,
            isActive:true,
            isImportant:false,
            isChange:false,
            isDeleted:false,
            id: Math.floor(Math.random() * 1000)
        }]);
        setInputText('')
    };
    const inputHandler = (e)=>{
        setInputText(e.target.value)
    };
    return (
        <form action="" className='addTodo' onSubmit={addTodo}>
            {status === 'done' || status === 'recent'
              ?  <input type="text" className='addTodo__input' value={inputText} disabled placeholder='disabled'/>
              :  <input required className='addTodo__input' type="text" placeholder='What need to be done' onChange={inputHandler} value={inputText}/>
            }

            <button className='addTodo__btn' type='submit'>Add todo</button>
        </form>
    );
};

export default AddTodo;