import { useState, useEffect, useRef } from "react";
import FormHeader from "./components/formHeader";
import axios from 'axios'; 
import { useParams } from "react-router-dom";

export default function AddStock(){
    const [resep, setResep] = useState([]);
    const [_resep, set_Resep] = useState([]);
    const [jumlah, setJumlah] = useState(0);
    const [rasa, setrasa] = useState(''); 
    const userInput = useRef(); 
    let { storeID } = useParams(); 

    function componentDidMount() {
        axios.get('http://localhost:5000/resep/')
            .then(response => {
                if (response.data.length > 0) {
                    set_Resep(response.data),
                    setResep(response.data.map(resep => resep.rasa)),
                    setrasa(response.data[0].rasa); 
                }
            }) 
            .catch((error) => {
                console.log(error);
              })
    }

    useEffect(() => {
        componentDidMount(); 
      }, []); 

    function onChangerasa(e){
        setrasa(e.target.value); 
    }

    function onChangeJumlah(e){
        setJumlah(e.target.value); 
    }

    function onSubmit(e) {
        const picked = _resep.find((el) => el.rasa === rasa);
        console.log(picked.resepID); 
        e.preventDefault(); 
        const stock = {
            storeID : storeID, 
            resepID : picked.resepID, 
            stock : jumlah
        }

        console.log(stock); 

        axios.post('http://localhost:5000/menu/add', stock)
        .then(res => console.log(res.data)); 
        setJumlah(0); 
    }

    return (<>
        <FormHeader title="Add Stock"/>
        <div className="container-sm">
            <form onSubmit={onSubmit}>
                <div className="form-group" >
                    <label>Pilih Resep : </label>
                    <select ref={userInput} 
                    className="form-control"
                    value={rasa}
                    onChange={onChangerasa}
                    >
                        {
                            resep.map(function(rasa) {
                                return <option
                                key={rasa}
                                value={rasa}>
                                    {rasa}
                                </option>
                            })
                        }
                    </select>
                </div>
                <div className="form-group">
                      <label>Jumlah Stock</label>
                      <input type="number" min="0" id="number"
                      required 
                      className="form-control"
                      value={jumlah}
                      onChange={onChangeJumlah}></input>
                </div>
                <div className="form-group">
                    <input type="submit" className="btn btn-primary btn-custom"></input>
                </div>
            </form>
        </div>
    </>)
}