import React from 'react';

interface ICreateComponent {
};
const CreateComponent: React.FC<ICreateComponent> = ({}) => {
  return (
    <div>
        <h1>Add a new Blog</h1>
        <p> Add Blog title</p>
        <input></input>
        <p>Add author</p>
        <select ></select>
        <p>Add body</p>
        <textarea></textarea>
        <br/>
        <button >Submit</button>
    </div>
  );
};

export default CreateComponent;
