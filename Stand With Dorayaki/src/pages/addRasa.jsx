import { useState } from "react";
import FormHeader from "./components/formHeader"
import { v4 as uuidv4 } from "uuid"; 
import axios from 'axios'; 

export default function AddRasa(){
    const [rasa, setRasa] = useState("");  
    const [deskripsi, setDeskripsi] = useState(""); 

    function onChangeRasa(e){
        setRasa(e.target.value); 
    }

    function onChangeDeskripsi(e){
        setDeskripsi(e.target.value); 
    }

    function onSubmit(e){
        e.preventDefault(); 
        const resep = {
            resepID : uuidv4(),
            rasa : rasa,
            deskripsi : deskripsi
        }

        console.log(resep); 

        axios.post('http://localhost:5000/resep/add', resep)
            .then(res => console.log(res.data)); 

        setRasa(''); 
        setDeskripsi(''); 
    }

    return (<>
        <FormHeader title="New Recipe"/>
        <div className="container-sm">
            <form onSubmit={onSubmit}>
                <div className="form-group">
                    <label>Nama Resep</label>
                    <input type="text" 
                    required 
                    className="form-control"
                    value={rasa}
                    onChange={onChangeRasa}></input>
                    
                    <label>Deskripsi</label>
                    <input type="text" 
                    required 
                    className="form-control"
                    value={deskripsi}
                    onChange={onChangeDeskripsi}></input>
                </div>
                <div className="form-group">
                    <input type="submit" className="btn btn-primary btn-custom"></input>
                </div>
            </form>
        </div>
    </>);
}