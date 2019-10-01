import React from 'react'; 

class TodoForm extends React.Component {
    constructor(){
        super();
        this.state ={
            addtask: ''
        };
    }
handleChanges = e => {
    this.setState({
        [e.target.name]: e.target.value
    });
};

submitItem = e => {
    e.preventDefault();
    this.props.addTasks(this.state.addTasks);
};

render() {
    return (
        <form onSubmit={this.submitItem}>
            <input 
            name='addtask'
            type='text'
            placeholder='Add new task here'
            title='Task'
            onChange={this.handleChange}
            value={this.state.addtask}
            />
            <button>Add</button>
            <button>Clear</button>
        </form>
        );
    }   
}

export default TodoForm