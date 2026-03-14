import reactLogo from './assets/react.svg'
import Counter from './components/Counter'
import TodoList from './components/TodoList'
import FetchData from './components/FetchData'
import ContactForm from './components/ContactForm'
import Stopwatch from './components/Stopwatch'
import './App.css'

function App() {
  return (
    <div className="app">
      <header className="app-header">
        <img src={reactLogo} className="react-logo" alt="React logo" />
        <h1>React.js Practice</h1>
        <p>Hands-on exercises covering core React concepts</p>
      </header>
      <main className="practice-grid">
        <Counter />
        <TodoList />
        <Stopwatch />
        <FetchData />
        <ContactForm />
      </main>
      <footer className="app-footer">
        <a href="https://react.dev/" target="_blank" rel="noreferrer">
          React Docs
        </a>
        {' · '}
        <a href="https://vitejs.dev/" target="_blank" rel="noreferrer">
          Vite Docs
        </a>
      </footer>
    </div>
  )
}

export default App
