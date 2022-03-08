import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import withStyles, { css } from './withStyles';

class Button extends PureComponent {
  render() {
    const {
      children,
      disabled,
      onPress,
      styles,
      large,
      xlarge,
      small,
      xsmall,
      primary,
      secondary,
    } = this.props;

    return (
      <button
        {...css(
          styles.default,
          xsmall && styles.xsmall,
          large && styles.large,
          small && styles.small,
          xlarge && styles.xlarge,
          primary && styles.primary,
          secondary && styles.secondary,
        )}
        onClick={onPress}
      >
        {children}
      </button>
    );
  }
}

Button.propTypes = {
  children: PropTypes.node.isRequired,
  onPress: PropTypes.func,
  xlarge: PropTypes.bool,
  xsmall: PropTypes.bool,
  large: PropTypes.bool,
  small: PropTypes.bool,
  primary: PropTypes.bool,
  secondary: PropTypes.bool,
};

Button.defaultProps = {
  onPress: () => {},
  xsmall: false,
  small: false,
  large: false,
  xlarge: false,
  secondary: false,
  primary: false,
};
export default withStyles(({ color, size, unit, responsive }) => ({
  default: {
    border: 1,
    borderStyle: 'solid',
    borderColor: color.default,
    borderRadius: 2,
    color: color.default,
    fontSize: size.md,
    padding: unit * 2,
    cursor: 'pointer',
    [responsive.small]: {
      width: '100%',
    },
  },
  xlarge: {
    fontSize: size.xg,
  },
  large: {
    fontSize: size.lg,
  },
  small: {
    fontSize: size.sm,
    padding: unit,
  },
  xsmall: {
    fontSize: size.xs,
    padding: unit,
  },
  primary: {
    color: color.primary,
    borderColor: color.primary,
    backgroundColor: color.primary,
  },
  secondary: {
    color: color.secondary,
    borderColor: color.secondary,
  },
}))(Button);
