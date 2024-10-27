import React from 'react';
import Navbar from './Navbar/Navbar';
import Home from './Home';
import { BrowserRouter as Router, Routes, Route, Link, Navigate } from 'react-router-dom';
import CreateComponent from './create';
import BlogDetails from './BlogDetails';
import { json } from 'stream/consumers';
import EditBlog from './EditBlog';

function App() {
  const handleSubmit=async ()=>{
    const response=await fetch('http://localhost:8000/blogs',
      {method:'POST',
        headers:{'Content-Type': 'application/json'
        },
        body:JSON.stringify({key:"sds"})
    });
  }

  return (
    /* convert everytgin to string except booleans and objects*/
    <Router>
      <div className="App">
      <Navbar />
        <div className="content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/create" element={<CreateComponent 
            // handleSubmit={handleSubmit}
            />}/>
            <Route path="/:id" element={<BlogDetails/>}/>
            <Route path='/edit/:id' element={<EditBlog/>}/>
          </Routes>
        </div>

      </div>
    </Router>
  );
}

export default App;
