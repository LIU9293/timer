import React from 'react';
import PropTypes from 'prop-types';

class Section extends React.PureComponent{
  static propTypes = {
    type: PropTypes.oneOf(['single', 'double']).isRequired,
    config: PropTypes.object.isRequired
  }

  render(){
    const { type } = this.props;
    return(
      <div />
  }
}

export default Section;
