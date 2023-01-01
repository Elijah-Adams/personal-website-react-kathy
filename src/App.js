import './App.css';
import Appbar from './Appbar'
import React from 'react';
import { Route, Routes } from 'react-router';
import Home from './pages/Home';
import Resume from './pages/ResumeTest';
import Contact from './pages/Contact';

function App() {
  return (
    <div className="App">
      <header className="App-header">

        <Appbar />

        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='Resume' element={<Resume />} />
          <Route path='Contact' element={<Contact />} />
        </Routes>
      
      </header>
    </div>
  );
}

export default App;
