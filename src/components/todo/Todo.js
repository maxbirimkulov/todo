import React from 'react';
import '@fortawesome/fontawesome-free/css/all.css'
import '@fortawesome/fontawesome-free/js/fontawesome.min'
import './todo.css'


const Todo = ({todoObj, setTodos, todos, status}) => {
    const deleteTodo = () => {
        setTodos(todos.map((item) => {
            return item.id === todoObj.id ? {...item, isDeleted : !item.isDeleted } : item
         }))
    };
    const delete2Todo = () => {
        setTodos(todos.filter((item) => {
            return item.id !== todoObj.id
         }))
    };
    const doneTodo = () => {
        setTodos(todos.map((item) => {
            return item.id === todoObj.id ? {...item, isActive: !item.isActive} : item
        }))
    };
    const importantTodo = () => {
        setTodos(todos.map((item) => {
            return item.id === todoObj.id ? {...item, isImportant: !item.isImportant} : item
        }))
    }; 
    const changeTodo = () => {
        setTodos(todos.map((item) => {
            return item.id === todoObj.id ? {...item, isChange: !item.isChange} : item
        }))
    };



    const textareaHandler = (e) => {
        return todoObj.todoName = e.target.value
    };

    
    return (
        <li className='todoList__task'>
            {todoObj.isChange
            ? <textarea  defaultValue={todoObj.todoName} className='todoList__input' onChange={textareaHandler}/>
            : <p className={`todoList__name
             ${todoObj.isActive ? 'active' : 'done'}
             ${todoObj.isImportant ? 'important' : ''}
            `}
                > {todoObj.todoName}</p>
            }
            {status === 'recent'
                ? <div className='todoList__btns'>
                    <button className=' btn btn-outline-danger' type='button' onClick={delete2Todo}>
                        <i className="fas fa-eraser"></i>
                    </button>
                    <button className="btn btn-warning" onClick={deleteTodo}>ReStore</button>
                </div>
                :    <div className='todoList__btns'>
                    <button className={`btn btn-outline-secondary ${todoObj.isChange ? 'active' : ''}`} type='button'
                            onClick={changeTodo}>
                        <i className="fas fa-edit"></i>
                    </button>
                    <button className={`btn btn-outline-success ${todoObj.isActive ? '' : 'active'}`} type='button'
                            onClick={doneTodo}>
                        <i className="fas fa-check-double"></i>
                    </button>
                    <button className={`btn btn-outline-warning ${todoObj.isImportant ? 'active' : ''}`} type='button'
                            onClick={importantTodo}>
                        <i className="fas fa-exclamation-triangle"></i>
                    </button>
                    <button className=' btn btn-outline-danger' type='button' onClick={deleteTodo}>
                        <i className="fas fa-eraser"></i>
                    </button>
                </div>
            }

        </li>
    );
};

export default Todo;



