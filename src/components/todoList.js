import React from 'react';
import Todo from './todo';

const TodoList = ({todos, setTodos, filteredTodos}) => {
  return (
    <div className="todo-container">
      <ul className="todo-list">
        {filteredTodos.map(todo => 
        <Todo 
          key={todo.id} 
          text={todo.text} 
          todos={todos}
          todo={todo} 
          filteredTodos= {filteredTodos}
          setTodos={setTodos}
          />)}
      </ul>
    </div>
  );
}

export default TodoList