import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const AddAcaraSeminar = () => {
  const [namaSeminar, setNama] = useState("");
  const [tanggalSeminar, setTanggal] = useState("");
  const [lokasiSeminar, setLokasi] = useState("");
  const [hargaTiket, setHarga] = useState("");
  const navigate = useNavigate();

  const saveAcaraSeminar = async (e) => {
    e.preventDefault();
    try {
      await axios.post("https://seminar-backend-database-production.up.railway.app/acaraseminar", {
        namaSeminar,
        tanggalSeminar,
        lokasiSeminar,
        hargaTiket,
      });
      navigate("/acaraseminar");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="columns mt-5 is-centered">
      <div className="column is-half">
        <form onSubmit={saveAcaraSeminar}>
          <div className="field">
            <label className="label">Name</label>
            <div className="control">
              <input
                type="text"
                className="input"
                value={namaSeminar}
                onChange={(e) => setNama(e.target.value)}
                placeholder="Name"
              />
            </div>
          </div>
          <div className="field">
            <label className="label">tanggalSeminar</label>
            <div className="control">
              <input
                type="text"
                className="input"
                value={tanggalSeminar}
                onChange={(e) => setTanggal(e.target.value)}
                placeholder="tanggalSeminar"
              />
            </div>
          </div>

          <div className="field">
            <label className="label">lokasiSeminar</label>
            <div className="control">
              <input
                type="text"
                className="input"
                value={lokasiSeminar}
                onChange={(e) => setLokasi(e.target.value)}
                placeholder="lokasiSeminar"
              />
            </div>
          </div>

          <div className="field">
            <label className="label">hargaTiket</label>
            <div className="control">
            <input
                type="text"
                className="input"
                value={hargaTiket}
                onChange={(e) => setHarga(e.target.value)}
                placeholder="hargaTiket"
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

export default AddAcaraSeminar;