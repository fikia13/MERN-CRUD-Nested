import React,{useState, useEffect} from 'react'
import {useParams} from 'react-router-dom'
import axios from 'axios';
import {useNavigate} from "react-router-dom";

function EditQuis() {
    const [name, setName] = useState("");
    const [topicId, setTopicId ] = useState("");
    const {id, idtopic, idquis} = useParams();
    const navigate = useNavigate();

    useEffect(()=>{
        getById();
        console.log(name)
    },[1]) 

    const getById = async () => {
        const response = await axios.get(`http://localhost:5000/quis/${idquis}`);
        setName(response.data.name);
        setTopicId(response.data.topicId);
    }

    const updateQuis = async(e) => {
        e.preventDefault();
        try{
            await axios.patch(`http://localhost:5000/quis/${idquis}`,{
                topicId,
                name
            });
            navigate(`/${id}/v/${idtopic}`);
        } catch (err){
            console.log(err)
        }
    }

  return (
    <div className="columns is-centered mt-5">
        <div className="column is-half">
            <h1 className='is-size-1'>Edit Topic</h1>
            <form onSubmit={updateQuis}>
            <div className="field">

                    <label htmlFor="" className='label'>ID Topic</label>
                    <div className="control">
                        <input type="text" className='input'
                        value={idquis}
                        disabled
                        />   
                    </div>
                    <label htmlFor="" className='label'>Nama Topic</label>
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

export default EditQuis