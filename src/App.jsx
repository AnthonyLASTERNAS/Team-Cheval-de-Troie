//import { Link } from "react-router-dom";
//import { ReactPropTypes } from "react";
import "./App.css";
import fond from './assets/fond.jpg';
import logo from './assets/logo.png';

function App() {
  const style = {
    backgroundImage: `url(${fond})`,
    height: '100vh',
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
        <h2>DECOUVRE OU TU PARS EN VACANCES (forcés)*</h2>
        <div></div>
        <h5>*Offert généreusement par les formateurs</h5>
      </>
    </div>
  );
}

export default App;
