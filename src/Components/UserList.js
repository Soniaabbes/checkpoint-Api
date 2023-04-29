import axios from 'axios'
import React, { useEffect, useState } from 'react'
import UserCard from './UserCard'

function UserList() {
    const [users, setUsers]=useState ([])
    useEffect (()=>{
        axios
        .get (`https://jsonplaceholder.typicode.com/users`)
        .then((res)=> setUsers(res.data))
        .catch((error)=> console.log(error))
    },[])
  return (
    <div className='Card'>
        {
           users.map(user=>(<UserCard user={user}/>)) 
        }
      
    </div>
  )
}

export default UserList