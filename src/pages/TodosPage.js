import React from 'react';
import Todos from "../commponents/TodosContainer/Todos";
import {Outlet} from "react-router-dom";

const TodosPage = () => {
    return (
        <div style={{display:'flex'}}>
            <Todos/>
            <Outlet/>
        </div>
    );
};

export default TodosPage;