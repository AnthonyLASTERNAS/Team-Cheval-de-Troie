import React from 'react';
import logo from './logo.png';
import background from './fond.jpg';

function App() {
  const style = {
    backgroundImage: `url(${background})`,
    height: '100vh',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
  };

  return (
    <div>
      <img src={logo} alt="Logo" />
      <div style={style}>
        <h1>Mon application avec un fond en écran</h1>
      </div>
    </div>
  );
}

export default App;
