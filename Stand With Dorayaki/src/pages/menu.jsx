import bannerImage from '../assets/Banner Temp.jpg';
import menuPic from '../assets/Dorayaki.jpeg';
import { Link } from "react-router-dom"; 


function Dashboard() {
    return (<>
      <div className='dashboard'>
        <div>
          <div className='dashboard-content'>
          <Link to={'/'} className="store-link"> Home </Link>
          <Link to={'/AddMenu'} className="store-link"> Add Rasa </Link>
          <Link to={'/UpdateStok'} className="store-link"> Update Stok </Link>
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
          <img src={bannerImage} className='banner-img'></img>
          <div className='store-name'>NAMA TOKO</div>
        </div>
      </>
    );
  }
  
  function MenuBox(){
    return (
      <>
          <div className='menu-box'> 
            <img src={menuPic}></img>
            <p>Rasa Dorayaki</p>
            <p>Stock : x</p>
          </div>
      </>
    );
  }
  
  function MenuLayout(){
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

export default function Menu(){
    return (
        <>
          <Dashboard />
          <Banner />
          <MenuLayout />
        </>
      )
}