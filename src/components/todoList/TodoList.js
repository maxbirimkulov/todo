import React from 'react';
import './todoList.css'
import Todo from "../todo";

const TodoList = ({todos,setTodos, status,search}) => {
    return (
        <ul className='todoList'>
            {todos.filter((item)=>{
                switch (status) {
                    case 'active' :{
                        return item.isActive && !item.isDeleted
                    }
                    case 'done' : {
                        return  !item.isActive && !item.isDeleted
                    }
                    case 'recent' : {
                        return  item.isDeleted
                    }
                    default:
                        return item && !item.isDeleted
                }
            }).filter((item)=>{
                return item.todoName.startsWith(search)
            }).map((item)=>{
                return <Todo status={status} todoObj={item} todos={todos} setTodos={setTodos}  key={item.id} />
            })}
        </ul>
    );
};

export default TodoList;






