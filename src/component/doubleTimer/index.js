import React from 'react';
import PropTypes from 'prop-types';
import StyledTimer from '../styledTimer';

class DoubleTimer extends React.PureComponent{
  static propTypes = {
    config: PropTypes.object.isRequired,
    onFirstEnd: PropTypes.func,
    onSecondEnd: PropTypes.func,
  }

  side = this.props.config.start;
  going = false;
  timer = {};

  start = () => {
    this.timer[this.side].timerCore.start();
    this.going = true;
  }

  pause = () => {
    this.timer[this.side].timerCore.pause();
    this.going = false;
  }

  stop = () => {
    this.timer.positive.timerCore.stop();
    this.timer.negative.timerCore.stop();
    this.going = false;
  }

  changeSide = () => {
    if(this.going){
      if(this.side === 'positive'){
        this.timer.positive.timerCore.pause();
        this.timer.negative.timerCore.start();
        this.side = 'negative';
      } else {
        this.timer.negative.timerCore.pause();
        this.timer.positive.timerCore.start();
        this.side = 'positive';
      }
    } else {
      if(this.side === 'positive'){
        this.side = 'negative';
      } else {
        this.side = 'positive';
      }
    }
  }

  onFirstEnd = (side) => {
    if(side === 'positive'){
      this.timer.negative.timerCore.start();
    } else {
      this.timer.positive.timerCore.start();
    }
    if(this.props.onFirstEnd){
      this.props.onFirstEnd();
    }
  }

  onSecondEnd = () => {
    this.going = false;
    if(this.props.onSecondEnd){
      this.props.onSecondEnd();
    }
  }

  onEnd = (side) => {
    if(side === 'positive'){
      if(this.timer.negative.timerCore.state.secondsLeft > 0){
        this.onFirstEnd('positive');
      } else {
        this.onSecondEnd();
      }
    } else {
      if(this.timer.positive.timerCore.state.secondsLeft > 0){
        this.onFirstEnd('negative');
      } else {
        this.onSecondEnd();
      }
    }
  }

  render(){
    const { limit } = this.props.config;
    return(
      <div>
        <StyledTimer
          ref={timer => this.timer.positive = timer}
          onEnd={() => this.onEnd('positive')}
          length={limit.positive}
        />
        <StyledTimer
          ref={timer => this.timer.negative = timer}
          onEnd={() => this.onEnd('negative')}
          length={limit.negative}
        />
      </div>
    );
  }
}

export default DoubleTimer;
