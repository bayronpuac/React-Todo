import React from 'react';
import TodoForm from './components/TodoComponents/TodoForm';
import TodoList from './components/TodoComponents/TodoList';
import './components/TodoComponents/Todo.css';

const todosData = [
    {
      name: 'Organize Garage',
      id: 1528817077286,
      completed: false
    },
    {
      name: 'Bake Cookies',
      id: 1528817084358,
      completed: false
    }
  ];


class App extends React.Component {
  constructor(){
    super();
    this.state = {
      todos: todosData
    };
  }



    toggleTodo = id => {
      this.setState ({
          todos: this.state.todos.map(todo => {
            if (todo.id === id ){
              return {
                ...todo,
                completed: !todo.completed
              }
            } else  {
              return todo;
            }
          })
      });
    };
    
    addTodo = todoName => {
      if(!todoName){
        return null
      } else {
        const newTodo = {
        name: todoName,
        id: Date.now(),
        completed: false
      };
      this.setState({
        todos: [...this.state.todos, newTodo]
      });
      }
      
    };

    clearCompleted = () => {
      this.setState({
        todos: this.state.todos.filter(todo =>
          todo.completed === false)
      });
    };
  


  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
  render() {
    console.log(this.state.todos)
    return (
      <div className="App">
        <div className="header">
          <h1>Todo List</h1>
          <TodoForm addTodo={this.addTodo} />
        </div>
        <TodoList
          todos={this.state.todos}
          toggleTodo={this.toggleTodo}
          clearCompleted={this.clearCompleted}
        />
      </div>
    );
  }
}

export default App;
