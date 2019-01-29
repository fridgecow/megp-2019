import * as React from 'react';
import Border from './Border';

import './Background.css';

export default class Background extends React.Component {
  public render() {
    return (
      <div className="background">
        <Border/>
      </div>
    );
  }
}

