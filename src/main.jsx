import React from 'react'
import ReactDOM from 'react-dom/client'
// import App from './App.jsx'
import './index.css'
// import App './App.jsx'
import App from './App.jsx'
import './css/output.css'

const rootElement = document.getElementById('root');
rootElement.className = 'flex justify-center items-center min-h-screen w-full';

ReactDOM.createRoot(rootElement).render(
  <React.StrictMode>
    <App />
    {/* <Greeting/> */}
  </React.StrictMode>,
)
