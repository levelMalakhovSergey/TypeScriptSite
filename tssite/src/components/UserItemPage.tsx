import React, {FC, useEffect, useState} from 'react';
import {IUser} from "../types/types";
import axios from "axios";
import {useNavigate, useParams} from "react-router-dom";

interface UserItemPageParams {
    id:string;
}
const UserItemPage:FC = () => {
    const [user,setUser]= useState<IUser | null>(null)
    const params = useParams()
    const history= useNavigate();
    useEffect(()=> {
        fetchUsers()
    },[])
    async function fetchUsers() {
        try {
            const response = await axios.get<IUser>('https://jsonplaceholder.typicode.com/users/' + params.id)
            setUser(response.data)
        }catch (e) {
            alert(e)
        }
    }
    return (
        <div>
            <button onClick={() => history('/users')}>Back</button>
            <h1>{user?.name}'s  Page</h1>
            <div>
                {user?.email}+ { "  "}  {user?.address.city}  {user?.address.street} {user?.address.zipcode}
            </div>
        </div>
    );
};

export default UserItemPage;