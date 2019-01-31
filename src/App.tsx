import * as React from 'react';
import './App.css';
import Background from './components/background/Background';
import Frame from './components/frame/Frame';
import NavBar from './components/navbar/NavBar';
import Page from './components/page/Page';
import Pane from './components/pane/Pane';

import { faq } from './lib/Faqs';
import Logo from './logo.png';

class App extends React.Component {
  public render() {
    return (
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
          </Pane>
        </div>
      </div>
    );
  }
}

export default App;
