import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

const TASKS = [
  { id: "todo-0", name: "Eat", completed: true },
  { id: "todo-1", name: "Sleep", completed: false },
  { id: "todo-2", name: "Repeat", completed: false }
]

const FILTER_MAP = [
  { id: "filter-0",name: "All", isPressed: false },
  { id: "filter-1", name: "Active", isPressed: false },
  { id: "filter-2", name: "Completed", isPressed: false }
]


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App tasks={TASKS} filter={FILTER_MAP}/>
  </React.StrictMode>,
)
