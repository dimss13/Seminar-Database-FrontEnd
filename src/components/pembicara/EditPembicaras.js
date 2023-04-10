import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";

const EditPembicara = () => {
  const [namaPembicara, setNama] = useState("");
  const [topic, setTopic] = useState("");
  const [emailPembicara, setEmail] = useState("");
  const [idAcaraSeminar, setIDAcaraSeminar] = useState("");
  const navigate = useNavigate();
  const { id } = useParams();

  useEffect(() => {
    getPembicaraByID();
  }, []);

  const updatePembicara = async (e) => {
    e.preventDefault();
    try {
      await axios.patch(`https://seminar-backend-database-production.up.railway.app/pembicara/${id}`, {
        namaPembicara,
        topic,
        emailPembicara,
      });
      navigate("/pembicara");
    } catch (error) {
      console.log(error);
    }
  };

  const getPembicaraByID = async () => {
    const response = await axios.get(`https://seminar-backend-database-production.up.railway.app/pembicara/${id}`);
    setNama(response.data.data.namaPembicara);
    setTopic(response.data.data.topic);
    setEmail(response.data.data.emailPembicara);
  };

  return (
    <div className="columns mt-5 is-centered">
      <div className="column is-half">
        <form onSubmit={updatePembicara}>
          <div className="field">
            <label className="label">namaPembicara</label>
            <div className="control">
              <input
                type="text"
                className="input"
                value={namaPembicara}
                onChange={(e) => setNama(e.target.value)}
                placeholder="namaPembicara"
              />
            </div>
          </div>
          <div className="field">
            <label className="label">topic</label>
            <div className="control">
              <input
                type="text"
                className="input"
                value={topic}
                onChange={(e) => setTopic(e.target.value)}
                placeholder="topic"
              />
            </div>
          </div>
          <div className="field">
            <label className="label">emailPembicara</label>
            <div className="control">
            <input
                type="text"
                className="input"
                value={emailPembicara}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="emailPembicara"
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
                onChange={(e) => setEmail(e.target.value)}
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

export default EditPembicara;