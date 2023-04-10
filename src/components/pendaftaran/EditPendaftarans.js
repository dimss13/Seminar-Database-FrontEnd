import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";

const EditPendaftaran = () => {
  const [tanggalPendaftaran, setTanggal] = useState("");
  const [statusPembayaraan, setStatusPembayaran] = useState("");
  const [idPengguna, setIDPengguna] = useState("");
  const [idAcaraSeminar, setIDAcaraSeminar] = useState("");
  const navigate = useNavigate();
  const { id } = useParams();

  useEffect(() => {
    getPendaftaranByID();
  }, []);

  const updatePendaftaran = async (e) => {
    e.preventDefault();
    try {
      await axios.patch(`https://seminar-backend-database-production.up.railway.app/pendaftaran/${id}`, {
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

  const getPendaftaranByID = async () => {
    const response = await axios.get(`https://seminar-backend-database-production.up.railway.app/pendaftaran/${id}`);
    setTanggal(response.data.data.tanggalPendaftaran);
    setStatusPembayaran(response.data.data.statusPembayaraan);
    setIDPengguna(response.data.data.idPengguna);
    setIDAcaraSeminar(response.data.data.idAcaraSeminar);
  };

  return (
    <div className="columns mt-5 is-centered">
      <div className="column is-half">
        <form onSubmit={updatePendaftaran}>
          <div className="field">
            <label className="label">tanggalPendaftaran</label>
            <div className="control">
              <input
                type="text"
                className="input"
                value={tanggalPendaftaran}
                onChange={(e) => setTanggal(e.target.value)}
                placeholder="taggalPendaftaran"
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
                onChange={(e) => setStatusPembayaran(e.target.value)}
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
              Update
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default EditPendaftaran;