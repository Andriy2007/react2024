import React, {useEffect, useState} from 'react';
import Todo from "./Todo";
import {todosService} from "../../services/todosService";
import css from "./Todo.module.css";

const Todos = () => {
    const [todos, setTodos] = useState([])

    useEffect(() => {
        todosService.getAll().then(({data}) => setTodos(data))
    }, []);

    return (
        <div className={css.Todos}>
            {todos.map(todo=><Todo key={todo.id} todo={todo}/>)}
        </div>
    );
};
export default Todos;