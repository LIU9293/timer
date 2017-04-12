import React from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';
import {
  StartButton,
  ChangeSideButton,
  NextSectionButton,
  StopButton,
  SidebarButton,
} from '../controlButton';
import {
  ControlWrapper,
  NextButton,
  SidebarTrigger,
} from './style';

class StyledControl extends React.PureComponent{
  static propTypes = {
    type: PropTypes.string.isRequired,
    pause: PropTypes.bool.isRequired,
    section: PropTypes.number.isRequired,
    MaxSection: PropTypes.number.isRequired,
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
          <SidebarTrigger>
            <SidebarButton onClick={this.props.onSidebarTrigger} />
          </SidebarTrigger>
          {
            this.props.section < this.props.MaxSection &&
            <NextButton>
              <NavLink to={`/timer/${this.props.section+1}`}>
                <NextSectionButton />
              </NavLink>
            </NextButton>
          }
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
          <SidebarTrigger>
            <SidebarButton onClick={this.props.onSidebarTrigger} />
          </SidebarTrigger>
          {
            this.props.section < this.props.MaxSection &&
            <NextButton>
              <NavLink to={`/timer/${this.props.section+1}`}>
                <NextSectionButton />
              </NavLink>
            </NextButton>
          }
        </ControlWrapper>
      );
    }
  }
}

export default StyledControl;
