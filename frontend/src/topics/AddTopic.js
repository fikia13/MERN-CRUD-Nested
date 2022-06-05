import React,{useState, useEffect} from 'react'
import {useParams} from 'react-router-dom'
import axios from 'axios';
import {useNavigate} from "react-router-dom";

function AddTopic() {
    const [name, setName] = useState("");
    const [courseId, setCourseId ] = useState("");
    const {id, idtopic} = useParams();
    const navigate = useNavigate();

    useEffect(() =>{
        setCourseId(id);
    }, [])

    const saveTopic= async(e) => {
        e.preventDefault();
        try{
            await axios.post(`http://localhost:5000/topic`,{
                courseId,
                name
            });
            navigate(`/${id}`);
        } catch (err){
            console.log(err)
        }
    }


  return (
    <div className="columns is-centered mt-5">
        <div className="column is-half">
            <h1 className='is-size-1'>Tambah Course</h1>
            <form onSubmit={saveTopic}>
            <div className="field">
                
            <label htmlFor="" className='label'>Id Course</label>
                    <div className="control">
                        <input type="text" className='input' 
                        value={id}
                        onChange={(e) => setName(e.target.value)}   
                        placeholder='name'
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

export default AddTopic