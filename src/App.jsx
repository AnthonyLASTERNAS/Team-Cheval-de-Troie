import fond from "./assets/fond.jpg";
import logo from "./assets/logo.png";
import Affichage from "./pages/Affichage";
import Formulaire from "./pages/Formulaire";
// import Weather from "./components/WeatherService.jsx";
import "./components/logo.css";
import "./pages/App.scss";
import "./App.css";
import "./components/WeatherService.jsx";
import { useState } from "react";
import cancun from "./assets/pays/mexique/cancun.jpg";



function App() {
  const [destination, setDestination] = useState(false);
  const style = {
    backgroundImage: `url(${fond})`,
    height: "100vh",
    width: "250vh",
    backgroundSize: "cover",
    backgroundPosition: "center",
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

      
        <input type="checkbox" id="chk" />
        <label htmlFor="chk" click this styled checkbox />
        <input type="text" placeholder="Australie" />

        <input type="checkbox" id="chk" />
        <label htmlFor="chk" click this styled checkbox />
        <input type="text" placeholder="Chine" />

        <input type="checkbox" id="chk" />
        <label htmlFor="chk" click this styled checkbox />
        <input type="text" placeholder="Costa rica" />

        <input type="checkbox" id="chk" />
        <label htmlFor="chk" click this styled checkbox />
        <input type="text" placeholder="France" />

        <input type="checkbox" id="chk" />
        <label htmlFor="chk" click this styled checkbox />
        <input type="text" placeholder="Mexique" />

        <input type="checkbox" id="chk" />
        <label htmlFor="chk" click this styled checkbox />
        <input type="text" placeholder="Suisse" />

        <input type="checkbox" id="chk" />
        <label htmlFor="chk" click this styled checkbox />
        <input type="text" placeholder="Turquie" />
        <div className="container">
          {destination && (
            <span>
              <img src={cancun} alt="" />
            </span>
          )}
        </div>
        <h3>DECOUVRE OU TU PARS EN VACANCES (forcées)*</h3>

        <div>
          <button
            className="glow-on-hover"
            type="button"
            onClick={() => setDestination(!destination)}
          >
            A toi de jouer!
          </button>
        </div>
        <div>
          <Formulaire />
              
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
        <Affichage />
        <h5>*Offert généreusement par les formateurs</h5>
      </>
    </div>
  );
}

export default App;
