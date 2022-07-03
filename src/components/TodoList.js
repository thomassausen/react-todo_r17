import React from 'react'

export default function TodoList({todos, completeTodo, markAsEditing, updateTodo,cancelEdit,deleteTodo}) {
  return (
    <>
        <ul className="todo-list">
          {todos.map((todo, index) => (
            <li key={todo.id} className="todo-item-container">
              <div className="todo-item">
                <input type="checkbox" onChange={() => completeTodo(todo.id)} checked={todo.isComplete ? true : false} />

              { !todo.isEditing ? (
                <span className={`todo-item-label ${ todo.isComplete ? 'line-through' : ''}`}
                onDoubleClick={() => markAsEditing(todo.id)}
                >{todo.title}</span>) :(
                <input type="text" onBlur={(event) => updateTodo(event,todo.id)} onKeyDown={event => {
                  if (event.key === 'Enter') {
                    updateTodo(event, todo.id);
                  } else if(event.key === 'Escape') {
                    cancelEdit(event, todo.id);
                  }
                }}
                className="todo-item-input" defaultValue={todo.title} autoFocus/>)
                }


              </div>
              <button onClick={() => deleteTodo(todo.id)} className="x-button">
                <svg
                  className="x-button-icon"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </li>
          ))}
        </ul>

        <div className="check-all-container">
          <div>
            <div className="button">Check All</div>
          </div>

          <span>3 items remaining</span>
        </div>

        <div className="other-buttons-container">
          <div>
            <button className="button filter-button filter-button-active">
              All
            </button>
            <button className="button filter-button">Active</button>
            <button className="button filter-button">Completed</button>
          </div>
          <div>
            <button className="button">Clear completed</button>
          </div>
        </div>
        </>
  )
}
