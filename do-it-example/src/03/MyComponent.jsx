import React, { Component } from 'react'

export default class MyComponent extends Component {
    constructor(props){
        super(props);
        console.log('생성 함수');
    }
  render() {
    return (
      <div>MyComponent</div>
    )
  }
}
