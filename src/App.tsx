import React from 'react';
import Navbar from './Navbar/Navbar';
import Home from './Home';
import { BrowserRouter as Router, Routes, Route, Link, Navigate } from 'react-router-dom';
import CreateComponent from './create';
import BlogDetails from './BlogDetails';

function App() {
  return (
    /* convert everytgin to string except booleans and objects*/
    <Router>
      <div className="App">
      <Navbar />
        <div className="content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/create" element={<CreateComponent/>}/>
            <Route path="/:id" element={<BlogDetails/>}/>
          </Routes>
        </div>

      </div>
    </Router>
  );
}

export default App;
