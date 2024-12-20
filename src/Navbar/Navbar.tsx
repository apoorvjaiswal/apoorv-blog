import React from 'react'
import { Link } from 'react-router-dom'

function Navbar() {
  return (
    <>
    <div className="navbar">
        <h1>Apoorv Jaiswal Blogs</h1>
        <div className="links">
            <Link to="/">Home</Link>
            <Link to="./create">Create Blog</Link>
        </div>
    </div>
    </>
  )
}

export default Navbar