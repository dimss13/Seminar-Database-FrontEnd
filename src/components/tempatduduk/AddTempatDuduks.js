import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const AddTempatDuduk = () => {
  const [nomorKursi, setNomor] = useState("");
  const [statusKursi, setStatus] = useState("");
  const [lokasiKursi, setLokasi] = useState("");
  const [idPengguna, setIDPengguna] = useState("");
  const navigate = useNavigate();

  const saveTempatDuduk = async (e) => {
    e.preventDefault();
    try {
      await axios.post("https://seminar-backend-database-production.up.railway.app/tempatduduk", {
        nomorKursi,
        statusKursi,
        lokasiKursi,
        idPengguna
      });
      navigate("/tempatduduk");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="columns mt-5 is-centered">
      <div className="column is-half">
        <form onSubmit={saveTempatDuduk}>
          <div className="field">
            <label className="label">nomorKursi</label>
            <div className="control">
              <input
                type="text"
                className="input"
                value={nomorKursi}
                onChange={(e) => setNomor(e.target.value)}
                placeholder="nomorKursi"
              />
            </div>
          </div>
          <div className="field">
            <label className="label">statusKursi</label>
            <div className="control">
              <input
                type="text"
                className="input"
                value={statusKursi}
                onChange={(e) => setStatus(e.target.value)}
                placeholder="statusKursi"
              />
            </div>
          </div>
          <div className="field">
            <label className="label">lokasiKursi</label>
            <div className="control">
            <input
                type="text"
                className="input"
                value={lokasiKursi}
                onChange={(e) => setLokasi(e.target.value)}
                placeholder="lokasiKursi"
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
            <button type="submit" className="button is-success">
              Save
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddTempatDuduk;