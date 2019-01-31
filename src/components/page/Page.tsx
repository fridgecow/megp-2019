import * as React from 'react';
import { Route } from 'react-router-dom';

import "./Page.css";

interface IPageProps {
  name: string;
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
            <div className="page" ref={
              (el:HTMLDivElement)=>{
                if(match !== null){
                  el.scrollIntoView();
                }
              }
            }>
              {this.props.children}
            </div>
          );
        }
      } />
    );
  }
}
