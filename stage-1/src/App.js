
import './App.css';

import Contact from './comps/Contact';
import { Routes, Route, Link } from 'react-router-dom';
import Home from './comps/Home';


function App() {
  return (
    <div className="App">
      <Routes>
        <Route exact path='/' element={<Home/>} />
        <Route exact path='/contact' element={<Contact/>} />
      </Routes>
    </div>
  );
}

export default App;
