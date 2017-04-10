import React from 'react';
import DoubleTimer from '../../component/doubleTimer';

class Test extends React.PureComponent{
  start = () => {
    this.timer.start();
  }

  pause = () => {
    this.timer.pause();
  }

  stop = () => {
    this.timer.stop();
  }

  changeSide = () => {
    this.timer.changeSide();
  }

  render(){
    return(
      <div>
        <DoubleTimer
          ref={timer => this.timer = timer}
          config={{
            name: '正反二辩对辩',
            type: 'double',
            limit: {
              positive: 20,
              negative: 20
            },
            start: 'positive'
          }}
        />
        <button onClick={this.start}>start</button>
        <button onClick={this.pause}>pause</button>
        <button onClick={this.stop}>stop</button>
        <button onClick={this.changeSide}>change side</button>
      </div>
    )
  }
}

export default Test;
