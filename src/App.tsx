import * as React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import './App.css';
import Background from './components/background/Background';
import Frame from './components/frame/Frame';
import NavBar from './components/navbar/NavBar';
import Page from './components/page/Page';
import Pane from './components/pane/Pane';

import Logo from './logo.png';


class App extends React.Component {
  public render() {
    return (
      <Router>
        <div className="App">
          <Background />
          <Frame />
          <div className="foreground">
            <Pane>
              <Page name="home">
                <img src={Logo} alt="MEGP 2019" className="logo"/>
                <NavBar />
              </Page>
            </Pane>
            <Pane>
              <Page name="tickets">
                Buy tickets now!
              </Page>
              <Page name="committee">
                Committee members
              </Page>
            </Pane>
          </div>
        </div>
      </Router>
    );
  }
}

export default App;
