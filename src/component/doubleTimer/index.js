import React from 'react';
import PropTypes from 'prop-types';
import Timer from '../timer';

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
    this.timer[this.side].start();
    this.going = true;
  }

  pause = () => {
    this.timer[this.side].pause();
    this.going = false;
  }

  stop = () => {
    this.timer.positive.stop();
    this.timer.negative.stop();
    this.going = false;
  }

  changeSide = () => {
    if(this.going){
      if(this.side === 'positive'){
        this.timer.positive.pause();
        this.timer.negative.start();
        this.side = 'negative';
      } else {
        this.timer.negative.pause();
        this.timer.positive.start();
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
      this.timer.negative.start();
    } else {
      this.timer.positive.start();
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
      if(this.timer.negative.state.secondsLeft > 0){
        this.onFirstEnd('positive');
      } else {
        this.onSecondEnd();
      }
    } else {
      if(this.timer.positive.state.secondsLeft > 0){
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
        <Timer
          ref={timer => this.timer.positive = timer}
          onEnd={() => this.onEnd('positive')}
          length={limit.positive}
        />
        <Timer
          ref={timer => this.timer.negative = timer}
          onEnd={() => this.onEnd('negative')}
          length={limit.negative}
        />
      </div>
    );
  }
}

export default DoubleTimer;
