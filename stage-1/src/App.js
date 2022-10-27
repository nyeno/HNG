//import logo from './logo.svg';
import './App.css';
import slack from './icons/slack.png'
import github from './icons/github.png'
//import Button from './comps/Button';

import i4g from './icons/I4G.png'
import vector from './icons/Vector.png'

function App() {
  return (
    <div className="App">
      <header>
        <img src="https://raw.githubusercontent.com/nyeno/nyeno/main/me.png" alt="avatar" id="profile_img"/>
        <h3>Nyenooke Eno</h3>
        <h1 id="slack">
          nyenooke
        </h1>
      </header>
      <main className="links">
      <a href="https://twitter.com/_laurae" id="twitter" target="_blank" rel="noreferrer">
          Twitter Link
        </a>
        <a href="https://training.zuri.team/" id="btn_zuri" target="_blank" rel="noreferrer">
          Zuri Team
        </a>
        <a href="http://books.zuri.team/" id="books" target="_blank" rel="noreferrer">
          Zuri Books
        </a>
        <a href="https://books.zuri.team/python-for-beginners?ref_id=nyenooke" id="boook_python" target="_blank" rel="noreferrer">
          Python Books
        </a>
        <a href="https://background.zuri.team/" id="pitch" target="_blank" rel="noreferrer">
          Background Checks for coders
        </a>
        <a href="https://books.zuri.team/design-rules" id="book_design" target="_blank" rel="noreferrer">
          Design Books
        </a>
        <div className="socials" id="">
          <img src={slack}/> 
          <img src={github}/>        
        </div>
      </main>
      <footer className="footer" id="">
          <img src={vector} id="vector"/>  
          <p>HNG Internship 9 Frontend Task</p>
          <img src={i4g} id="i4g"/> 
      </footer>
    
    </div>
  );
}

export default App;
