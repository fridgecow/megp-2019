import * as React from 'react';

export default class Pane extends React.Component {
  public render() {
    return (
      <div style={{flex: 1, overflowY: "auto", overflowX: "hidden"}}>
        {this.props.children}
      </div>
    );
  }
}
