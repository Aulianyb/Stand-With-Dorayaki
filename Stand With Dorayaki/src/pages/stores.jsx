import { Link } from "react-router-dom"; 

function Title(){
   return(
    <>
        <div class="circle"></div>
        <h2>Selamat Datang di</h2>
        <h1>StandWithDorayaki</h1>
    </>
   ); 
}

function StoreBox() {
   return(
    <>
        <div className="store-box">
            <Link to={'menu/1'} className="nav"> STORE NAME </Link>
        </div>
    </>
   ); 
}

export default function Stores(){
    return(<>
    <Title />
    <div className="menu-container">
        <StoreBox />
        <StoreBox />
        <StoreBox />
    </div>
    </>);
}