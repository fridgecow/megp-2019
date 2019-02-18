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

import { faq } from './lib/Faqs';
import { tandc } from './lib/Tandc';
import Logo from './logo.png';

import TicketPage from './page/TicketPage';

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
              <TicketPage />
              <Page name="committee" title="Committee">
                <CommitteeList/>
              </Page>
              <Page name="charity" title="Charity">
                <p>
                  This year the Murray Edwards Garden Party committee are proud to announce that our chosen charity is Cool Earth. They will receive funds through both charitable donations made following <a href="https://www.coolearth.org/get-involved/donate-cool-earth/">this</a> link and from collection buckets roaming around the gardens on the day. We are also extremely delighted that £1 from every official after party ticket sold will be donated to Cool Earth.  
                </p>

                <p>
                  They are an incredibly worthy non-profit organisation who are striving to halt tropical rainforest destruction, having already saved 901,679 acres globally, to address the ensuing climate crisis and support local communities.
                </p>
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
              <Page name="tandc" title="Terms and Conditions">
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
