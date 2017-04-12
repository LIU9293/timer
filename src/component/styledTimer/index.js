import React from 'react';
import PropTypes from 'prop-types';
import { Circle } from 'rc-progress'
import TimerCore from 'component/timerCore';
import {
  TimerWrapper,
  TimerLayer,
  Highlighter,
  TimerWrapperInner,
} from './style';
import fontStyle from './fontStyle';

class StyledTimer extends React.PureComponent{
  static propTypes = {
    length: PropTypes.number.isRequired
  }

  state = {
    percent: 100,
  }

  onGoing = (secondsLeft) => {
    const nextPercent = parseInt(secondsLeft*100/this.props.length, 10);
    this.setState({
      percent: nextPercent
    }, this.props.onGoing);
  }

  onStop = () => {
    this.setState({
      percent: 100
    }, this.props.onStop);
  }

  render(){
    return(
      <TimerWrapper>
        <TimerWrapperInner>
          <TimerLayer>
            <Circle
              percent={this.state.percent.toString()}
              strokeWidth="2"
              strokeColor="#D3D3D3"
              style={{width: '300px', height: '300px'}}
              trailWidth="0"
              trailColor="transparent"
            />
          </TimerLayer>
          <TimerLayer>
            <TimerCore
              {...this.props}
              onStop={this.onStop}
              onGoing={this.onGoing}
              style={fontStyle}
              ref={timer => this.timerCore = timer}
            />
          </TimerLayer>
          {this.props.highlight && <Highlighter />}
        </TimerWrapperInner>
      </TimerWrapper>
    );
  }
}

export default StyledTimer;
