import { useEffect, useState } from 'react';
import './App.scss';
import Form from './components/Form';
import TodoList from './components/TodoList'

function App() {
  const [inputText, setInputText] = useState('');
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    getLocalTodos()
  }, [])

  useEffect(() => {
    saveLocaltodos()
  }, [todos])

  const saveLocaltodos = () => {
    localStorage.setItem("todos", JSON.stringify(todos))
  }

  const getLocalTodos = () => {
    if(localStorage.getItem('todos') === null){
      localStorage.setItem('todos', JSON.stringify(todos))
    } else{
      let localTodos = JSON.parse(localStorage.getItem('todos'))
      setTodos(localTodos)
    }
  }

  return (
    <div className="App">
      <h1>Todo List</h1>
      <Form 
      setInputText={setInputText} 
      inputText={inputText} 
      setTodos={setTodos} 
      todos={todos}/>

      <TodoList 
      todos={todos}
      setTodos={setTodos} />
    </div>
  );
}

export default App;
