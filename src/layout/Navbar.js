import React from 'react'
import { Link } from 'react-router-dom'


export default function navbar() {
  return (
    <div>
<nav className="navbar navbar-expand-lg navbar-dark bg-primary">
  <div className="container-fluid">
    <Link className="navbar-brand" to="/">郵件招領系統</Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
   <Link className='btn btn-outline-light' to="/add">新增</Link>
  </div>
</nav>


        
    </div>
  )
}
