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
    }, 1000);
  }

  public render(){
    return ( 
      <Page name="tickets">
        {
          this.state.error ?
            <a className="navlink" href="https://fixr.co/event/225101863">Click Here To Buy Tickets</a>
            :
            <iframe src="https://fixr.co/event/225101863?compact=true"
              style={{width: "400px", height: "550px", border: "none", display: this.state.loaded ? "" : "none", marginTop: "4vh"}} 
              onLoad={e => this.setState({loaded: true})}
              onError={e => this.setState({error: true}) }/>
        }
      </Page>
    )
  }
}
