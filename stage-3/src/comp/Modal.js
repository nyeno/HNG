import React from 'react';
import meta from '../assets/icons/metam.png'
import walletconnect from '../assets/icons/walletconnet.png'
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';


const Modal = (props) => {
  return (
    <div className='flex justify-center'>
      <div className="fixed bg-modal top-0 h-screen w-screen z-10" onClick={props.closeModal} />
      <div className="fixed bg-white m-auto w-[37.5rem] top-1/3 rounded-2xl z-20">
        <header className="flex justify-between py-6 px-8 border-b border-borderColor ">
          <h2 className='text-2xl font-bold'>Connect Wallet</h2>
          <button onClick={props.closeModal}>X</button>
        </header>
        <main className="py-6 px-8 space-y-4">
          <p>Choose your preferred wallet:</p>
          <div className='flex justify-between items-center border rounded-xl py-2.5 px-5 border-borderColor'>
            <img src={meta} alt="Choosed MetaMask"/>
            <span><ArrowForwardIosIcon /></span>
          </div>
          <div className='flex justify-between items-center border rounded-xl py-3 px-5 border-borderColor'>
            <img src={walletconnect} alt="Choosed WalletConnect"/>
            <span><ArrowForwardIosIcon /></span>
          </div>
        </main>
      </div>
    </div>
  );
};

export default Modal;

