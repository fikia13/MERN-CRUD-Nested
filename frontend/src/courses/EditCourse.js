import React, {useState, useEffect} from 'react';
import axios from 'axios';
import {useNavigate, useParams} from "react-router-dom";

function EditCourse() {
    const [name, setName] = useState("");
    const [teacher, setTeacher]  = useState("");
    const navigate = useNavigate();
    const {id } = useParams();

    useEffect(()=>{
        getCourseById();
    }, []);

    const updateCourse = async(e) => {
        e.preventDefault();
        try{
            await axios.patch(`http://localhost:5000/course/${id}`,{
                name,
                teacher
            });
            navigate("/");
        } catch (err){
            console.log(err)
        }
    }

    const getCourseById = async () => {
        const response = await axios.get(`http://localhost:5000/course/${id}`);
        setName(response.data.name);
        setTeacher(response.data.teacher);
    }

  return (
    <div className="columns is-centered mt-5">
        <div className="column is-half">
            <h1 className='is-size-1'>Edit Course</h1>
            <form onSubmit={updateCourse}>
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
                    <button type='submit' className='button is-success'>Update</button>
                </div>
            </form>
        </div>
    </div>
  )
}

export default EditCourse;