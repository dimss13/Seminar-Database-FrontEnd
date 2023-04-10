import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";

const EditPenyelenggara = () => {
  const [namaPenyelenggara, setNama] = useState("");
  const [alamatPenyelenggara, setAlamat] = useState("");
  const [emailPenyelenggara, setEmail] = useState("");
  const [idAcaraSeminar, setIDAcaraSeminar] = useState("");
  const navigate = useNavigate();
  const { id } = useParams();

  useEffect(() => {
    getPenyelenggaraByID();
  }, []);

  const updatePenyelenggara = async (e) => {
    e.preventDefault();
    try {
      await axios.patch(`https://seminar-backend-database-production.up.railway.app/penyelenggara/${id}`, {
        namaPenyelenggara,
        alamatPenyelenggara,
        emailPenyelenggara,
        idAcaraSeminar
      });
      navigate("/penyelenggara");
    } catch (error) {
      console.log(error);
    }
  };

  const getPenyelenggaraByID = async () => {
    const response = await axios.get(`https://seminar-backend-database-production.up.railway.app/penyelenggara/${id}`);
    setNama(response.data.data.namaPenyelenggara);
    setAlamat(response.data.data.alamatPenyelenggara);
    setEmail(response.data.data.emailPenyelenggara);
    setIDAcaraSeminar(response.data.data.idAcaraSeminar);
  };

  return (
    <div className="columns mt-5 is-centered">
      <div className="column is-half">
        <form onSubmit={updatePenyelenggara}>
          <div className="field">
            <label className="label">namaPenyelenggara</label>
            <div className="control">
              <input
                type="text"
                className="input"
                value={namaPenyelenggara}
                onChange={(e) => setNama(e.target.value)}
                placeholder="namaPenyelenggara"
              />
            </div>
          </div>
          <div className="field">
            <label className="label">alamatPenyelenggara</label>
            <div className="control">
              <input
                type="text"
                className="input"
                value={alamatPenyelenggara}
                onChange={(e) => setAlamat(e.target.value)}
                placeholder="alamatPenyelenggara"
              />
            </div>
          </div>
          <div className="field">
            <label className="label">emailPenyelenggara</label>
            <div className="control">
            <input
                type="text"
                className="input"
                value={emailPenyelenggara}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="emailPenyelenggara"
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

export default EditPenyelenggara;