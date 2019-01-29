import * as React from 'react';
import './App.css';
import Background from './components/background/Background';

class App extends React.Component {
  public render() {
    return (
      <div className="App">
        <Background />
        <div className="foreground">
          <header className="App-header">
            <h1 className="App-title">MEGP 2019</h1>
          </header>
          <p className="App-intro">
            Coming soon!
          </p>
        </div>
      </div>
    );
  }
}

export default App;
