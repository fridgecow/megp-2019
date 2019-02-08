import * as React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import './App.css';
import Background from './components/background/Background';
import Frame from './components/frame/Frame';
import NavBar from './components/navbar/NavBar';
import PaddingPage from './components/page/PaddingPage';
import Page from './components/page/Page';
import Pane from './components/pane/Pane';

import employment from './lib/Employment';
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
            <Pane>
              <Page name="home">
                <img src={Logo} alt="MEGP 2019" className="logo"/>
                <NavBar />
              </Page>
            </Pane>
            <Pane>
              <Page name="tickets">
                Buy tickets now!
                <iframe src="https://fixr.co/event/225101863?compact=true"
                  style={{width: "500px", height: "550px", border: "none"}} />
              </Page>
              <Page name="committee">
                Committee members
              </Page>
              <Page name="employment">
                {
                  employment.map(({role,description}) => 
                    <div key={role}>
                      <h1>{role}</h1>
                      <p>{description}</p> 
                    </div>
                  )
                }
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
                        </div>
                      )}
                    </div>
                  )
                }
              </Page>
              <PaddingPage/>
            </Pane>
          </div>
        </div>
      </Router>
    );
  }
}

export default App;
