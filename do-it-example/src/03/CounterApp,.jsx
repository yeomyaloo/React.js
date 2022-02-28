import React, { Component } from 'react';
import Counter from './Counter';

export default class CounterApp extends Component {
  constructor(props) {
    super(props);
    this.increaseCount = this.increaseCount.bind(this);
  }

  render() {
    return <Counter count={this.state.count} onAdd={this.increaseCount} />;
  }
}
