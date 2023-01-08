import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { Link, useParams } from 'react-router-dom';
export default function Home() {

    const [packages,setPackageData]=useState([])
    
    const deletePackage=async(packageID)=>{
        await axios.delete(`http://127.0.0.1:8080/package/${packageID}`)
        loadPackageData()
    }
    
    //useState 會在render之後被呼叫
    useEffect(()=>{
        loadPackageData()
    },[]);

    const loadPackageData=async()=>{
        const result=await axios.get("http://127.0.0.1:8080/package/getAll")
        setPackageData(result.data)
    }
    return (
        <div className='contiainer'>
            <div className='py-4'>
                <table className="table border shadow">
                    <thead>
                        <tr>
                            <th scope="col">#</th>
                            <th scope="col">郵件ID</th>
                            <th scope="col">郵件種類</th>
                            <th scope="col">收件人</th>
                            <th scope="col">通知狀態</th>
                            <th scope="col">郵件狀態</th>
                            <th scope="col">登入日期</th>
                            <th scope="col">操作</th>

                        </tr>
                    </thead>
                    <tbody>
                        {
                            packages.map((mypackage,index)=>(
                            <tr>    
                            <th scope="row" key={index}>{index+1}</th>
                            <td>{mypackage.packageID}</td>
                            <td>{mypackage.packageType}</td>
                            <td>{mypackage.recipient}</td>
                            <td>{mypackage.isNotify}</td>
                            <td>{mypackage.isReceipted}</td>
                            {/* <td>{Intl.DateTimeFormat('zh-TW', {year: 'numeric', month: '2-digit',day: '2-digit', hour: '2-digit', minute: '2-digit', second: '2-digit'}).format(mypackage.creationDateTime)}</td> */}
                            <td>{mypackage.creationDateTime.replace('T',' ').substring(0,mypackage.creationDateTime.lastIndexOf('.'))}</td>
                            <td>
                                <button className='btn btn-primary mx-2'>詳細資料</button>
                                <Link className='btn btn-outline-primary mx-2' to={`/edit/${mypackage.packageID}`}>編輯</Link>
                                <button className='btn btn-danger mx-2' onClick={()=>deletePackage(mypackage.packageID)}>刪除</button>
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
