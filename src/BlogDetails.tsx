import React from 'react';
import { json, useParams } from 'react-router-dom';
import useFetch from './useFetch';
import { error } from 'console';

interface IBlog {
  id:number;
  author:string;
  body:string;
};
interface IBlogDetails{

};
const BlogDetails: React.FC<IBlogDetails> = ({}) => {
    const {id}=useParams();
    const {data,error,isPending}=useFetch({url:'http://localhost:8000/blogs/'+id});
    console.log(json(data));
    // debugger;
    // const blog=data<IBlog>;
    
  return (
    <div>
    {isPending && <div>Loader...</div>}
    {error && <h1> OOPS! Unable to fetch the blog</h1>}
    {data && 
      <div>
    <h1>Blog number {id}</h1>
    <h3>Authored By: {data.author}</h3>
    {/* <p>{data.body}</p> */}
    </div>
    }
    </div>
  );
};

export default BlogDetails;
