import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const AddPendaftaran = () => {
  const [tanggalPendaftaran, setTanggal] = useState("");
  const [statusPembayaraan, setStatus] = useState("");
  const [idPengguna, setIDPengguna] = useState("");
  const [idAcaraSeminar, setIDAcaraSeminar] = useState("");
  const navigate = useNavigate();

  const savePendaftaran = async (e) => {
    e.preventDefault();
    try {
      await axios.post("https://seminar-backend-database-production.up.railway.app/pendaftaran", {
        tanggalPendaftaran,
        statusPembayaraan,
        idPengguna,
        idAcaraSeminar
      });
      navigate("/pendaftaran");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="columns mt-5 is-centered">
      <div className="column is-half">
        <form onSubmit={savePendaftaran}>
          <div className="field">
            <label className="label">tanggalPendaftaran</label>
            <div className="control">
              <input
                type="text"
                className="input"
                value={tanggalPendaftaran}
                onChange={(e) => setTanggal(e.target.value)}
                placeholder="tanggalPendaftaran"
              />
            </div>
          </div>
          <div className="field">
            <label className="label">statusPembayaraan</label>
            <div className="control">
              <input
                type="text"
                className="input"
                value={statusPembayaraan}
                onChange={(e) => setStatus(e.target.value)}
                placeholder="statusPembayaraan"
              />
            </div>
          </div>
          <div className="field">
            <label className="label">idPengguna</label>
            <div className="control">
            <input
                type="text"
                className="input"
                value={idPengguna}
                onChange={(e) => setIDPengguna(e.target.value)}
                placeholder="idPengguna"
              />
            </div>
          </div>

          <div className="field">
            <label className="label">idAcaraSeminar</label>
            <div className="control">
            <input
                type="text"
                className="input"
                value={idAcaraSeminar}
                onChange={(e) => setIDAcaraSeminar(e.target.value)}
                placeholder="idAcaraSeminar"
              />
            </div>
          </div>
          <div className="field">
            <button type="submit" className="button is-success">
              Save
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddPendaftaran;