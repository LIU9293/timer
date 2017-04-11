import React from 'react';
import PropTypes from 'prop-types';
import { Button } from 'antd';

function StartButton(props){
  return(
    <Button
      type={'primary'}
      icon={props.pause ? 'pause' : 'caret-right'}
      size={'large'}
      onClick={props.pause ? props.onPause : props.onStart}
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
    >
      {'停止'}
    </Button>
  )
}

export {
  StartButton,
  ChangeSideButton,
  NextSectionButton,
  StopButton,
};
