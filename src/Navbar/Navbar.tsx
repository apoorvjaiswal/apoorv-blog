import React from 'react'

function Navbar() {
  return (
    <>
    <div className="navbar">
        <h1>DOJO blogs</h1>
        <div className="links">
            <a href="/">Home</a>
            <a href="./create">Create Blog</a>
            {/* <a href="./about"></a> */}
        </div>
    </div>
    </>
  )
}

export default Navbar