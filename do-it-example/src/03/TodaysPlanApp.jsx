import React, { Component } from 'react';

export default class TodaysPlanApp extends Component {
  render() {
    const { onButtonClick, hashPlan } = this.props;
    return (
      <div className="body">
        {hashPlan ? <TodaysPlan /> : null}
        <button onClick={onButtonClick}>계획 없음</button>
      </div>
    );
  }
}

function TodaysPlanApp(props) {
  const { onButtonClick, hashPlan } = props;
  return (
    <div className="body">
      {hashPlan ? <TodaysPlan /> : null}
      <button onClick={onButtonClick}>계획 없음</button>
    </div>
  );
}
