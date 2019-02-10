import * as React from 'react';

import "./Pane.css";

export default class Pane extends React.Component {
  public render() {
    return (
      <div className="pane">
        {this.props.children}
      </div>
    );
  }
}
