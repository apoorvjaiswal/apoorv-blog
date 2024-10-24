import React from 'react';
import Navbar from './Navbar/Navbar';
import Home from './Home';
// import {Router,Route,Switch,Link,Navigate} from react-router-dom;
function App() {
  const title="adjad";
  const likes=50;
  const person={author:"apoorv", age:25};
  const link="https://www.google.com"
  return (
    /* convert everytgin to string except booleans and objects*/
    <div className="App">
      {/* <Router> */}
      <header className="content">
        <Navbar/>
        {/* <Switch  */}
        <Home/>
       </header>
       {/* </Router> */}
    </div>
  );
}

export default App;
