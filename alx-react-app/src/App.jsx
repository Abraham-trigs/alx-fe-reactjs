import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import WelcomeMessage from './src/components/WelcomeMessage' 
import Header from './src/component/Header'
import MainContent from './src/componens/MainContent'
import Footer from './src/components/Footer'

function MainContainer(){
  return (
    Footer  
  )
}

function MainContainer(){
  return (
    MainContent  
  )
}

function header-tag(){
  return (
    Header
  )
}

function greet() {
  return (
      <div>
          <WelcomeMessage />
      </div>
  );
}

export default greet;

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App
