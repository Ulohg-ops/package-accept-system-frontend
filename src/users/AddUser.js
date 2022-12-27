import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import {useState} from 'react';
import axios from 'axios';

export default function AddUser() {
let navigate=useNavigate()

    const [user, setUsers] = useState({
        id:"",
        name: "",
        email: "",
        department: ""
    })
    const { id,name, email, department } = user

    const onInputChange = (e) => {
        setUsers({ ...user, [e.target.name]: e.target.value });
    }

    const onSumbit =async (e) => {
        e.preventDefault();
        await axios.post(("http://127.0.0.1:8080/student/add"),user)
        navigate("/")
    };

    return (
        <div className='container'>
            <div className="col-md-6 offset-md-3 border rounded p-4 mt-2 shadow">
                <h2 className="text-center m-4">Register User</h2>
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
