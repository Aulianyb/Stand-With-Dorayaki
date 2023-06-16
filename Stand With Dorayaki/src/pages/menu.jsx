import bannerImage from '../assets/Banner Temp.jpg';
import menuPic from '../assets/Dorayaki.jpeg';
import { Link, useParams} from "react-router-dom"; 
import { useState, useEffect } from 'react';
import axios from 'axios'; 

function Dashboard() {
    return (<>
      <div className='dashboard'>
        <div>
          <div className='dashboard-content'>
          <Link to={'/'} className="store-link"> Home </Link>
          <Link to={'/AddRasa'} className="store-link"> Add Recipe </Link>
          </div>
          <div className='web-name'>StandWithDorayaki</div>
        </div>
      </div>
    </>); 
  }
  
  function Banner({store}){
    return (
      <>
        <div className='banner-container'>
          <img src={bannerImage} className='banner-img'></img>
          <div className='store-name'>{store.nama}</div>
        </div>
      </>
    );
  }

  //buat modal aja kaya mau meninggal
  function MenuBox(props){
    let [resep, setResep] = useState([]); 
    let {storeID} = useParams(); 

    const [modalShow, setModalShow] = useState(false); 
    const [_stock, set_stock] = useState(0); 

    function componentDidMount() {
      axios.get('http://localhost:5000/resep/')
      .then(response =>{
        setResep(response.data.find((el) => el.resepID === props.menu.resepID)); 
      })
      .catch((error)=>{
        console.log(error); 
      })
    }

    useEffect(() => {
      componentDidMount(); 
    }, []); 

    function onChange_stock(e){
      set_stock(e.target.value);
    }

    function onSubmit(e){
      e.preventDefault(); 
      const update = {
          stock : _stock
      }

      console.log(update); 

      axios.post(`http://localhost:5000/menu/update/${props.menu._id}`, update)
          .then(res => console.log(res.data)); 

      set_stock(0); 
      setModalShow(false);
  }

    function renderModal(){
      if (modalShow){
        return (
          <>
            <div className="modal-modify">
              <button type="button" className="btn btn-primary btn-custom" onClick={() => setModalShow(false)}>X</button>
              <form onSubmit={onSubmit}>
                  <div className="form-group">
                      <label>Jumlah Stock</label>
                      <input type="number" min="0" id="number"
                      required 
                      className="form-control"
                      value={_stock}
                      onChange={onChange_stock}></input>
                  </div>
                  <div className="form-group">
                      <input type="submit" className="btn btn-primary btn-custom"></input>
                  </div>
              </form>
            </div>
          </>
        ); 
      }
    }
      return (
        <>
            {renderModal()}
            <div className='menu-box'> 
              <img src={menuPic} data-toggle="modal" data-target="#exampleModalCenter"></img>
              <p className='menu-title'>{resep.rasa}</p>
              <p>{resep.deskripsi}</p>
              <p>Stock : {props.menu.stock}</p>
              <button type="button" className="btn btn-primary btn-custom" onClick={() => setModalShow(true)}>Modify</button>
            </div>
        </>
      );
  }

export default function Menu(){
  let {storeID} = useParams(); 
  const [stores, setStores] = useState([]); 
  const [menus, setMenus] = useState([]); 

  function componentDidMount() {
    axios.get('http://localhost:5000/store/')
        .then(response => {
            const store = response.data.find((el) => el.storeID === storeID); 
            setStores(store); 
        })
        .catch((error)=>{
            console.log(error); 
        })

    axios.get('http://localhost:5000/menu/')
      .then(response =>{
       const menu = response.data; 
        setMenus(menu.filter(el => el.storeID === storeID)); 
      })
      .catch((error)=>{
        console.log(error); 
      })
  }

  useEffect(() => {
    componentDidMount(); 
}, [menus]); 

  function renderBanner(){
    return <Banner store={stores}></Banner>
  }

  function menuList(){
    return menus.map(currentMenu => {
      return <MenuBox key={currentMenu._id} menu={currentMenu}/>
    })
  }

    return (
        <>
          <Dashboard />
          {renderBanner()}
          <div className='menu-container'>
          {menuList()}
        </div>
        </>
      )
}
