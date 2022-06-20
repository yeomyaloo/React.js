import React from 'react';
import Todo from './Todo';
import {Paper, List, Container} from '@material-ui/core';
import "./App.css";
import AddTodo from './AddTodo';
import {call} from './service/ApiService';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      items:[],
    };
  }
  componentDidMount()  {
    call("/todo","GET", null).then((response) =>
      this.setState({items:response.data})
    );
  }

  // add() 함수 추가
  add = (item) => {
    call("/todo", "POST", item).then((response) =>
      this.setState({items:response.data})
    );
  };

  delete = (item) => {
    call("/todo", "DELETE", item).then((response) =>
      this.setState({items:response.data})
    );
  }
  update = (item) => {
    call("/todo", "PUT", item).then((response) =>
      this.setState({items:response.data})
    );
  };

  render() {
    var todoItems = this.state.items.length > 0 && (
      <Paper style={{margin:16}}>
        <List>
          {this.state.items.map((item,idx)=>(
            <Todo 
              item ={item} 
              key ={item.id} 
              delete = {this.delete}
              update = {this.update} />
          ))}
        </List>
      </Paper>
    );

    //함수 연결
    return (
        <div className='App'>
          <Container maxWidth="md">
            <AddTodo add={this.add} />
            <div className='TodoList'>{todoItems}</div>
          </Container>
        </div>
    );
  }
}

export default App;

