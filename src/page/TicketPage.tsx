import * as React from 'react';
import Page from '../components/page/Page';

export default class TicketPage extends React.Component{
  public state = {
    error: false,
    loaded: false
  }

  public componentDidMount() {
    window.setTimeout(() => {
      if(!this.state.loaded){
        this.setState({error: true});
      }
    }, 3000);
  }

  public render(){
    const time = Date.now()

    if (time < 1550491200*1000) { // Before 18th Feb at 12:00
      return ( 
        <Page name="tickets">
          {
            this.state.error ?
              <a className="navlink" href="https://fixr.co/event/225101863">CLICK HERE TO BUY TICKETS</a>
              :
              <iframe src="https://fixr.co/event/225101863?compact=true"
                    style={{
                      width: "90vw",
                      maxWidth: "400px",
                      height: "550px",
                      border: "none",
                      marginTop: "4vh",
                      display: this.state.loaded ? "" : "none"
                    }} 
                onLoad={e => this.setState({loaded: true})}
                onError={e => this.setState({error: true}) }/>
          }
        </Page>
      );
    }

    return ( 
      <Page name="tickets" title="Name Change">
        {
          <div>
            <p>Tickets to MEGP19 have now sold out. If you want to transfer any of your tickets, please purchase a transfer option below:</p>
            {
            this.state.error ?
              <a className="navlink" href="https://fixr.co/event/109609730">CLICK HERE TO BUY NAME CHANGES</a>
              :
              <iframe src="https://fixr.co/event/109609730?compact=true"
                    style={{
                      width: "90vw",
                      maxWidth: "500px",
                      height: "550px",
                      border: "none",
                      marginTop: "4vh",
                      display: this.state.loaded ? "" : "none"
                    }} 
                onLoad={e => this.setState({loaded: true})}
                onError={e => this.setState({error: true}) }/>
            }
          </div>
        }
      </Page>
    );
  }
}
