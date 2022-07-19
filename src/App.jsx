import React from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import "./App.scss";
import Navbar from "./components/Navbar";
import Sidebar from './components/Sidebar';
import Dashboard from './pages/Dashboard';

function App() {
  return (
    <Router>
        <section className='App'>
        <section className="sidebar">
          <Sidebar/>
        </section>
        <section className='display-window'>
          <Navbar />
          <Routes>
          <Route path='/' element={<Dashboard/>}/>
          <Route path='/application' element={<Dashboard/>}/>
         </Routes>
        </section>
        </section>
       
    </Router>
  );
}

export default App;
