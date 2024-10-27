import React from 'react'
import { Link, Navigate, useNavigate } from 'react-router-dom';
interface IBlog {
  id: number;
  title: string;
  author: string;
  body: string;
}
interface IBlogListProps {
  blogs: IBlog[];
  title: string;
  handledelete?: any;
}
const BlogList: React.FC<IBlogListProps> = ({ blogs, title }) => {

  const navigate = useNavigate();
  const handleDelete = async (id: Number) => {
    await fetch('http://localhost:8000/blogs/' + id, {
      method: 'DELETE'
    })
    navigate(0);
  }

  return (
    <div className="blog-list">
      <h1>{title}</h1>
      {blogs.length != 0 ? blogs.map((blog: any) => (
        <Link to={`/${blog.id}`}>
          <div className="blog-preview" key={blog.id}>
            <h2>{blog.title}</h2>
            <p>Written by {blog.author}</p>
            <div className='blogButtonContainer'>
              <Link to='/'>
                <button onClick={(e) => { e.preventDefault(); blog.id ? handleDelete(blog.id) : console.log("pass") }}>Delete</button>
              </Link>
              <Link to={`/edit/${blog.id}`}>
                <button>Edit</button>
              </Link>
            </div>
          </div>
        </Link>
      )) : <p>No Blogs Created... Start your Blogging journey by creating a new one</p>}
    </div>
  )
}

export default BlogList