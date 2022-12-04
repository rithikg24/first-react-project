import React from 'react'
import ReactDOM from 'react-dom/client'
import Navbar from './components/Navbar'
import Content from './components/Content'
import './index.css'


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Navbar />
    <Content />
  </React.StrictMode>
)
