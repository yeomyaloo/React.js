import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import withStyles, { css } from './withStyles';

class Text extends PureComponent {
  render() {
    const { children, styles, large, xlarge, small, xsmall, primary, secondary } = this.props;
    return (
      <span
        {...css(
          styles.default,
          xsmall && styles.xsmall,
          large && styles.large,
          small && styles.small,
          xlarge && styles.xlarge,
          primary && styles.primary,
          secondary && styles.secondary,
        )}
      >
        {children}
      </span>
    );
  }
}

Text.propTypes = {
  children: PropTypes.node.isRequired,
  xlarge: PropTypes.bool,
  xsmall: PropTypes.bool,
  large: PropTypes.bool,
  small: PropTypes.bool,
  primary: PropTypes.bool,
  secondary: PropTypes.bool,
};

export default withStyles(({ color, size }) => ({
  default: {
    color: color.default,
    fontSize: size.md,
  },
  xlarge: {
    fontSize: size.xg,
  },
  large: {
    fontSize: size.lg,
  },
  small: {
    fontSize: size.sm,
  },
  xsmall: {
    fontSize: size.xs,
  },
  primary: {
    color: color.primary,
  },
  secondary: {
    color: color.secondary,
  },
}))(Text);
