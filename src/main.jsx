import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import ClassCmp from './ClassCmp'
import FuncCmp from './FuncCmp'

ReactDOM.render(
  <React.StrictMode>
    <ClassCmp/>
    <FuncCmp title="FUNCTIONAL COMPONENT"/>
  </React.StrictMode>,
  document.getElementById('root')
)
