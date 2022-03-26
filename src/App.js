import React from 'react';
import { connect } from "react-redux";
import { addTask, updateTask, deleteTask } from './redux/action/todo.action';
import { nanoid } from 'nanoid';

import './App.css';


//class based react implementation
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      todo: ""
    }
  }

  handleChange = e => {
    this.setState({ todo: e.target.value })
  }
  handleClick = e => {

    this.props.addTask({ id: nanoid(), task: this.state.todo, isDone: false })
  }
  handleUpdate = id => {
    this.props.updateTask({ id, task: this.state.todo, isDone: false })
  }
  handleDelete = id => {
    this.props.deleteTask(id)
  }

  render() {
    const { todo } = this.state
    const tasks = this.props.tasks
    return (
      <div className='App'>
        <input type="text" onChange={this.handleChange} value={todo} />
        <button onClick={this.handleClick}>add</button>
        <div style={{ display: "flex", flexDirection: 'column' }}>
          {tasks && tasks.map(task => (
            <div key={task.id} style={{ display: "flex", justifyContent: "center", padding: "10px 5px" }}>
              <div >{task.task}</div>
              <button onClick={() => this.handleUpdate(task.id)}>update</button>
              <button onClick={() => this.handleDelete(task.id)}>del</button>
            </div>
          ))}
        </div>
      </div>
    )
  }

}

const mapStateToProps = (state) => {
  return { tasks: state.todos.tasks }
}
const mapdispatchToProps = {
  addTask, updateTask, deleteTask
}
export default connect(mapStateToProps, mapdispatchToProps)(App);

//Function based redux implementation

/*
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { addTask, updateTask, deleteTask } from './redux/action/todo.action';
import { nanoid } from 'nanoid';

function App() {
  const [todo, setTodo] = useState("");
  const dispatch = useDispatch()
  const tasks = useSelector(state => state.todos.tasks)
  console.log(tasks)

  useEffect(() => {

    // dispatch(addTask(todo))
  }, [])

  const handleChange = e => {
    setTodo(e.target.value)
  }
  const handleClick = e => {
    dispatch(addTask({ id: nanoid(), task: todo, isDone: false }))
  }
  const handleUpdate = id => {
    dispatch(updateTask({ id, task: todo, isDone: false }))
  }
  const handleDelete = id => {
    dispatch(deleteTask(id))
  }
  return (


    <div className="App" >
      <input type="text" onChange={handleChange} value={todo} />
      <button onClick={handleClick}>add</button>
      <div style={{ display: "flex", flexDirection: 'column' }}>
        {tasks && tasks.map(task => (
          <div key={task.id} style={{ display: "flex", justifyContent: "center", padding: "10px 5px" }}>
            <div >{task.task}</div>
            <button onClick={() => handleUpdate(task.id)}>update</button>
            <button onClick={() => handleDelete(task.id)}>del</button>
          </div>
        ))}
      </div>
    </div >
  );
}

 export default App;
*/

