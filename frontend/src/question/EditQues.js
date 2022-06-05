import React,{useState, useEffect} from 'react'
import {useParams} from 'react-router-dom'
import axios from 'axios';
import {useNavigate} from "react-router-dom";

function EditQues() {
    const [name, setName] = useState("");
    const [quisId, setQuisId ] = useState("");
    const {id, idtopic, idquis, idques} = useParams();
    const navigate = useNavigate();

    useEffect(()=>{
        getById();
        console.log(name)
    },[1]) 

    const getById = async () => {
        const response = await axios.get(`http://localhost:5000/question/${idques}`);
        setName(response.data.name);
        setQuisId(response.data.quisId);
    }

    const updateQues = async(e) => {
        e.preventDefault();
        try{
            await axios.patch(`http://localhost:5000/question/${idques}`,{
                quisId,
                name
            });
            navigate(`/${id}/v/${idtopic}/v/${idquis}`);
        } catch (err){
            console.log(err)
        }
    }

  return (
    <div className="columns is-centered mt-5">
        <div className="column is-half">
            <h1 className='is-size-1'>Edit Question</h1>
            <form onSubmit={updateQues}>
            <div className="field">

                    <label htmlFor="" className='label'>ID Quis</label>
                    <div className="control">
                        <input type="text" className='input'
                        value={idques}
                        disabled
                        />   
                    </div>
                    <label htmlFor="" className='label'>Nama Question</label>
                    <div className="control">
                    <input type="text" className='input' 
                        value={name}
                        onChange={(e) => setName(e.target.value)}   
                        placeholder='name'/>    
                    </div>
                </div>
                <div className="field">
                    <button type='submit' className='button is-success'>save</button>
                </div>
            </form>
        </div>
    </div>
  )
}

export default EditQues