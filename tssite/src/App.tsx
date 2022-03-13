import React, {useEffect, useState} from 'react';
import Card, {CardVariant} from "./components/Card";
import UserList from "./components/UserList";
import {IUser} from "./types/types";
import axios from "axios";

const App = () => {
    // const users :IUser[] = [
    //     {id:1,name:'sadasd',email:'sadasd',address: {city:'London', street:'gelentwagena 14', zipcode: "123"}},
    //     {id:2,name:'gfhfg',email:'sxzczf',address: {city:'Barselona', street:'streetBall 21', zipcode: "123rewq"}}]
    const [users,setUsers]= useState<IUser[]>([])
    useEffect(()=> {
    fetchUsers()
    },[])
    async function fetchUsers() {
        try {
            const response = await axios.get<IUser[]>('https://jsonplaceholder.typicode.com/users')
            setUsers(response.data)
        }catch (e) {
            
        }
    }
    return (
        <div>
          <Card onClick={(num) => console.log(num)} variant={CardVariant.outlined} width='200px' height='100px'>
              <button>Press</button>
          </Card>
            <UserList users={users}></UserList>
        </div>
    );
};

export default App;