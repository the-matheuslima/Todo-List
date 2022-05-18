import React from 'react'
import Todo from './Todo'

function TodoList({ todos, setTodos }) {
  return (
      <div className='app__list'>
        {todos.map(todo => (
          <Todo 
          text={todo.text}
          key={todo.id}
          todo={todo}
          todos={todos}
          setTodos={setTodos} />
        ))}
      </div>
  )
}

export default TodoList