import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import WelcomeMessage from './src/components/WelcomeMessage' 
import Header from './src/component/Header'
import MainContent from './src/componens/MainContent'
import Footer from './src/components/Footer'
import UserProfile from './components/UserProfile';

const UserProfile = () => {
  return (
    <div>
      <h1>User Profile</h1>
      <UserProfile name="Alice" age="25" bio="Loves hiking and photography" />
    </div>
  );
};

export default UserProfile;

function components() {
  return (
      <div>
          <Header />
          <MainContent />
          <Footer />
      </div>
  );
}

export default components;

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
