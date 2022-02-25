import React from 'react';
import PropTypes from 'prop-types';

function SFC(props, context) {
  const { somePropValue } = props;

  const { someContexValue } = context;

  return <h1>Hello, {somePropValue}</h1>;
}

SFC.prototype = { somePropValue: PropTypes.any };
SFC.defaultProps = { somePropValue: 'default value' };

export default SFC;
