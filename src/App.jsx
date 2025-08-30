import { useState } from 'react'
import './styles.css'
import Header from './components/header'
import TodoInput from './components/TodoInput'
import TodoList from './components/TodoList'
import Footer from './components/footer'

function App() {
  const [todos, setTodos] = useState([])

  return (
    <>
      <div className='appContainer'>
        <Header />
        <TodoInput setTodos={setTodos} todos={todos} />
        <TodoList setTodos={setTodos} todos={todos} />
        <Footer todos={todos} />
      </div>
    </>
  )
}

export default App
