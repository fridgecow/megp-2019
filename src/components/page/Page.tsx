import * as React from 'react';

import "./Page.css";

interface IPageProps {
  name: string;
}

export default class Page extends React.Component<IPageProps> {
  public render() {
    return (
      <div className="page">
        {this.props.children}
      </div>
    );
  }
}
