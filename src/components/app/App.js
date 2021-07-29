import React,{useState, useEffect} from 'react';
import Header from "../header";
import Search from "../search";
import TodoList from "../todoList";
import AddTodo from "../addTodo";
import 'bootswatch/dist/sketchy/bootstrap.min.css';
import './app.css'

const App = () => {
    const [todos, setTodos] = useState([]);
    const [inputText, setInputText] = useState('');
    const [status, setStatus] = useState('all');
    const [search, setSearch] = useState('');

    useEffect(()=>{
        setTodos(JSON.parse(localStorage.getItem('todos')))
    },[]);
    useEffect(()=>{
        localStorage.setItem('todos', JSON.stringify(todos));
        },[todos]);


    return (
        <div className='app'>
            <div className='app-container'>
                <Header todos={todos}/>
                <Search status={status} setStatus={setStatus} setSearch={setSearch}/>
                {status === 'all' && todos.filter((item)=>{
                    return !item.isDeleted
                }).length === 0
                    ? <p>Здесь будут ваши задания</p>
                    : status === 'active' && todos.filter((item)=>{
                        return item.isActive && !item.isDeleted
                    }).length === 0
                    ? <p>Здесь будут ваши активные задания</p>
                    : status === 'done' && todos.filter((item)=>{
                            return !item.isActive && !item.isDeleted
                        }).length === 0
                    ? <p>Здесь будут ваши выполненные задания</p>
                    : status === 'recent' && todos.filter((item)=>{
                                return item.isDeleted
                            }).length === 0
                    ? <p>Здесь будут ваши недавно удаленные задания</p>
                    : <TodoList search={search} status={status} setTodos={setTodos} todos={todos}/>
                }
                <AddTodo status={status} inputText={inputText} setInputText={setInputText} todos={todos} setTodos={setTodos}/>
            </div>
        </div>
    );
};

export default App;