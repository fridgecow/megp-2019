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

    if(time < 1550354400*1000){ // Before 16th Feb at 22:00
      return (
        <Page name="tickets" title="Tickets">
            Tickets will be released at 12 noon on Sunday!
        </Page>
      );
    }

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
}
