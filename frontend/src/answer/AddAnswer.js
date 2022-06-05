import React,{useState, useEffect} from 'react'
import {useParams} from 'react-router-dom'
import axios from 'axios';
import {useNavigate} from "react-router-dom";

function AddAnswer() {
    const [name, setName] = useState("");
    const [questionId, setQuestionId ] = useState("");
    const {id, idtopic, idquis, idques} = useParams();
    const navigate = useNavigate();

    useEffect(() =>{
        setQuestionId(idques);
    }, [])

    const saveAnswer= async(e) => {
        e.preventDefault();
        try{
            await axios.post(`http://localhost:5000/answer`,{
                questionId,
                name
            });
            navigate(`/${id}/v/${idtopic}/v/${idquis}/v/${idques}`);
        } catch (err){
            console.log(err)
        }
    }


  return (
    <div className="columns is-centered mt-5">
        <div className="column is-half">
            <h1 className='is-size-1'>Tambah Answer</h1>
            <form onSubmit={saveAnswer}>
            <div className="field">
                
            <label htmlFor="" className='label'>Id Question</label>
                    <div className="control">
                        <input type="text" className='input' 
                        value={idques}
                        onChange={(e) => setName(e.target.value)}   
                        placeholder='name'
                        disabled
                        />   
                    </div>

                    <label htmlFor="" className='label'>Nama Answer</label>
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

export default AddAnswer