
import './App.css';

import Contact from './comps/Contact';
import { Routes, Route} from 'react-router-dom';
import Home from './comps/Home';
import Footer from './comps/Footer';


function App() {
  return (
    <div className="App">
      <Routes>
        <Route exact path='/' element={<Home/>} />
        <Route exact path='/contact' element={<Contact/>} />
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;
