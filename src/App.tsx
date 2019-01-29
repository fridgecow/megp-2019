import * as React from 'react';
import './App.css';
import Background from './components/background/Background';
import Frame from './components/frame/Frame';

import Logo from './logo.png';

class App extends React.Component {
  public render() {
    return (
      <div className="App">
        <Background />
        <Frame />
        <div className="foreground">
          <img src={Logo} alt="MEGP 2019" className="logo"/>
          <p className="App-intro">
            Coming soon!
          </p>
        </div>
      </div>
    );
  }
}

export default App;
