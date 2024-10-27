import React, { useEffect, useState } from 'react';
import useFetch from './useFetch';
import { useNavigate } from 'react-router-dom';

interface ICreateComponent {
  handleSubmit?: any;
};
const CreateComponent: React.FC<ICreateComponent> = ({ }) => {
  const [blogTitle, setBlogTitle] = useState('');
  const [selectedOption, setSelectedOption] = useState('');
  const [blogBody, setBlogBody] = useState('');
  // const [triggerFetch, setTriggerFetch] = useState(false);
  const url = 'http://localhost:8000/blogs';
  const navigate = useNavigate();


  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const body = { title: blogTitle, author: selectedOption, body: blogBody };
    navigate('/');
    if(body!=null){
      try {
        const options: RequestInit = {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(body),
        };
        const response = await fetch(url, options);
        if (!response.ok) {
          console.log(response.json());
        }
        else {
          console.log(response.json());
        }
        const result = await response.json();
      } catch (error: any) {
        console.log(error.message);
      }
    }
    navigate(0);
  };

  return (
    <div>
      <h1>Add a new Blog</h1>
      <form onSubmit={handleSubmit}>
        <p> Add Blog title</p>
        <input
          type='text'
          required
          value={blogTitle}
          onChange={(e) => {
            setBlogTitle(e.target.value);
          }} />
        <p>Add author</p>
        <select
          defaultValue=""
          value={selectedOption}
          onChange={(e) => {
            setSelectedOption(e.target.value);
          }}>
          <option value="">Select an Option</option>
          <option value="apoorv">apoorv</option>
          <option value="aishwary">aishwary</option>
          <option value="ayushi">ayushi</option>
        </select>
        <p>Add body</p>
        <textarea
          required
          onChange={(e) => { setBlogBody(e.target.value) }} ></textarea>
        <br />
        <button type='submit'>Submit</button>
      </form>
    </div>
  );
};

export default CreateComponent;