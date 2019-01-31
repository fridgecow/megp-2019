import * as React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import './App.css';
import Background from './components/background/Background';
import Frame from './components/frame/Frame';
import NavBar from './components/navbar/NavBar';
import PaddingPage from './components/page/PaddingPage';
import Page from './components/page/Page';
import PaddingPane from './components/pane/PaddingPane';
import Pane from './components/pane/Pane';

import { faq } from './lib/Faqs';
import Logo from './logo.png';

class App extends React.Component {
  public render() {
    return (
      <Router>
        <div className="App">
          <Background />
          <Frame />
          <div className="foreground">
            <PaddingPane/>
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
              <Page name="faqs">
                {
                  faq.map(section =>
                    <div key={section.heading}>
                      <h1>{section.heading}</h1>
                      {section.questions.map(qna =>
                        <div key={qna.question}>
                          <p><b>{qna.question}</b></p>
                          <p>{qna.answer}</p>
                          <p/>
                        </div>
                      )}
                    </div>
                  )
                }
              </Page>
              <PaddingPage/>
            </Pane>
            <PaddingPane/>
          </div>
        </div>
      </Router>
    );
  }
}

export default App;
