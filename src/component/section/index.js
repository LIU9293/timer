import React from 'react';
import PropTypes from 'prop-types';
import DoubleTimer from 'component/doubleTimer';
import SingleTimer from 'component/styledTimer';
import StyledControl from "component/styledControl";
import {
  Wrapper
} from './style';

class Section extends React.PureComponent{
  static propTypes = {
    type: PropTypes.oneOf(['single', 'double']).isRequired,
    config: PropTypes.object.isRequired,
    section: PropTypes.number.isRequired,
    MaxSection: PropTypes.number.isRequired,
    onSidebarTrigger: PropTypes.func
  }

  state = {
    pause: false,
  }

  componentWillReceiveProps(nextProps){
    if(nextProps.section !== this.props.section && this.state.pause){
      this.setState({
        pause: false
      });
    }
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

  render(){
    const { type } = this.props;
    if(type === 'single'){
      return(
        <Wrapper>
          <SingleTimer ref={timer => this.singleTimer = timer} length={this.props.config.limit} />
          <StyledControl
            type={'single'}
            pause={this.state.pause}
            onSingleStart={this.onSingleStart}
            onSinglePause={this.onSinglePause}
            onSingleStop={this.onSingleStop}
            onSidebarTrigger={this.props.onSidebarTrigger}
            section={this.props.section}
            MaxSection={this.props.MaxSection}
          />
        </Wrapper>
      )
    } else {
      return(
        <Wrapper>
          <DoubleTimer ref={timer => this.doubleTimer = timer} config={this.props.config} />
          <StyledControl
            type={'double'}
            pause={this.state.pause}
            onDoubleStart={this.onDoubleStart}
            onDoublePause={this.onDoublePause}
            onDoubleStop={this.onDoubleStop}
            onChangeSide={this.onChangeSide}
            onSidebarTrigger={this.props.onSidebarTrigger}
            section={this.props.section}
            MaxSection={this.props.MaxSection}
          />
        </Wrapper>
      )
    }
  }
}

export default Section;
