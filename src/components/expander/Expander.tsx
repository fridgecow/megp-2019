import * as React from 'react';

import "./Expander.css";

interface IExpanderProps {
  heading: any,
  body: any
}

export default class Expander extends React.Component<IExpanderProps> {
  constructor(props: IExpanderProps) {
    super(props);
  }

  public render() {
    return (
      <div className="expand">
        <input id={this.props.heading} className="expand-toggle" type="checkbox" defaultChecked={false}/>
        <label className="expand-heading" htmlFor={this.props.heading}>{this.props.heading}</label>
        <div className="expand-body">{this.props.body}</div>
      </div>
    )
  }
}
