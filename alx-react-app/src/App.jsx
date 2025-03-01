import { useState } from 'react';
import WelcomeMessage from './components/WelcomeMessage';
// import Header from './src/component/Header';
// import MainContent from './src/componens/MainContent';
// import Footer from './src/components/Footer';
// import UserProfile from './components/UserProfile';



function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <WelcomeMessage />
    </>
  )
}

export default App
