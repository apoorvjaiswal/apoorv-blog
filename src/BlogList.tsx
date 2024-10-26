import React from 'react'
import { Link, Navigate, useNavigate } from 'react-router-dom';
interface IBlog {
  id: number;
  title: string;
  author:string;
  body: string;
}
interface IBlogListProps {
  blogs: IBlog[];
  title: string;
  handledelete?: any;
}
const BlogList: React.FC<IBlogListProps> = ({ blogs, title, handledelete }) => {
  
  const navigate = useNavigate();
  const handleDelete=(id:Number)=>{
    fetch('http://localhost:8000/blogs/' + id,{
      method: 'DELETE'
    })
    navigate(0);
  }
  
  return (
    <div className="blog-list">
      <h1>{title}</h1>
      {blogs.map((blog: any) => (
        <Link to={`/${blog.id}`}>
          <div className="blog-preview" key={blog.id}>
            <h2>{blog.title}</h2>
            <p>Written by {blog.author}</p>
            <Link to='/'>
            <button onClick={(e) => {handleDelete(blog.id)}}>Delete</button>
            </Link>
          </div>
        </Link>
      ))}
    </div>
  )
}

export default BlogList