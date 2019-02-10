import * as React from 'react';

import "./Page.css";

export default class PaddingPane extends React.Component {
  public render() {
    return (
      <div className="page padding-page">
        Website by <a href="mailto:farnworthharry@gmail.com">Harry Farnworth</a> and <a href="https://www.fridgecow.com">Tom Benn</a><br />Graphic Design by Tom Childs        
      </div>
    );
  }
}
