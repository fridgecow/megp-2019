import * as React from 'react';
import './Frame.css';

export default class Border extends React.Component {
  public render() {
    return (
      <div className="border">
        <div className="border-corners"/>
        <div className="border-x"/>
        <div className="border-y"/>
      </div>
    );
  }
}
