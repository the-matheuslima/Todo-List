import React from 'react'

function Todo({ text, setTodos, todos, todo }) {

    const handleRemove = () => {
        setTodos(todos.filter((el) => el.id !== todo.id));
    };

    const handlerCompleted = () => {
        setTodos(todos.map(item => {
            if (item.id === todo.id) {
                return {
                    ...item, completed: !item.completed
                }
            }
            return item
        }))
    }

    return (
        <div className='app__container'>
            <li className={`app__list-items ${todo.completed ? 'completed' : ''}`}>
                {text}
            </li>
            <div className='app__btns'>
                <button className='app__btn completed-btn' onClick={handlerCompleted}>👋🏽</button>
                <button className='app__btn remove-btn' onClick={handleRemove}>💩</button>
            </div>
        </div>
    )
}

export default Todo