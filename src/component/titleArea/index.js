import React from 'react';
import {
  TitleAreaWrapper,
  SideContainer,
} from './style';

class TitleArea extends React.PureComponent{
  render(){
    const { player } = this.props;
    return(
      <TitleAreaWrapper>
        <SideContainer type={'positive'}>
          <h1>{`正方: ${player.positive.title}`}</h1>
          <h1>{player.positive.name}</h1>
        </SideContainer>
        <SideContainer type={'negative'}>
          <h1>{`反方: ${player.negative.title}`}</h1>
          <h1>{player.positive.name}</h1>
        </SideContainer>
      </TitleAreaWrapper>
    )
  }
}

export default TitleArea
