import React, {useState} from 'react';
import axios from 'axios';
import {useNavigate} from "react-router-dom";

function AddCourse() {
    const [name, setName] = useState("");
    const [teacher, setTeacher]  = useState("");
    const navigate = useNavigate();

    const saveCourse = async(e) => {
        e.preventDefault();
        try{
            await axios.post('http://localhost:5000/course',{
                name,
                teacher
            });
            navigate("/");
        } catch (err){
            console.log(err)
        }
    }

  return (
    <div className="columns is-centered mt-5">
        <div className="column is-half">
            <h1 className='is-size-1'>Tambah Course</h1>
            <form onSubmit={saveCourse}>
                <div className="field">
                    <label htmlFor="" className='label'>Name</label>
                    <div className="control">
                        <input type="text" className='input'
                        value={name}
                        onChange={(e) => setName(e.target.value)}               
                         placeholder='name'/>   
                    </div>
                </div>

                <div className="field">
                    <label htmlFor="" className='label'>Teacher</label>
                    <div className="control">
                        <input type="text" className='input' 
                        value={teacher}
                        onChange={(e) => setTeacher(e.target.value)}   
                        placeholder='teacher'/>   
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

export default AddCourse