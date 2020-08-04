import TodoContainer from "../../containers/TodoContainer";
import React from "react";
import axios from 'axios'
import API from '../../axios'

export default class TodoList extends React.Component {
  componentDidMount(){
    
    const response=API.getTotalList()
    console.log(response)
  }

  render() {
    return this.props.todoList.map((todo, index) => (
      <div>
        <TodoContainer value={todo} index={index} />
        <br />
      </div>
    ));
  }
}
