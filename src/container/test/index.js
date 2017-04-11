import React from 'react';
import Section from '../../component/section';
import Config from '../../config/rules';

class Test extends React.PureComponent{
  render(){
    return(
      <Section type={Config.section_10.type} config={Config.section_10} />
    );
  }
}

export default Test;
