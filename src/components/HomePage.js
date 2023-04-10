import React from 'react';
import {Link} from 'react-router-dom';

const HomePage = () => {

  return (
    <div className="columns mt-5 is-centered">
      <div style={{position:'absolute'}}>
         <h1>Seminar Database Backend</h1>
      </div>
      <div style={{position:'relative', display:'flex', justifyContent:'center', top:'2em'}}>
        <Link to={'pengguna'} className='button is-success' style={{margin:'10px'}}>Pengguna</Link>
        <Link to={'acaraseminar'} className='button is-success' style={{margin:'10px'}}>Acara Seminar</Link>
        <Link to={'penyelenggara'} className='button is-success' style={{margin:'10px'}}>Penyelenggara</Link>
        <Link to={'pendaftaran'} className='button is-success' style={{margin:'10px'}}>Pendaftaran</Link>
        <Link to={'pembayaran'} className='button is-success' style={{margin:'10px'}}>Pembayaran</Link>
        <Link to={'tempatduduk'} className='button is-success' style={{margin:'10px'}}>Tempat Duduk</Link>
        <Link to={'pembicara'} className='button is-success' style={{margin:'10px'}}>Pembicara</Link>

      </div>
    </div>
  )
}

export default HomePage;