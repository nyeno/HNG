import { useState } from 'react';
import './App.css';
import Navbar from './comp/Navbar';
import { Routes, Route} from 'react-router-dom';
import Home from './pages/Home';
import Nfts from './pages/Nfts';
import Community from './pages/Community';
import PlaceToStay from './pages/PlaceToStay';
import Footer from './comp/Footer';
import Modal from './comp/Modal';

function App() {
  const [openModal, setOpenModal] = useState(false)
  const chooseWallet = () =>{
    setOpenModal(true)
  }
  const closeModal = () =>{
    setOpenModal(false)
  }
  return (
    <div className="App">
      <Navbar wallet={chooseWallet}/>
      {openModal && <Modal closeModal={closeModal}/>}
      <Routes>
        <Route exact path='/' element={<Home/>} />
        <Route exact path='/place-to-stay' element={<PlaceToStay/>} />
        <Route exact path='/nfts' element={<Nfts/>} />
        <Route exact path='/community' element={<Community/>} />
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;
