import React, { Component } from 'react';
import { shallowEqual } from 'recompose';

class PureComponent extends Component {
    render() {
        this.shouldComponentUpdate(nextProps, nextState){
            return !shallowEqual(this.props, nextProps) ||
            !shallowEqual(this.state, nextState)
        }
    }
}

export default PureComponent;