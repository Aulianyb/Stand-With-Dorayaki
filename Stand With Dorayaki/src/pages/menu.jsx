import bannerImage from '../assets/Banner Temp.jpg';
import menuPic from '../assets/Dorayaki.jpeg';

function Dashboard() {
    return (<>
      <div className='dashboard'>
        <div>
          <div className='dashboard-content'>
          {/* TO DO 
          Navigation Bar? Maybe? Or Maybe not lmao*/}
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