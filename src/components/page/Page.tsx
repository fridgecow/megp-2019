import * as React from 'react';
import { Route } from 'react-router-dom';

import "./Page.css";

interface IPageProps {
  name: string;
  title?: string;
}

export default class Page extends React.Component<IPageProps> {
  constructor(props: IPageProps) {
    super(props);
  }

  public render() {
    return (
      <Route path={`/${this.props.name}`} children={
        ({match}) => {
          return (
            <div className={`page ${this.props.name}`} ref={
              (el:HTMLDivElement)=>{
                if(match !== null && el !== null){
                  el.scrollIntoView();
                }
              }
            }>
              { this.props.title ?
                <h1>{this.props.title.toUpperCase()}</h1>
                : null
              }
              {this.props.children}
            </div>
          );
        }
      } />
    );
  }
}
