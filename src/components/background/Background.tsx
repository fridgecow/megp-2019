import * as React from 'react';

import './Background.css';

export default class Background extends React.Component {
  private balloonPositions = [
    {x: 55, y: 27, v: 0.1, o: Math.random()},
    {x: 48, y: 40, v: 0.1, o: Math.random()},
    {x: 53, y: 59, v: -0.1, o: Math.random()},
    {x: 47, y: 72, v: -0.1, o: Math.random()}
  ];
  private bgRef: React.RefObject<HTMLDivElement>;
  private animationStart = 0;

  constructor(){
    super({})
    this.bgRef = React.createRef();
  }

  public animateBalloons = (t: DOMHighResTimeStamp) => {
    if(!this.animationStart){
      this.animationStart = t;
    }

    if(this.bgRef.current){
      const bg = this.bgRef.current;
      bg.style.backgroundPosition = this.balloonPositions.map(
        ({x, y, o}) => `${x + o*Math.sin((t - this.animationStart)/(o*500 + 100) + o)}% ${y}%`
      ).join(", ")
    }

    // Update positions
    this.balloonPositions = this.balloonPositions.map(
      ({x, y, v, o, ...other}) => ({x, v, y: y + v*(1 + o), o, ...other})
    );
    window.requestAnimationFrame(this.animateBalloons);
  }

  public componentDidMount() {
    // Register for space press
    document.addEventListener('keypress', e => {
      if(e.key === " " && !this.animationStart){
        window.requestAnimationFrame(this.animateBalloons);
      }
    });
  }

  public render() {
    return (
      <div className="background" ref={this.bgRef}/>
    );
  }
}

