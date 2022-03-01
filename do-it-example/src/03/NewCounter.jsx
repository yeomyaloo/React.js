import React, { Component } from 'react';

export default class NewCounter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
    };
  }

  increaseCount() {
    this.setState(({ count }) => ({ count: count + 1 }));
  }
  render() {
    return (
      <div>
        현재 카운트: {this.state.count}
        <button onClick={this.increaseCount}>카운트 증가</button>
      </div>
    );
  }
}
