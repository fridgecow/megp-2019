import * as React from 'react';

import "./Expander.css";

interface IExpanderProps {
  heading: any,
  body: any
}

export default class Expander extends React.Component<IExpanderProps> {
  private bodyRef:React.RefObject<HTMLDivElement>;

  constructor(props: IExpanderProps) {
    super(props);
    this.bodyRef = React.createRef();
  }

  public render() {
    return (
      <div className="expand">
        <input onChange={e => {
          const body = this.bodyRef.current;
          if(body){
            const text = body.querySelector(".expand-body");
            if(text){
              if(e.target.checked){
                body.style.height = text.clientHeight + "px";
              }else{
                body.style.height = null;
              }
            }
          }
        }} id={this.props.heading} className="expand-toggle" type="checkbox" defaultChecked={false}/>
        <label htmlFor={this.props.heading} className="expand-heading">
          <span className="expand-heading-text">{this.props.heading}</span>
        </label>
        <div className="expand-body-container" ref={this.bodyRef}>
          <div className="expand-body">
            {
              this.props.body.split
              ? this.props.body.split("\n").map((x : string) => <div key={x}>{x}</div>)
              : this.props.body
            }
          </div>
        </div>
      </div>
    )
  }
}
