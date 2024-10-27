import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import useFetch from './useFetch';
import BlogDetails from './BlogDetails';

interface IEditBlog {
};
interface IBlog {
    id: number;
    title: string;
    author:string;
    body: string;
  }
const EditBlog: React.FC<IEditBlog> = ({}) => {
    const navigate= useNavigate();
    const {id}=useParams();
    const {data,isPending, error}=useFetch({url:'http://localhost:8000/blogs/'+id});
    const blogData= data as IBlog|null;
    const [title,setTitle]= useState('');
    const [author,setAuthor]= useState('');
    const [body, setBody] = useState('');
    const [isLoading, setIsLoading]=useState(true);
    useEffect(()=>{
      if(blogData)
      {
        setTitle(blogData.title);
        setAuthor(blogData.author);
        setBody(blogData.body);
        setIsLoading(false);
      }
    },[blogData]);

    const EditBlogDetails=async (id:any)=>{
        
        const options:RequestInit={
            method:'PUT',
            headers:{
            'Content-Type':'application/json'
            },
            body:JSON.stringify({id:id,title:title,author:author,body:body})
        }
        const response=await fetch(`http://localhost:8000/blogs/${id}`,options);
        if(!response.ok)
            console.log(response.status);
        else
        navigate('/');
    }

  return isLoading?(<p>Loading</p>) :( <div className="editContainer">
    <div className="editBlogContainer">
    <p>Blog Title:</p>
    <input value={title} onChange={(e)=>setTitle(e.target.value)}></input>
    <p>Select Author</p>
    <select
          defaultValue=""
          value={author}
          onChange={(e) => {
            setAuthor(e.target.value);
          }}>
          {/* <option value="">Select an Option</option> */}
          <option value="apoorv">apoorv</option>
          <option value="aishwary">aishwary</option>
          <option value="ayushi">ayushi</option>
        </select>
    <p>Blog Body</p>
    <textarea value={body} onChange={(e)=>setBody(e.target.value)}></textarea>
    </div>
    <button type='submit' onClick={(e)=>{e.preventDefault();EditBlogDetails(id);navigate('/');}}>Update details</button>
    </div>);
};

export default EditBlog;
