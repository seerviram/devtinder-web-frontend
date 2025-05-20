import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Login from "./login";
import PremiumUser from './premiumUser';

function App() {
  const [count, setCount] = useState(0)
  // console.log('enviorement', import.meta.env.MODE)
  // console.log('REACT_APP_BASE_URL', import.meta.env.VITE_BASE_URL)
  return (
    <>
      <div className='text-[50px]'>Hello world</div>
      <Login/>
      <PremiumUser/>
    </>
  )
}

export default App
