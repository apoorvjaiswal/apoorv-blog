import React from 'react'
import { Link } from 'react-router-dom';
interface IBlog {
  id: number;
  title: string;
  body: string;
}
interface IBlogListProps {
  blogs: IBlog[];
  title: string;
  handledelete?: any;
}
const BlogList: React.FC<IBlogListProps> = ({ blogs, title, handledelete }) => {
  return (
    <div className="blog-list">
      <h1>{title}</h1>
      {blogs.map((blog: any) => (
        <Link to={`/${blog.id}`}>
          <div className="blog-preview" key={blog.id}>
            <h2>{blog.title}</h2>
            <p>Written by {blog.author}</p>
            <button onClick={() => (handledelete(blog.id))}>Delete</button>
          </div>
        </Link>
      ))}
    </div>
  )
}

export default BlogList