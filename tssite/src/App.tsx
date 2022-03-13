import React, {useEffect, useState} from 'react';
import Card, {CardVariant} from "./components/Card";
import UserList from "./components/UserList";
import {ITodo, IUser} from "./types/types";
import axios from "axios";
import List from "./components/List";
import UserItem from "./components/UserItem";
import TodoItem from "./components/TodoItem";

const App = () => {
    // const users :IUser[] = [
    //     {id:1,name:'sadasd',email:'sadasd',address: {city:'London', street:'gelentwagena 14', zipcode: "123"}},
    //     {id:2,name:'gfhfg',email:'sxzczf',address: {city:'Barselona', street:'streetBall 21', zipcode: "123rewq"}}]
    const [users,setUsers]= useState<IUser[]>([])
    const [todos,setTodos]= useState<ITodo[]>([])
    useEffect(()=> {
    fetchUsers()
    fetchTodos()
    },[])
    async function fetchUsers() {
        try {
            const response = await axios.get<IUser[]>('https://jsonplaceholder.typicode.com/users')
            setUsers(response.data)
        }catch (e) {
            
        }
    }
    async function fetchTodos() {
        try {
            const response = await axios.get<ITodo[]>('https://jsonplaceholder.typicode.com/todos?_limit=10')
            setTodos(response.data)
        }catch (e) {

        }
    }
    return (
        <div>
          <Card onClick={(num) => console.log(num)} variant={CardVariant.outlined} width='200px' height='100px'>
              <button>Press</button>
          </Card>
            <List items={users} renderItem={(user:IUser) => <UserItem user={user} key={user.id}/> }/>
            <List items={todos} renderItem={(todo:ITodo) => <TodoItem todo={todo} key={todo.id}/> }/>
        </div>
    );
};

export default App;