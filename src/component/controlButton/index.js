import React from 'react';
import PropTypes from 'prop-types';
import { Button } from 'antd';
import ControlButtonStyle from './style';

function StartButton(props){
  return(
    <Button
      type={'primary'}
      icon={props.pause ? 'pause' : 'caret-right'}
      size={'large'}
      onClick={props.pause ? props.onPause : props.onStart}
      style={ControlButtonStyle}
    >
      {
        props.pause
        ? '暂停'
        : '开始'
      }
    </Button>
  )
}

StartButton.propTypes = {
  pause: PropTypes.bool,
  onPause: PropTypes.func,
  onStart: PropTypes.func,
}

StartButton.defaultProps = {
  pause: false,
  onPause: null,
  onStart: null,
}

function ChangeSideButton(props){
  return(
    <Button
      {...props}
      type={'primary'}
      icon={'swap'}
      size={'large'}
      style={ControlButtonStyle}
    >
      {'换边'}
    </Button>
  )
}

function NextSectionButton(props){
  return(
    <Button
      {...props}
      type={'primary'}
      icon={'arrow-right'}
      size={'large'}
      style={ControlButtonStyle}
    >
      {'结束'}
    </Button>
  )
}

function StopButton(props){
  return(
    <Button
      {...props}
      type={'primary'}
      icon={'close-square'}
      size={'large'}
      style={ControlButtonStyle}
    >
      {'停止'}
    </Button>
  )
}

function SidebarButton(props){
  return(
    <Button {...props} type="primary" shape="circle" icon="bars" size="large" />
  )
}

export {
  StartButton,
  ChangeSideButton,
  NextSectionButton,
  StopButton,
  SidebarButton,
};
