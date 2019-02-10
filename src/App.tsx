import * as React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import './App.css';
import Background from './components/background/Background';
import CommitteeList from './components/committeelist/CommitteeList';
import Expander from './components/expander/Expander';
import Frame from './components/frame/Frame';
import NavBar from './components/navbar/NavBar';
import PaddingPage from './components/page/PaddingPage';
import Page from './components/page/Page';
import Pane from './components/pane/Pane';

import employment from './lib/Employment';
import { faq } from './lib/Faqs';
import { tandc } from './lib/Tandc';
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
                <iframe src="https://fixr.co/event/225101863?compact=true"
                  style={{width: "400px", height: "550px", border: "none", display: "none", marginTop: "4vh"}} 
                  onLoad={e => e.currentTarget.style.display = ""}/>
              </Page>
              <Page name="committee" title="Committee">
                <CommitteeList/>
              </Page>
              <Page name="employment" title="Employment">
                {
                  employment.map(({role,description}) => 
                    <Expander key={role} heading={role} body={description}/>
                  )
                }
              </Page>
              <Page name="faqs" title="FAQs">
                {
                  faq.map(({heading, questions}) =>
                    <div key={heading}>
                      <h2>{heading}</h2>
                      {questions.map(({question, answer}) =>
                        <Expander key={question} heading={question} body={answer}/>
                      )}
                    </div>
                  )
                }
              </Page>
              <Page name="tandc" title="T+C">
                {
                  tandc.map(({heading, terms}) => [
                    <Expander key={"ex" + heading} heading={heading} body={
                      <ol className="terms">
                      {
                        terms.map(term =>
                          <li key={term}>{term}</li>
                        )
                      }
                      </ol>
                    }/>
                  ])
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
