import React, { useEffect } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';
import {useState} from 'react';
import axios from 'axios';

export default function EditUser() {
let navigate=useNavigate()

const {userid}=useParams()

const [user, setUser] = useState({
        id:"",
        name: "",
        email: "",
        department: ""
    })
    const { id,name, email, department } = user

    const onInputChange = (e) => {
        setUser({ ...user, [e.target.name]: e.target.value });
    }

    useEffect(()=>{
        loadUsers()
    },[])

    const onSumbit =async (e) => {
        e.preventDefault();
        await axios.put(`http://127.0.0.1:8080/student/${userid}`,user)
        navigate("/")
    };

    const loadUsers=async ()=>{
        const result=await axios.get(`http://127.0.0.1:8080/student/${userid}`)
        console.log(userid)
        setUser(result.data)
    }

    return ( 
        <div className='container'>
            <div className="col-md-6 offset-md-3 border rounded p-4 mt-2 shadow">
                <h2 className="text-center m-4">Edit User</h2>
                <form onSubmit={(e)=>onSumbit(e)}>
                <div className="mb-3">
                        <label htmlFor="studentID" className="form-label">
                        studentID
                        </label>
                        <input
                            type={"text"}
                            className="form-control"
                            placeholder="Enter your StudentID"
                            name="id"
                            value={id}
                            onChange={(e) => onInputChange(e)}
                        />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="Name" className="form-label">
                            Name
                        </label>
                        <input
                            type={"text"}
                            className="form-control"
                            placeholder="Enter your name"
                            name="name"
                            value={name}
                            onChange={(e) => onInputChange(e)}
                        />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="Email" className="form-label">
                            Email
                        </label>
                        <input
                            type={"text"}
                            className="form-control"
                            placeholder="Enter your Email"
                            name="email"
                            value={email}
                            onChange={(e) => onInputChange(e)}
                        />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="Department" className="form-label">
                            Department
                        </label>
                        <input
                            type={"text"}
                            className="form-control"
                            placeholder="Enter your department"
                            name="department"
                            value={department}
                            onChange={(e) => onInputChange(e)}

                        />
                    </div>
                    <button type="submit" className="btn btn-outline-primary">
                        Submit
                    </button>
                    <Link className="btn btn-outline-danger mx-2" to="/">
                        Cancel
                    </Link>
                </form>
            </div>
        </div>
    )
}
