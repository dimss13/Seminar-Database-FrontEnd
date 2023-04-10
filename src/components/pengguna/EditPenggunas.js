import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";

const EditPenggunas = () => {
  const [namaPengguna, setNama] = useState("");
  const [email, setEmail] = useState("");
  const [noTelp, setNoTelp] = useState("");
  const navigate = useNavigate();
  const { id } = useParams();

  useEffect(() => {
    getPenggunaByID();
  }, []);

  const updatePengguna = async (e) => {
    e.preventDefault();
    try {
      await axios.put(`https://seminar-backend-database-production.up.railway.app/pengguna/${id}`, {
        namaPengguna,
        email,
        noTelp,
      });
      navigate("/pengguna");
    } catch (error) {
      console.log(error);
    }
  };

  const getPenggunaByID = async () => {
    const response = await axios.get(`https://seminar-backend-database-production.up.railway.app/pengguna/${id}`);
    setNama(response.data.data.namaPengguna);
    setEmail(response.data.data.email);
    setNoTelp(response.data.data.noTelp);
  };

  return (
    <div className="columns mt-5 is-centered">
      <div className="column is-half">
        <form onSubmit={updatePengguna}>
          <div className="field">
            <label className="label">Name</label>
            <div className="control">
              <input
                type="text"
                className="input"
                value={namaPengguna}
                onChange={(e) => setNama(e.target.value)}
                placeholder="Name"
              />
            </div>
          </div>
          <div className="field">
            <label className="label">Email</label>
            <div className="control">
              <input
                type="text"
                className="input"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Email"
              />
            </div>
          </div>
          <div className="field">
            <label className="label">noTelp</label>
            <div className="control">
            <input
                type="text"
                className="input"
                value={noTelp}
                onChange={(e) => setNoTelp(e.target.value)}
                placeholder="noTelp"
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

export default EditPenggunas;