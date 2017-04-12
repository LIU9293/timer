import React from 'react';
import Section from 'component/section';
import Config from 'config/rules';
import Sidebar from 'react-sidebar';
import SidebarContent from 'component/sidebarContent';
import {
  FlexWrapper
} from 'component/wrapper';

const MaxSection = Object.keys(Config.sections).length;

class Timer extends React.PureComponent{
  state = {
    sidebarOpen: false
  }

  onSetSidebarOpen = (open) => {
    this.setState({
      sidebarOpen: open
    });
  }

  openSidebar = () => {
    this.onSetSidebarOpen(true);
  }

  render(){
    const { params } = this.props.match;
    const section = params.section ? parseInt(params.section, 10) : 1;
    return(
      <FlexWrapper>
        <Sidebar
          sidebar={<SidebarContent config={Config} step={section - 1} />}
          open={this.state.sidebarOpen}
          onSetOpen={this.onSetSidebarOpen}
        >
          <Section
            type={Config.sections[`section_${section}`].type}
            config={Config.sections[`section_${section}`]}
            section={section}
            MaxSection={MaxSection}
            onSidebarTrigger={this.openSidebar}
          />
        </Sidebar>
      </FlexWrapper>
    );
  }
}

export default Timer;
