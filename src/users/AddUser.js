import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useState } from 'react';
import axios from 'axios';

export default function AddUser() {
    let navigate = useNavigate()
    const [myPackage, setPackage] = useState({
        packageID: "",
        recipient : "", 
        packageType:"包裹",
        isReceipted: "未領取",
        isNotify: "未通知",
        creationDateTime: new Date(new Date().toString().split('GMT')[0]+' UTC').toISOString()
    })
    
    const { packageID, recipient,packageType,  isReceipted, isNotify, creationDateTime } = myPackage

    const onInputChange = (e) => {
        setPackage({ ...myPackage, [e.target.name]: e.target.value });
    }

    const onSumbit = async (e) => {
        e.preventDefault();
        console.log(myPackage)
        const result = await axios.post(("http://127.0.0.1:8080/package/add"), myPackage)
        // navigate("/")
    };

    return (
        <div className='container'>
            <div className="col-md-6 offset-md-3 border rounded p-4 mt-2 shadow">
                <h2 className="text-center m-4">新增郵件資料</h2>
                <form onSubmit={(e) => onSumbit(e)}>
                    <div className="alert alert-danger" role="alert">
                        This is a danger alert—check it out!
                    </div>
                    <div className="mb-3">
                        <label htmlFor="studentID" className="form-label">
                            Package ID
                        </label>
                        <input
                            type={"text"}
                            className="form-control"
                            placeholder="Enter the Package ID"
                            name="packageID" 
                            value={packageID} //表格裡的值
                            onChange={(e) => onInputChange(e)}
                        />
                    </div>
                   <div className="mb-3">
                        <label htmlFor="Department" className="form-label">
                            Receipted
                        </label>    
                        <input
                            type={"text"}
                            className="form-control"
                            placeholder="Enter the"
                            name="recipient" 
                            value={recipient}
                            onChange={(e) => onInputChange(e)}
                        />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="Name" className="form-label">
                            Package Type
                        </label>
                        <select className="form-select" aria-label="Default select example" value={packageType} onChange={(e) => onInputChange(e)} name="packageType">
                            <option value="信件">信件</option>
                            <option defaultValue value="包裹">包裹</option>
                            <option value="雙掛號">雙掛號</option>
                            <option value="其他">其他</option>
                        </select>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="Email" className="form-label">
                            Receipted
                        </label>
                        <select className="form-select" aria-label="Default select example" value={isReceipted} onChange={(e) => onInputChange(e)} name="isReceipted">
                            <option value="已領取">已領取</option>
                            <option defaultValue value="未領取">未領取</option>
                            <option value="退件">退件</option>
                        </select>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="Department" className="form-label">
                            Notify
                        </label>
                        <select className="form-select" aria-label="Default select example" value={isNotify} onChange={(e) => onInputChange(e)} name="isNotify">
                            <option value="未通知">未通知</option>
                            <option defaultValue value="已通知">已通知</option>
                        </select>
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
