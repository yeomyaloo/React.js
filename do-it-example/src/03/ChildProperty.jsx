import React, { Component } from 'react';
import PropTypes from 'prop-types';
export default class ChildProperty extends Component {
  render() {
    return <div>{this.props.children}</div>;
  }
}

ChildProperty.propTypes = {
  children: PropTypes.node,
};
