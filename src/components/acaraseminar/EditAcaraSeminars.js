import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";

const EditAcaraSeminar = () => {
  const [namaSeminar, setNama] = useState("");
  const [tanggalSeminar, setTanggal] = useState("");
  const [lokasiSeminar, setLokasi] = useState("");
  const [hargaTiket, setHarga] = useState("");
  const navigate = useNavigate();
  const { id } = useParams();

  useEffect(() => {
    getUserById();
  }, []);

  const updateUser = async (e) => {
    e.preventDefault();
    try {
      await axios.patch(`https://seminar-backend-database-production.up.railway.app/acaraseminar/${id}`, {
        namaSeminar,
        tanggalSeminar,
        lokasiSeminar,
        hargaTiket
      });
      navigate("/acaraseminar");
    } catch (error) {
      console.log(error);
    }
  };

  const getUserById = async () => {
    const response = await axios.get(`https://seminar-backend-database-production.up.railway.app/acaraseminar/${id}`);
    setNama(response.data.data.namaSeminar);
    setTanggal(response.data.data.tanggalSeminar);
    setLokasi(response.data.data.lokasiSeminar);
    setHarga(response.data.data.hargaTiket);
  };

  return (
    <div className="columns mt-5 is-centered">
      <div className="column is-half">
        <form onSubmit={updateUser}>
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
            <label className="label">lokasiSeminar</label>
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
              Update
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default EditAcaraSeminar;