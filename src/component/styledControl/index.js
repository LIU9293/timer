import React from 'react';
import PropTypes from 'prop-types';
import {
  StartButton,
  ChangeSideButton,
  NextSectionButton,
  StopButton,
} from '../controlButton';
import {
  ControlWrapper,
  NextButton,
} from './style';

class StyledControl extends React.PureComponent{
  static propTypes = {
    type: PropTypes.string.isRequired,
    pause: PropTypes.bool.isRequired,
  }

  static defaultProps = {
    pause: false,
  }

  render(){
    const { type } = this.props;
    if(type === 'single'){
      return(
        <ControlWrapper>
          <StartButton
            onStart={this.props.onSingleStart}
            onPause={this.props.onSinglePause}
            pause={this.props.pause}
          />
          <StopButton
            onClick={this.props.onSingleStop}
          />
          <NextButton>
            <NextSectionButton
              onClick={this.props.onNextSection}
            />
          </NextButton>
        </ControlWrapper>
      );
    } else {
      return(
        <ControlWrapper>
          <StartButton
            onStart={this.props.onDoubleStart}
            onPause={this.props.onDoublePause}
            pause={this.props.pause}
          />
          <StopButton
            onClick={this.props.onDoubleStop}
          />
          <ChangeSideButton
            onClick={this.props.onChangeSide}
          />
          <NextButton>
            <NextSectionButton
              onClick={this.props.onNextSection}
            />
          </NextButton>
        </ControlWrapper>
      );
    }
  }
}

export default StyledControl;
