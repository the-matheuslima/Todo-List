import React from 'react'

function Form({setInputText, inputText, setTodos, todos}) {

  const handleInputText = (e) => {
      setInputText(e.target.value)
  };

  const handleSubmit = (e) => {
    e.preventDefault()
    if(inputText === '') {
      return
    }
    setTodos([
      ...todos, {text: inputText, id: Math.random() * 100, completed: false}
    ])
    setInputText("")
  };

  return (
    <form className='app__form'>
        <input type="text" className='app__form-input' value={inputText} onChange={handleInputText}/>
        <button className='app__form-submit' onClick={handleSubmit}>+</button>
    </form>
)
}

export default Form