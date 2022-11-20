
import './App.css';
import Navbar from './components/Navbar';
import Landing from './components/Landing';
import Security from './components/Security'
import BuildSavings from './components/Buildsavings'
import Returns from './components/Returns'
import MonthSaver from './components/Monthsaver'
import Customers from './components/Customers'
import Featured from './components/Featured'
import Footer from './components/Footer'

function App() {
  return (
    <div>
      <Navbar />
      <main className='mx-24 space-y-32 my-20'>
        <Landing />
        <Security />
        <BuildSavings />
        <Returns />
        <MonthSaver />
        <Customers />
        <Featured />
      </main>

      <Footer />
    </div>
  );
}

export default App;
