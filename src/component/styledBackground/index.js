import React from 'react';
import TitleArea from 'component/titleArea';
import { AbsWrapper } from 'component/wrapper';

class StyledBackground extends React.PureComponent{
  render(){
    return(
      <AbsWrapper>
        <TitleArea config={this.props.config} />
      </AbsWrapper>
    )
  }
}

export default StyledBackground
