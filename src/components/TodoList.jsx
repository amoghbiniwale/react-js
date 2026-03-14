import { useState } from 'react'

function TodoList() {
  const [todos, setTodos] = useState([
    { id: 1, text: 'Learn React hooks', done: true },
    { id: 2, text: 'Build a todo list', done: false },
    { id: 3, text: 'Deploy to production', done: false },
  ])
  const [input, setInput] = useState('')

  const addTodo = (e) => {
    e.preventDefault()
    const trimmed = input.trim()
    if (!trimmed) return
    setTodos(prev => [...prev, { id: Date.now(), text: trimmed, done: false }])
    setInput('')
  }

  const toggleTodo = (id) =>
    setTodos(prev => prev.map(t => t.id === id ? { ...t, done: !t.done } : t))

  const removeTodo = (id) =>
    setTodos(prev => prev.filter(t => t.id !== id))

  return (
    <div className="card">
      <h2>Todo List</h2>
      <p>Practice: <code>useState</code>, list rendering, controlled inputs</p>
      <form onSubmit={addTodo} className="todo-form">
        <input
          value={input}
          onChange={e => setInput(e.target.value)}
          placeholder="Add a new task…"
          aria-label="New task"
        />
        <button type="submit">Add</button>
      </form>
      <ul className="todo-list">
        {todos.map(todo => (
          <li key={todo.id} className={todo.done ? 'done' : ''}>
            <input
              type="checkbox"
              checked={todo.done}
              onChange={() => toggleTodo(todo.id)}
              aria-label={`Mark "${todo.text}" as ${todo.done ? 'undone' : 'done'}`}
            />
            <span>{todo.text}</span>
            <button
              className="remove"
              onClick={() => removeTodo(todo.id)}
              aria-label={`Remove "${todo.text}"`}
            >
              ×
            </button>
          </li>
        ))}
      </ul>
      <p className="hint">
        {todos.filter(t => !t.done).length} task(s) remaining
      </p>
    </div>
  )
}

export default TodoList
