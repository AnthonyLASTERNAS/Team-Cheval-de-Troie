//import { Link } from "react-router-dom";
//import { ReactPropTypes } from "react";
import "./App.css";
import fond from './assets/fond.jpg';
import logo from './assets/logo.png';
import TimeWea from "./pages/TimeWea";
import './components/logo.css';

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
        <h2>Incite toi à prendre des vacances</h2>
        <div>
          <span></span>
        </div>
        <h3>DECOUVRE OU TU PARS EN VACANCES (forcés)*</h3>
        <div></div>
        <h5>*Offert généreusement par les formateurs</h5>
        <TimeWea />
      </>
    </div>
  );
}

export default App;
