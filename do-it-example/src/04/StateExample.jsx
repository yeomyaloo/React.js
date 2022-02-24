import React, { Component } from 'react';

class StateExample extends Component {
  constructor(props) {
    super(props);
    this.state = {
      // 1
      loading: true,
      formData: 'no data',
    };
    this.handleData = this.handleData.bind(this); // 2

    setTimeout(this.handleData, 4000); // 3
  }
  handleData() {
    const data = 'new data';
    const { formData } = this.state; // 4

    //state 변경
    this.setState({
      // 5
      loading: false,
      formData: data + formData,
    });
    console.log('loading 값', this.state.loading);
    //이후 호출될 render() 함수에서의 this.state.loading은 false입니다.
  }
  render() {
    return (
      <div>
        <span>로딩 중: {String(this.state.loading)}</span>
        <span>결과: {this.state.formData}</span>
      </div>
    );
  }
}

export default StateExample;
