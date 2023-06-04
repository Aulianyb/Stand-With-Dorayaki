import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function Dashboard() {
  return (<>
    <div className='dashboard'>
      <div>
        <div className='dashboard-content'><a>Link</a></div>
        <div className='web-name'>Stand With Dorayaki</div>
      </div>
    </div>
  </>); 
}

function Banner(){
  return (
    <>
      <div>
        <img src='src/assets/Banner Temp.jpg' className='banner'></img>
      </div>
    </>
  );
}

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Dashboard />
      <Banner />
    </>
  )
}

export default App
