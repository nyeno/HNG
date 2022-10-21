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
        <h3 id="twitter">@_laurae</h3>
        <h1 id="slack">
          @_laurae
        </h1>
      </header>
      <main className="links">
        <a href="https://training.zuri.team/" id="btn_zuri">
          Zuri Team
        </a>
        <a href="http://books.zuri.team/" id="books">
          Zuri Books
        </a>
        <a href="https://books.zuri.team/python-for-beginners?ref_id=Lauraeno" id="boook_python">
          Python Books
        </a>
        <a href="https://background.zuri.team/" id="pitch">
          Background Checks for coders
        </a>
        <a href="https://books.zuri.team/design-rules" id="book_design">
          Design Books
        </a>
        <div className="socials" id="">
          <img src={slack}/>  
          <img src={github}/>        
        </div>
      </main>
      {//<footer className="footer" id="">
          //<img src={vector}/>  
          //<p>HNG Internship 9 Frontend Task</p>
          //<img src={i4g}/> 
      //</footer>-->
    }
    </div>
  );
}

export default App;
