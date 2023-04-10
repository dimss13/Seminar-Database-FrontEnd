import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";

const EditPembayaran = () => {
  const [tanggalPembayaran, setTanggal] = useState("");
  const [metodePembayaran, setMetodePembayaran] = useState("");
  const [idPendaftaran, setIDPendaftaran] = useState("");
  const navigate = useNavigate();
  const { id } = useParams();

  useEffect(() => {
    getPembayaranByID();
  }, []);

  const updatePembayaran = async (e) => {
    e.preventDefault();
    try {
      await axios.patch(`https://seminar-backend-database-production.up.railway.app/pembayaran/${id}`, {
        tanggalPembayaran,
        metodePembayaran,
        idPendaftaran,
      });
      navigate("/pembayaran");
    } catch (error) {
      console.log(error);
    }
  };

  const getPembayaranByID = async () => {
    const response = await axios.get(`https://seminar-backend-database-production.up.railway.app/pembayaran/${id}`);
    setTanggal(response.data.tanggalPembayaran);
    setMetodePembayaran(response.data.metodePembayaran);
    setIDPendaftaran(response.data.idPendaftaran);
  };

  return (
    <div className="columns mt-5 is-centered">
      <div className="column is-half">
        <form onSubmit={updatePembayaran}>
          <div className="field">
            <label className="label">tanggalPembayaran</label>
            <div className="control">
              <input
                type="text"
                className="input"
                value={tanggalPembayaran}
                onChange={(e) => setTanggal(e.target.value)}
                placeholder="tanggalPembayaran"
              />
            </div>
          </div>
          <div className="field">
            <label className="label">metodePembayaran</label>
            <div className="control">
              <input
                type="text"
                className="input"
                value={metodePembayaran}
                onChange={(e) => setMetodePembayaran(e.target.value)}
                placeholder="metodePembayaran"
              />
            </div>
          </div>
          <div className="field">
            <label className="label">idPendaftaran</label>
            <div className="control">
            <input
                type="text"
                className="input"
                value={idPendaftaran}
                onChange={(e) => setIDPendaftaran(e.target.value)}
                placeholder="idPendaftaran"
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

export default EditPembayaran;