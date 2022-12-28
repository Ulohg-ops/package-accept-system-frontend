import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { Link, useParams } from 'react-router-dom';
export default function Home() {

    const [users,setUsers]=useState([])
    
    const deleteUser=async(userid)=>{
        await axios.delete(`http://127.0.0.1:8080/student/${userid}`)
        loadUsers()
    }
    
    //useState 會在render之後被呼叫
    useEffect(()=>{
        loadUsers()
    },[]);

    const loadUsers=async()=>{
        const result=await axios.get("http://127.0.0.1:8080/student/getAll")
        setUsers(result.data)
    }
    return (
        <div className='contiainer'>
            <div className='py-4'>
                <table className="table border shadow">
                    <thead>
                        <tr>
                            <th scope="col">#</th>
                            <th scope="col">StudentID</th>
                            <th scope="col">Name</th>
                            <th scope="col">Email</th>
                            <th scope="col">Department</th>
                            <th scope="col">Action</th>

                        </tr>
                    </thead>
                    <tbody>
                        {
                            users.map((user,index)=>(
                            <tr>    
                            <th scope="row" key={index}>{index+1}</th>
                            <td>{user.id}</td>
                            <td>{user.name}</td>
                            <td>{user.email}</td>
                            <td>{user.department}</td>
                            <td>
                                <button className='btn btn-primary mx-2'>View</button>
                                <Link className='btn btn-outline-primary mx-2' to={`/edituser/${user.id}`}>Edit</Link>
                                <button className='btn btn-danger mx-2' onClick={()=>deleteUser(user.id)}>Delete</button>
                            </td>
                            </tr>
                            ))
                        }
                    </tbody>
                </table>
            </div>
        </div>
    )
}
