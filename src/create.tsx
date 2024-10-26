import React, { useEffect, useState } from 'react';
import useFetch from './useFetch';

interface ICreateComponent {
  handleSubmit?: any;
};
const CreateComponent: React.FC<ICreateComponent> = ({}) => {
  const [blogTitle,setBlogTitle]= useState('');
  const [selectedOption,setSelectedOption]=useState('');
  const [blogBody,setBlogBody]=useState('');
  const [triggerFetch,setTriggerFetch] = useState(false);
  const url='http://localhost:8000/blogs';

  useEffect(()=>{
    const { data, error, isPending } = useFetch({ url:url, method :'GET', body : null })
  },[triggerFetch])

  return (
    <div>
        <h1>Add a new Blog</h1>
        <form onSubmit={useFetch}>
        <p> Add Blog title {blogTitle}</p>
        <input 
        type='text'
        required
        value={blogTitle} 
        onChange={(e)=>{
          setBlogTitle(e.target.value);
        }}/>
        <p>Add author {selectedOption}</p>
        <select 
        defaultValue=""
        value={selectedOption} 
        onChange={(e)=>{
          setSelectedOption(e.target.value);
        }}>
          <option value="">Select an Option</option>
          <option value="apoorv">apoorv</option>
          <option value="aishwary">aishwary</option>
          <option value="ayushi">ayushi</option>
        </select>
        <p>Add body {blogBody}</p>
        <textarea 
        required
        onChange={(e)=>{setBlogBody(e.target.value)}} ></textarea>
        <br/>
        
        <button>Submit</button>
        </form>
    </div>
  );
};

export default CreateComponent;