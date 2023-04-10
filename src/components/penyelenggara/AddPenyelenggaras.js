import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const AddPenyelenggara = () => {
  const [namaPenyelenggara, setNama] = useState("");
  const [alamatPenyelenggara, setAlamat] = useState("");
  const [emailPenyelenggara, setEmail] = useState("");
  const [idAcaraSeminar, setIDAcaraSeminar] = useState("");
  const navigate = useNavigate();

  const saveUser = async (e) => {
    e.preventDefault();
    try {
      await axios.post("https://seminar-backend-database-production.up.railway.app/penyelenggara", {
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

  return (
    <div className="columns mt-5 is-centered">
      <div className="column is-half">
        <form onSubmit={saveUser}>
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
              Save
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddPenyelenggara;