import React from 'react';
import {
  TitleAreaWrapper,
  SideContainer,
} from './style';

class TitleArea extends React.PureComponent{
  render(){
    const { config } = this.props;
    return(
      <TitleAreaWrapper>
        <SideContainer type={'positive'}>
          <h1>{`正方: ${config.positive.title}`}</h1>
          <h1>{config.positive.name}</h1>
        </SideContainer>
        <SideContainer type={'negative'}>
          <h1>{`反方: ${config.negative.title}`}</h1>
          <h1>{config.positive.name}</h1>
        </SideContainer>
      </TitleAreaWrapper>
    )
  }
}

export default TitleArea
