import React,{ Component } from "react";
import './App.css';
import TOC from "./component/TOC";
import Content from "./component/Content";
import Subject from "./component/Subject";

class App extends Component{
  render(){
    return(
      <div className ="App">
       <Subject title= "WEB" sub ="World wide Web!"/>
       <TOC />
       <Content title="HTML" desc="HTML is HyperText MarkUp Language." />
      </div>
    );
  }
}

export default App;