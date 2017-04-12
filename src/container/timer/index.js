import React from 'react';
import Section from 'component/section';
import Config from 'config/rules';

class Timer extends React.PureComponent{
  render(){
    const { params } = this.props.match;
    const section = params.section || 1;
    return(
      <Section type={Config[`section_${section}`].type} config={Config[`section_${section}`]} />
    );
  }
}

export default Timer;
