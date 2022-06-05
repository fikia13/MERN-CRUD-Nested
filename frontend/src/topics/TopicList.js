import React, { useEffect, useState } from 'react';
import {useParams, Link} from "react-router-dom";
import axios from 'axios';

function ListTopic() {
    const [data, setData] = useState([]);
    const {id, idtopic} = useParams();

    useEffect(() =>{
        getTopic();

    },[1]);
    
    const getTopic = async () =>{
        const response = await axios.get(`http://localhost:5000/topics/${id}`)
        setData(response.data)
    }

    const deleteTopic = async(value) => {
        try{
            const response = await axios.delete(`http://localhost:5000/topic/${value}`);
            getTopic();
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
                        <th>Nama Topic</th>
                        <th>Id Topic</th>
                        <th>Aksi</th>
                    </tr>
                </thead>
                <tbody>
                {
                        data.map((tp,index) => (
                        <tr>
                            <td>{index + 1}</td>
                            {/* <td><a href={`${tp.id}`}>{tp.name}</a></td> */}
                            <td>
                            <Link to={`v/${tp._id}`}>{tp.name}</Link>
                            </td>
                            <td>{tp._id}</td>
                            <td>
                                <Link to={`edit/${tp._id}`} className='button is-small is-info'>Edit</Link>
                                <button className='button is-small is-danger' onClick={()=> deleteTopic(tp._id)}>
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

export default ListTopic;