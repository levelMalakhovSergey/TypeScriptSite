import React, {useEffect, useState} from 'react';
import ReactDOM from 'react-dom';
import {Link, Route, Routes} from 'react-router-dom'
import UsersPage from "./components/UsersPage";
import TodosPage from "./components/TodosPage";
import UserItemPage from "./components/UserItemPage";
import TodoItemPage from "./components/TodoItemPage";

const App = () => {

    return (

            <div>
                <div style={{background: "blanchedalmond"}}>
                    <Link style={{boxSizing:"border-box", padding: 15,fontSize:'16px', fontWeight:'600',color:"black"} } to={'/users'}>Users</Link>
                    <Link style={{boxSizing:"border-box", padding: 15,fontSize:'16px', fontWeight:'600',color:"black"}} to={'/todos'}>Todos</Link>
                </div>
                <Routes>
                    <Route  path="/users" element={ <UsersPage/> } />
                    <Route path="/todos" element={ <TodosPage/> } />
                    <Route path="/users/:id" element={ <UserItemPage/> } />
                    <Route path="/todos/:id" element={ <TodoItemPage/> } />
                </Routes>
            </div>

    );
};

export default App;