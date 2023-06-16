import { useState } from "react";
import FormHeader from "./components/formHeader"; 
import axios from 'axios'; 
import { v4 as uuidv4 } from "uuid"; 

export default function AddStore(){
    const [nama, setNama] = useState("");
    const [jalan, setJalan] = useState("");
    const [kecamatan, setKecamatan] = useState("");
    const [provinsi, setProvinsi] = useState("");

    function onChangeNama(e){
        setNama(e.target.value); 
    }

    function onChangeJalan(e){
        setJalan(e.target.value); 
    }

    function onChangeKecamatan(e){
        setKecamatan(e.target.value); 
    }

    function onChangeProvinsi(e){
        setProvinsi(e.target.value); 
    }

    function onSubmit(e) {
        e.preventDefault(); 
        const store = {
            storeID : uuidv4(), 
            nama : nama, 
            jalan : jalan,
            kecamatan : kecamatan, 
            provinsi : provinsi
        }

        console.log(store); 
        axios.post('http://localhost:5000/store/add', store)
            .then(res => console.log(res.data)); 

        setNama(''); 
        setJalan(''); 
        setKecamatan(''); 
        setProvinsi(''); 
    
        window.location = "/"; 
    }

    return (<>
        <FormHeader title="New Store" />
        <div className="container-sm">
            <form onSubmit={onSubmit}>
                <div className="form-group">
                    <label>Nama Toko</label>
                    <input type="text" 
                    required 
                    className="form-control"
                    value={nama}
                    onChange={onChangeNama}></input>
                    
                    <label>Jalan</label>
                    <input type="text" 
                    required 
                    className="form-control"
                    value={jalan}
                    onChange={onChangeJalan}></input>
                    
                    <label>Kecamatan</label>
                    <input type="text" 
                    required 
                    className="form-control"
                    value={kecamatan}
                    onChange={onChangeKecamatan}></input>
                    
                    <label>Provinsi</label>
                    <input type="text" 
                    required 
                    className="form-control"
                    value={provinsi}
                    onChange={onChangeProvinsi}></input>
                </div>
                <div className="form-group">
                    <input type="submit" className="btn btn-primary btn-custom"></input>
                </div>
            </form>
        </div>
    </>);
}