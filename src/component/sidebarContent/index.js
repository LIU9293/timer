import React from 'react';
import { NavLink } from 'react-router-dom';
import { Steps } from 'antd';
import {
  SidebarWrapper,
  StepWrapper,
} from './style';

const Step = Steps.Step;

class SidebarContent extends React.PureComponent{
  render(){
    const { sections } = this.props;
    const mySteps = Object.values(sections).map((section, index) => (
      <Step
        title={<NavLink to={`/timer/${index+1}`}>{section.name}</NavLink>}
        key={Math.random()}
      />
    ));
    return(
      <SidebarWrapper>
        <h2>{'进度'}</h2>
        <hr />
        <StepWrapper>
          <Steps direction="vertical" current={this.props.step}>
            {mySteps}
          </Steps>
        </StepWrapper>
      </SidebarWrapper>
    )
  }
}

export default SidebarContent
