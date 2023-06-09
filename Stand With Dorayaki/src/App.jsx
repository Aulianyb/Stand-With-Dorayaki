import { useState } from 'react'
import './App.css'
import { BrowserRouter, Router, Link } from 'react-router-dom';


function Dashboard() {
  return (<>
    <div className='dashboard'>
      <div>
        <div className='dashboard-content'>
        {/* TO DO */}
        </div>
        <div className='web-name'>StandWithDorayaki</div>
      </div>
    </div>
  </>); 
}

function Banner(){
  return (
    <>
      <div className='banner-container'>
        <img src='src/assets/Banner Temp.jpg' className='banner-img'></img>
        <div className='store-name'>NAMA TOKO</div>
      </div>
    </>
  );
}

function MenuBox(){
  return (
    <>
        <div className='menu-box'> 
          <img src='src/assets/Dorayaki.jpeg'></img>
          <p>Rasa Dorayaki</p>
          <p>Stock : x</p>
        </div>
    </>
  );
}

function Menu(){
  return (
    <>
      <div className='menu-container'>
        <MenuBox />
        <MenuBox />
        <MenuBox />
        <MenuBox />
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
      <Menu />
    </>
  )
}

export default App
