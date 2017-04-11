import React from 'react';
import PropTypes from 'prop-types';
import DoubleTimer from '../doubleTimer';
import SingleTimer from '../styledTimer';
import {
  StartButton,
  ChangeSideButton,
  NextSectionButton,
  StopButton,
} from '../controlButton';
import {
  Wrapper,
  ControlWrapper,
} from './style';

class Section extends React.PureComponent{
  static propTypes = {
    type: PropTypes.oneOf(['single', 'double']).isRequired,
    config: PropTypes.object.isRequired
  }

  state = {
    pause: false,
  }

  onDoubleStart = () => {
    this.doubleTimer.start();
    this.setState({
      pause: true
    });
  }

  onDoublePause = () => {
    this.doubleTimer.pause();
    this.setState({
      pause: false
    });
  }

  onDoubleStop = () => {
    this.doubleTimer.stop();
    if(this.state.pause){
      this.setState({
        pause: false
      });
    }
  }

  onChangeSide = () => {
    this.doubleTimer.changeSide();
  }

  onSingleStart = () => {
    this.singleTimer.timerCore.start();
    this.setState({
      pause: true
    });
  }

  onSinglePause = () => {
    this.singleTimer.timerCore.pause();
    this.setState({
      pause: false
    });
  }

  onSingleStop = () => {
    this.singleTimer.timerCore.stop();
    if(this.state.pause){
      this.setState({
        pause: false
      });
    }
  }

  onNextSection = () => {

  }

  render(){
    const { type } = this.props;
    if(type === 'single'){
      return(
        <Wrapper>
          <SingleTimer ref={timer => this.singleTimer = timer} length={this.props.config.limit} />
          <ControlWrapper>
            <StartButton
              onStart={this.onSingleStart}
              onPause={this.onSinglePause}
              pause={this.state.pause}
            />
            <StopButton
              onClick={this.onSingleStop}
            />
            <NextSectionButton
              onClick={this.onNextSection}
            />
          </ControlWrapper>
        </Wrapper>
      )
    } else {
      return(
        <Wrapper>
          <DoubleTimer ref={timer => this.doubleTimer = timer} config={this.props.config} />
          <ControlWrapper>
            <StartButton
              onStart={this.onDoubleStart}
              onPause={this.onDoublePause}
              pause={this.state.pause}
            />
            <StopButton
              onClick={this.onDoubleStop}
            />
            <ChangeSideButton
              onClick={this.onChangeSide}
            />
            <NextSectionButton
              onClick={this.onNextSection}
            />
          </ControlWrapper>
        </Wrapper>
      )
    }
  }
}

export default Section;
