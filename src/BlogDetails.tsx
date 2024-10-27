import React from 'react';
import { json, useParams } from 'react-router-dom';
import useFetch from './useFetch';
import { error } from 'console';

interface IBlog {
  id: number;
  title: string;
  author:string;
  body: string;
}
interface IBlogDetails{

};
const BlogDetails: React.FC<IBlogDetails> = ({}) => {
    const {id}=useParams();
    const {data,isPending, error}=useFetch({url:'http://localhost:8000/blogs/'+id});
    const blog = data as IBlog|null;
    
  return (
    <div>
    {isPending && <div>Loader...</div>}
    {error && <h1> OOPS! Unable to fetch the blog</h1>}
    {data && 
      <div>
    <h1>Title {blog?.title}</h1>
    <br></br>
    <h3>Authored By: {blog?.author}</h3>
    <br></br>
    <p>{blog?.body}</p>
    </div>
    }
    </div>
  );
};

export default BlogDetails;
