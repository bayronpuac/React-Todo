// your components will all go in this `component` directory.
// feel free to change this component.js into TodoList.js
import React from 'react';
import Todo from './Todo';

const TodoList = props => {
    return (
        <div className="shopping-list">
            {props.tasks.map(tasks => (
                <Todo key={tasks.id} toggleItem={props.toggleItem} />
            ))}
             <button className="clear-btn" onClick={props.clearPurchased}>
        Clear Purchased
      </button>
        </div>
    )
}

export default TodoList

