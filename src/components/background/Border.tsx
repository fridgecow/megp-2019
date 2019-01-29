import * as React from 'react';
import './Background.css';

export default class Border extends React.Component {
  public render() {
    return (
      <div className="background">
        <div className="border-corners"/>
        <div className="border-x"/>
        <div className="border-y"/>
      </div>
    );
  }
}
