import React from 'react';
import TitleArea from 'component/titleArea';
import { AbsWrapper } from 'component/wrapper';

class StyledBackground extends React.PureComponent{
  render(){
    return(
      <AbsWrapper>
        <TitleArea
          globalConfig={this.props.globalConfig}
          player={this.props.player}
          currentSection={this.props.currentSection}
        />
      </AbsWrapper>
    )
  }
}

export default StyledBackground
