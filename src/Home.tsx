import { constants } from 'buffer';
import React, { useState } from 'react'
import BlogList from './BlogList';

function Home() {
    const[blogs,setBlogs]=useState([
        {title:"My Journey",body:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",author:'apoorv', id:1},
        {title:"My life",body:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",author:'aishwary', id:2},
        {title:"Mai hoon khalnayak",body:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",author:'ayushi', id:3}
    ]);
    const handleDelete=(id:number)=>{
        setBlogs(blogs.filter((blog:any)=>blog.id===id));
    }
  return (
    <div className="home">
        <BlogList blogs={blogs} handledelete={handleDelete} title="All Blogs"/>
        <BlogList blogs={blogs.filter((blog:any)=>blog.author==='apoorv')}  title="My Blogs"/>
    </div>
  )
}

export default Home