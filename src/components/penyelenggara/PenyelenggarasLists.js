import React, {useState, useEffect} from 'react';
import axios from 'axios';
import {Link} from 'react-router-dom';


const PenyelenggarasLists = () => {
const [penyelenggaras, setPenyelenggara] = useState([]);

useEffect(() => {
  getPenyelenggaras();
}, []);

const getPenyelenggaras = async () => {
  const response = await axios.get('https://seminar-backend-database-production.up.railway.app/penyelenggara/');
  setPenyelenggara(response.data.data);
  console.log(response.data.data);
  }

const deletePenyelenggara = async (id) => {
  try
  {
    await axios.delete(`https://seminar-backend-database-production.up.railway.app/penyelenggara/${id}`);
    getPenyelenggaras();
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
              <th>Name</th>
              <th>Alamat</th>
              <th>Email</th>
              <th>idAcaraSeminar</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {penyelenggaras.map((penyelenggara, index) => (
              <tr key={penyelenggara.id}>
                <td>{index + 1}</td>
                <td>{penyelenggara.namaPenyelenggara}</td>
                <td>{penyelenggara.alamatPenyelenggara}</td>
                <td>{penyelenggara.emailPenyelenggara}</td>
                <td>{penyelenggara.idAcaraSeminar}</td>
                <td>
                  <Link to={`edit/${penyelenggara.id}`} className="button is-small is-info">Edit</Link>
                  <button onClick={() => deletePenyelenggara(penyelenggara.id)} className="button is-small is-danger">Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default PenyelenggarasLists