import React, {useState, useEffect} from 'react';
import axios from 'axios';
import {Link} from 'react-router-dom';


const PendaftaranLists = () => {
const [Pendaftarans, setPendaftaran] = useState([]);

useEffect(() => {
  getPendaftarans();
}, []);

const getPendaftarans = async () => {
  const response = await axios.get('https://seminar-backend-database-production.up.railway.app/pendaftaran/');
  setPendaftaran(response.data.data);
  console.log(response.data.data);
  }

const deletePendaftaran = async (id) => {
  try
  {
    await axios.delete(`https://seminar-backend-database-production.up.railway.app/pendaftaran/${id}`);
    getPendaftarans();
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
              <th>tanggalPendaftaran</th>
              <th>statusPembayaran</th>
              <th>idPengguna</th>
              <th>idAcaraSeminar</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {Pendaftarans.map((pendaftaran, index) => (
              <tr key={pendaftaran.id}>
                <td>{index + 1}</td>
                <td>{pendaftaran.tanggalPendaftaran}</td>
                <td>{pendaftaran.statusPembayaraan}</td>
                <td>{pendaftaran.idPengguna}</td>
                <td>{pendaftaran.idAcaraSeminar}</td>
                <td>
                  <Link to={`edit/${pendaftaran.id}`} className="button is-small is-info">Edit</Link>
                  <button onClick={() => deletePendaftaran(pendaftaran.id)} className="button is-small is-danger">Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default PendaftaranLists