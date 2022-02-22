import React, { Component } from 'react';
import PropTypes from 'prop-types';

class PropComponent extends Component {
  render() {
    return <div className="message-container">{this.props.name}</div>;
  }
}

//자료형을 선언하는 예제
PropComponent.propTypes = {
  name: PropTypes.string,
};
export default PropComponent;
