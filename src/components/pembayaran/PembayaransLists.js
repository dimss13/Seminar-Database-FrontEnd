import React, {useState, useEffect} from 'react';
import axios from 'axios';
import {Link} from 'react-router-dom';


const PembayaransLists = () => {
const [pembayarans, setPembayarans] = useState([]);

useEffect(() => {
  getPembayaran();
}, []);

const getPembayaran = async () => {
  const response = await axios.get('https://seminar-backend-database-production.up.railway.app/pembayaran/');
  setPembayarans(response.data.data);
  console.log(response.data.data);
  }

const deletePembayaran = async (id) => {
  try
  {
    await axios.delete(`https://seminar-backend-database-production.up.railway.app/pembayaran/${id}`);
    getPembayaran();
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
              <th>Tanggal</th>
              <th>Metode</th>
              <th>idPendaftaran</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {pembayarans.map((pembayaran, index) => (
              <tr key={pembayaran.id}>
                <td>{index + 1}</td>
                <td>{pembayaran.tanggalPembayaran}</td>
                <td>{pembayaran.metodePembayaran}</td>
                <td>{pembayaran.idPendaftaran}</td>
                <td>
                  <Link to={`edit/${pembayaran.id}`} className="button is-small is-info">Edit</Link>
                  <button onClick={() => deletePembayaran(pembayaran.id)} className="button is-small is-danger">Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default PembayaransLists