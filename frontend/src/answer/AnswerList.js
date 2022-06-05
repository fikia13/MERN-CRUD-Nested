import React, { useEffect, useState } from 'react';
import {useParams, Link} from "react-router-dom";
import axios from 'axios';

function AnswerList() {
    const [data, setData] = useState([]);
    const {id, idtopic, idquis, idques,} = useParams();

    useEffect(() =>{
        getAnswer();

    },[1]);
    
    const getAnswer = async () =>{
        const response = await axios.get(`http://localhost:5000/answers/${idques}`)
        setData(response.data)
    }

    const deleteAnswer = async(value) => {
        try{
            const response = await axios.delete(`http://localhost:5000/answer/${value}`);
            getAnswer();
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
                        <th>Nama Answer</th>
                        <th>Id Answer</th>
                        <th>Aksi</th>
                    </tr>
                </thead>
                <tbody>
                { data.map((quis,index) => (
                        <tr>
                            <td>{index + 1}</td>
                            {/* <td><a href={`${tp.id}`}>{tp.name}</a></td> */}
                            <td>
                            {quis.name}
                            </td>
                            <td>{quis._id}</td>
                            <td>
                                <Link to={`edit/${quis._id}`} className='button is-small is-info'>Edit</Link>
                                <button className='button is-small is-danger' onClick={()=> deleteAnswer(quis._id)}>
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

export default AnswerList;