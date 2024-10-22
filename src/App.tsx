import React from 'react';
import Navbar from './Navbar/Navbar';
import Home from './Home';
function App() {
  const title="adjad";
  const likes=50;
  const person={author:"apoorv", age:25};
  const link="https://www.google.com"
  return (
    /* convert everytgin to string except booleans and objects*/
    <div className="App">
      <header className="content">
        <Navbar/>
        <Home/>
       </header>
    </div>
  );
}

export default App;
