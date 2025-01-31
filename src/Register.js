import React, { useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";

const Register = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    nome: "",
    cognome: "",
    email: "",
    username: "",
    password: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "http://localhost:3000/register",
        formData
      ); // Assicurati che l'URL sia corretto
      if (response.status === 201) {
        // Assuming 201 is the status code for successful user creation
        navigate("/");
        console.log("User created successfully");
      }
    } catch (error) {
      if (error.response) {
        // Il server ha risposto con uno stato diverso da 2xx
        console.error("Error response:", error.response.data);
      } else if (error.request) {
        // La richiesta è stata fatta ma non è stata ricevuta alcuna risposta
        console.error("Error request:", error.request);
      } else {
        // Qualcosa è andato storto nella configurazione della richiesta
        console.error("Error message:", error.message);
      }
    }
  };

  return (
    <div>
      <h1>Crea il tuo account To Study</h1>
      <p>
        Sei già registrato?{" "}
        <Link to="/login">
          <img src="/logo.png" alt="Logo" />
        </Link>
        Accedi
      </p>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="nome"
          value={formData.nome}
          onChange={handleChange}
          placeholder="Nome"
          required
        />
        <input
          type="text"
          name="cognome"
          value={formData.cognome}
          onChange={handleChange}
          placeholder="Cognome"
          required
        />
        <input
          type="text"
          name="username"
          value={formData.username}
          onChange={handleChange}
          placeholder="Username"
          required
        />
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          placeholder="Email"
          required
        />
        <input
          type="password"
          name="password"
          value={formData.password}
          onChange={handleChange}
          placeholder="Password"
          required
        />
        <input
          type="checkbox"
          name="terms"
          checked={formData.terms || false}
          onChange={(e) =>
            setFormData({ ...formData, terms: e.target.checked })
          }
          required
        />
        <label htmlFor="terms">
          Accetto i <Link to="/terms-and-conditions">Termini e Condizioni</Link>
        </label>
        <button type="submit">Registrati</button>
      </form>
    </div>
  );
};

export default Register;
