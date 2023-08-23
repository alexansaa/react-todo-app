import React from 'react'
import ReactDOM from 'react-dom/client'
import TodosLogic from './components/TodosLogic.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    < TodosLogic/>
  </React.StrictMode>,
)

// ReactDOM.createRoot(document.getElementById('root')).render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>,
// )
