import React, {useState, useEffect} from 'react';
import axios from 'axios';
import {Link} from 'react-router-dom';


const PembicarasLists = () => {
const [pembicaras, setPembicaras] = useState([]);

useEffect(() => {
  getPembicara();
}, []);

const getPembicara = async () => {
  const response = await axios.get('https://seminar-backend-database-production.up.railway.app/pembicara/');
  setPembicaras(response.data.data);
  console.log(response.data.data);
  }

const deletePembicara = async (id) => {
  try
  {
    await axios.delete(`https://seminar-backend-database-production.up.railway.app/pembicara/${id}`);
    getPembicara();
  }
  catch (error) {
    console.log(error);
  }
}
  return (
    <div className="columns mt-6 is-centered">
        <div style={{display: 'block',position: 'absolute', top:'30px', margin:'10px', left:'45%' ,overflowX: 'auto'}}>
        <Link to={'add'} className='button is-success'>Add new</Link>
        </div>
      <div className="columns is-half" style={{top:'100px', position:'absolute'}}>
        <table className='table is-striped is-fullwidth'>
          <thead>
            <tr>
              <th>No</th>
              <th>Nama</th>
              <th>Topic</th>
              <th>Email</th>
              <th>ID Acara Seminar</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {pembicaras.map((pembicara, index) => (
              <tr key={pembicara.id}>
                <td>{index + 1}</td>
                <td>{pembicara.namaPembicara}</td>
                <td>{pembicara.topic}</td>
                <td>{pembicara.emailPembicara}</td>
                <td>{pembicara.idAcaraSeminar}</td>
                <td>
                  <Link to={`edit/${pembicara.id}`} className="button is-small is-info">Edit</Link>
                  <button onClick={() => deletePembicara(pembicara.id)} className="button is-small is-danger">Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default PembicarasLists