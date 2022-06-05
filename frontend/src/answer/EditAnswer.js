import React,{useState, useEffect} from 'react'
import {useParams} from 'react-router-dom'
import axios from 'axios';
import {useNavigate} from "react-router-dom";

function EditAnswer() {
    const [name, setName] = useState("");
    const [ questionId, setQuesId ] = useState("");
    const {id, idtopic, idquis, idques, idch} = useParams();
    const navigate = useNavigate();

    useEffect(()=>{
        getById();
        console.log(idques)
    },[]) 

    const getById = async () => {
        const response = await axios.get(`http://localhost:5000/answer/${idch}`);
        setName(response.data.name);
        setQuesId(response.data.quesId);
    }

    const updateAnswer = async(e) => {
        e.preventDefault();
        try{
            await axios.patch(`http://localhost:5000/answer/${idch}`,{
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
            <h1 className='is-size-1'>Edit Answer</h1>
            <form onSubmit={updateAnswer}>
            <div className="field">

                    <label htmlFor="" className='label'>ID Answer</label>
                    <div className="control">
                        <input type="text" className='input'
                        value={idch}
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

export default EditAnswer