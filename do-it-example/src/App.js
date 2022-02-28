import React, {Component } from 'react';
import './App.css';
import Counter3 from './03/Counter3';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      count : 1,
    };
    this.increaseCount = this.increaseCount.bind(this);
  }

  increaseCount(){
    this.setState(({count})=>({count: count + 1}));
  }
  render() {
    return (
      <div>
        <Counter3 />
      </div>
    );
  }
}

export default App;
