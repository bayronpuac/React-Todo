import React from 'react';
import TodoForm from './components/TodoComponents/TodoForm';
import TodoList from './components/TodoComponents/TodoList';


const todoData = [
    {
      task: 'Organize Garage',
      id: 1528817077286,
      completed: false
    },
    {
      task: 'Bake Cookies',
      id: 1528817084358,
      completed: false
    }
  ];


class App extends React.Component {
  constructor(){
    super();
    this.state ={
      tasks: todoData
    };
  }


    toggleItem = id => {
      this.setState ({
          tasks: this.state.tasks.map(task => {
            if (task.id === id ){
              return {
                ...task,
                completed: !task.completed
              }
            } else  {
              return task;
            }
          })
      })
    };
    addTask = task => {
      const newTask ={
        name: task,
        id: Date.now(),
        completed: false
      };
      this.setState({
        tasks: [...this.state.tasks, newTask]
      })
    };

    clearCompleted = () => {
      this.setState({
        tasks: this.states.tasks.filter(tasks =>
          !tasks.completed)
      })
    };
  


  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
  render() {
    return (
      <div className="App">
        <div className="header">
          <h1>Todo List</h1>
          <TodoForm addTask={this.addTask} />
        </div>
        <TodoList
          tasks={this.state.tasks}
          toggleItem={this.toggleItem}
        />
      </div>
    );
  }
}

export default App;
