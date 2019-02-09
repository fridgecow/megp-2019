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
        <label htmlFor={this.props.heading} className="expand-heading">
          <span className="expand-heading-text">{this.props.heading}</span>
        </label>
        <div className="expand-body">
          {
            this.props.body.split
            ? this.props.body.split("\n").map((x : string) => <div key={x}>{x}</div>)
            : this.props.body
          }
        </div>
      </div>
    )
  }
}
