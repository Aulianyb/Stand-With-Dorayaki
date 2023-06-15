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
        <div className="store-box" >
            <Link to={'store/1'} className="nav"> StoreName </Link>
            <p className="store-description">Jalan</p>
            <p className="store-description">Kecamatan</p>
            <p className="store-description">Provinsi</p>
        </div>
    </>
   ); 
}

export default function Stores(){
    return(<>
    <Title />
    <div >
        <Link to={'/AddStore'}>
            <button type="button" class="btn btn-primary btn-custom">Add Store</button>
        </Link>
    </div>
    <div className="menu-container">
        <StoreBox />
        <StoreBox />
        <StoreBox />
    </div>
    </>);
}