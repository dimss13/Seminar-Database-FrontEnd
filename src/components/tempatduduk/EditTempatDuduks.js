import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";

const EditTempatDuduk = () => {
  const [nomorKursi, setNomor] = useState("");
  const [statusKursi, setStatus] = useState("");
  const [lokasiKursi, setLokasi] = useState("");
  const [idPengguna, setIDPengguna] = useState("");
  const navigate = useNavigate();
  const { id } = useParams();

  useEffect(() => {
    getTempatDudukByID();
  }, []);

  const updateTempatDuduk = async (e) => {
    e.preventDefault();
    try {
      await axios.put(`https://seminar-backend-database-production.up.railway.app/tempatduduk/${id}`, {
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

  const getTempatDudukByID = async () => {
    const response = await axios.get(`https://seminar-backend-database-production.up.railway.app/tempatduduk/${id}`);
    setNomor(response.data.data.nomorKursi);
    setStatus(response.data.data.statusKursi);
    setLokasi(response.data.data.lokasiKursi);
    setIDPengguna(response.data.data.idPengguna);
  };

  return (
    <div className="columns mt-5 is-centered">
      <div className="column is-half">
        <form onSubmit={updateTempatDuduk}>
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
              Update
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default EditTempatDuduk;