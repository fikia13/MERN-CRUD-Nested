import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const CourseList = () => {
    const [course, setCourse] = useState([]);

    useEffect(() =>{
        getCourse();
    },[]);

    const getCourse = async () =>{
        const response = await axios.get('http://localhost:5000/course');
        setCourse(response.data);
 
    }

    const deleteUser = async(id) => {
        try{
            const response = await axios.delete(`http://localhost:5000/course/${id}`);
            getCourse();
        }catch(err){
            console.log(err);
        }
    }

  return (
    <div className='columns mt-5 is-centered'>
        <div className='column is-half'>
            <Link to={'add'} className="button is-success">Tambah</Link>
            <table className='table is-striped is-fullwidth'>
                <thead>
                    <tr>
                        <th>No.</th>
                        <th>Nama Kelas</th>
                        <th>Pengampu</th>
                        <th>Aksi</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        course.map((cours,index) => (
                        <tr>
                            <td>{index + 1}</td>
                            {/* <td>{cours.name}</td> */}
                            <td><a href={`${cours._id}`}>{cours.name}</a></td>
                            <td>{cours.teacher}</td>
                            <td>
                                <Link to={`edit/${cours._id}`} className='button is-small is-info'>Edit</Link>
                                <button className='button is-small is-danger' onClick={()=> deleteUser(cours._id)}>
                                    Delete</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    </div>
  )
}

export default CourseList