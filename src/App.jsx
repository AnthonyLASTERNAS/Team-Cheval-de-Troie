//import { Link } from "react-router-dom";
//import { ReactPropTypes } from "react";
import "./App.css";
import fond from './assets/fond.jpg';
import logo from './assets/logo.png';
import TimeWea from "./pages/TimeWea";
import './components/logo.css';
import './pages/App.scss';

function App() {
  const style = {
    backgroundImage: `url(${fond})`,
    height: '100vh',
    width: '250vh',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
  };

  
  return (
    <div className="App" style={style}>
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      </header>
      <>
        <h1>Cheval de Troie</h1>
<p>tour opérateur</p>
        <h2>Incite toi à prendre des vacances</h2>


        <input type="checkbox" id="chk"/>
<label for="chk" click this styled checkbox/>
<input type= "text" placeholder="Australie"/>

<input type="checkbox" id="chk"/>
<label for="chk" click this styled checkbox/>
<input type= "text" placeholder="Chine"/>

<input type="checkbox" id="chk"/>
<label for="chk" click this styled checkbox/>
<input type= "text" placeholder="Costa rica"/>

<input type="checkbox" id="chk"/>
<label for="chk" click this styled checkbox/>
<input type= "text" placeholder="France"/>

<input type="checkbox" id="chk"/>
<label for="chk" click this styled checkbox/>
<input type= "text" placeholder="Mexique"/>

<input type="checkbox" id="chk"/>
<label for="chk" click this styled checkbox/>
<input type= "text" placeholder="Suisse"/>

<input type="checkbox" id="chk"/>
<label for="chk" click this styled checkbox/>
<input type= "text" placeholder="Turquie"/>
<div>
   <span>
          </span>
        </div>
        <h3>DECOUVRE OU TU PARS EN VACANCES (forcés)*</h3>

        <div>
          <button class="glow-on-hover" type="button">A toi de jouer!</button>
          </div>
       <div>
       <button class="form" type="button">A toi de jouer!</button>
       </div>
        <h5>*Offert généreusement par les formateurs</h5>
        <TimeWea />
      </>
    </div>
  );
}

export default App;