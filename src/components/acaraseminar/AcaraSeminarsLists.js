import React, {useState, useEffect} from 'react';
import axios from 'axios';
import {Link} from 'react-router-dom';


const AcaraSeminarLists = () => {
const [acaraseminars, setAcaraSeminars] = useState([]);

useEffect(() => {
  getAcaraSeminar();
}, []);

const getAcaraSeminar = async () => {
  const response = await axios.get('https://seminar-backend-database-production.up.railway.app/acaraseminar/');
  setAcaraSeminars(response.data.data);
  console.log(response.data.data);
  }

const deleteAcaraSeminar = async (id) => {
  try
  {
    await axios.delete(`https://seminar-backend-database-production.up.railway.app/acaraseminar/${id}`);
    getAcaraSeminar();
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
              <th>tanggal</th>
              <th>Lokasi</th>
              <th>Harga</th>
            </tr>
          </thead>
          <tbody>
            {acaraseminars.map((acaraseminar, index) => (
              <tr key={acaraseminar.id}>
                <td>{index + 1}</td>
                <td>{acaraseminar.namaSeminar}</td>
                <td>{acaraseminar.tanggalSeminar}</td>
                <td>{acaraseminar.lokasiSeminar}</td>
                <td>{acaraseminar.hargaTiket}</td>
                <td>
                  <Link to={`edit/${acaraseminar.id}`} className="button is-small is-info">Edit</Link>
                  <button onClick={() => deleteAcaraSeminar(acaraseminar.id)} className="button is-small is-danger">Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default AcaraSeminarLists