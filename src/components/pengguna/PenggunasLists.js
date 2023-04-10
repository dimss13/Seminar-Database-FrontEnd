import React, {useState, useEffect} from 'react';
import axios from 'axios';
import {Link} from 'react-router-dom';


const PenggunasLists = () => {
const [penggunas, setPenggunas] = useState([]);

useEffect(() => {
  getPenggunas();
}, []);

const getPenggunas = async () => {
  const response = await axios.get('https://seminar-backend-database-production.up.railway.app/pengguna/');
  setPenggunas(response.data.data);
  console.log(response.data.data);
  }

const deletePengguna = async (id) => {
  try
  {
    await axios.delete(`https://seminar-backend-database-production.up.railway.app/pengguna/${id}`);
    getPenggunas();
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
              <th>Email</th>
              <th>noTelp</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {penggunas.map((user, index) => (
              <tr key={user.id}>
                <td>{index + 1}</td>
                <td>{user.namaPengguna}</td>
                <td>{user.email}</td>
                <td>{user.noTelp}</td>
                <td>
                  <Link to={`edit/${user.id}`} className="button is-small is-info">Edit</Link>
                  <button onClick={() => deletePengguna(user.id)} className="button is-small is-danger">Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default PenggunasLists