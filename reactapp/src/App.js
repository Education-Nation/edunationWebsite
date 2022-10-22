import './App.css';
import React from 'react';
import {NavigationBar} from './components/index';

import { BrowserRouter as Router, Routes, Route}
    from 'react-router-dom';

import {Home, About, Contact} from './pages/index';

function App() {
  return (
    <div className="App">
      <NavigationBar />
      <div className="application">
        <Router>
          <Routes>
              <Route exact path='/' element={<Home />} />
              <Route path='/about' element={<About />} />
              <Route path='/contact-us' element={<Contact />} />
          </Routes>
          

        </Router>
      </div>
      
    </div>
  );
}

export default App;
