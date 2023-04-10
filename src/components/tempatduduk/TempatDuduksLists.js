import React, {useState, useEffect} from 'react';
import axios from 'axios';
import {Link} from 'react-router-dom';


const TempatDuduksLists = () => {
const [tempatduduks, setTempatDuduk] = useState([]);

useEffect(() => {
  getTempatDuduks();
}, []);

const getTempatDuduks = async () => {
  const response = await axios.get('https://seminar-backend-database-production.up.railway.app/tempatduduk/');
  setTempatDuduk(response.data.data);
  console.log(response.data.data);
  }

const deleteTempatDuduk = async (id) => {
  try
  {
    await axios.delete(`https://seminar-backend-database-production.up.railway.app/tempatduduk/${id}`);
    getTempatDuduks();
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
              <th>nomorKursi</th>
              <th>statusKursi</th>
              <th>lokasiKursi</th>
              <th>idPengguna</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {tempatduduks.map((tempatduduk, index) => (
              <tr key={tempatduduk.id}>
                <td>{index + 1}</td>
                <td>{tempatduduk.nomorKursi}</td>
                <td>{tempatduduk.statusKursi}</td>
                <td>{tempatduduk.lokasiKursi}</td>
                <td>{tempatduduk.idPengguna}</td>
                <td>
                  <Link to={`edit/${tempatduduk.id}`} className="button is-small is-info">Edit</Link>
                  <button onClick={() => deleteTempatDuduk(tempatduduk.id)} className="button is-small is-danger">Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default TempatDuduksLists