import { constants } from 'buffer';
import React, { useState } from 'react'

function Home() {
    const[blogs,setBlogs]=useState([
        {title:"My Journey",Body:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",author:'apoorv', id:1}
    ])
  return (
    <div className="home">
        
    </div>
  )
}

export default Home