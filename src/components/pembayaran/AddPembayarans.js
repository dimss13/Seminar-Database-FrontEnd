import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const AddPembyaran = () => {
  const [tanggalPembayaran, setTanggal] = useState("");
  const [metodePembyaran, setMetodePembayaran] = useState("");
  const [idPendaftaran, setIDPendaftaran] = useState("");
  const navigate = useNavigate();

  const saveUser = async (e) => {
    e.preventDefault();
    try {
      await axios.post("https://seminar-backend-database-production.up.railway.app/pembayaran", {
        tanggalPembayaran,
        metodePembyaran,
        idPendaftaran,
      });
      navigate("/pembayaran");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="columns mt-5 is-centered">
      <div className="column is-half">
        <form onSubmit={saveUser}>
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
            <label className="label">metodePembyaran</label>
            <div className="control">
              <input
                type="text"
                className="input"
                value={metodePembyaran}
                onChange={(e) => setMetodePembayaran(e.target.value)}
                placeholder="metodePembyaran"
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
              Save
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddPembyaran;