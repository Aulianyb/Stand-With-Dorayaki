import { Link } from "react-router-dom";   
import axios from 'axios'; 
import React, { useState, useEffect} from 'react'; 

function Title(){
   return(
    <>
        <div class="circle"></div>
        <h2>Selamat Datang di</h2>
        <h1>StandWithDorayaki</h1>
    </>
   ); 
}

function StoreBox(props) {
   return(
    <>
        <div className="store-box" >
            <div className="store-head">
                <Link>X</Link>
            </div>
            <Link to={'store/' + props.store._id} className="nav">{props.store.nama}</Link>
            <p className="store-description">{props.store.jalan}</p>
            <p className="store-description">{props.store.kecamatan}</p>
            <p className="store-description">{props.store.provinsi}</p>
        </div>
    </>
   ); 
}

export default function Stores() {
    const [stores,  setStores] = useState([]); 

    function componentDidMount() {
        axios.get('http://localhost:5000/store/')
            .then(response => {
                setStores(response.data); 
            })
            .catch((error)=>{
                console.log(error); 
            })
    }

    useEffect(() => {
        componentDidMount(); 
    }, [stores]); 

    function deleteStore(id) {

    }

    function storeList(){
        return stores.map(currentStore => {
            return <StoreBox store={currentStore}/>
        })
    }

    return(<>
    <Title />
    <div >
        <Link to={'/AddStore'}>
            <button type="button" class="btn btn-primary btn-custom">Add Store</button>
        </Link>
    </div>
    <div className="menu-container">
        {storeList()}
    </div>
    </>);
}