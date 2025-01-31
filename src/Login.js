import React, { useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";

function Login() {
  const navigate = useNavigate();
  const [errorMessage, setErrorMessage] = useState("");
  const [formData, setFormData] = useState({
    email: "",
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
        "http://localhost:3000/login",
        formData
      ); // Assicurati che l'URL sia corretto
      console.log("Loggin successfully");
      if (response.status === 200) {
        navigate("/");
        console.log("Loggin succes`sfully");
      }
    } catch (error) {
      if (error.response) {
        setErrorMessage(error.response.data.message || "Errore nel login");
        // Il server ha risposto con uno stato diverso da 2xx
      } else if (error.request) {
        setErrorMessage(
          error.request.message ||
            "Errore nel server, contattare l'amministratore"
        );
        // La richiesta è stata fatta ma non è stata ricevuta alcuna risposta
      } else {
        setErrorMessage(
          error.message || "Errore sconosciuto, contattare l'amministratore"
        );
        // Qualcosa è andato storto nella configurazione della richiesta
      }
    }
  };

  return (
    <div>
      <h2>Login</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="Text"
          name="email"
          value={formData.email}
          onChange={handleChange}
          placeholder="Email o Username"
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
        <button type="submit">Login</button>
        <p>
          Non hai un account? <Link to="/register">Registrati qui</Link>
        </p>
      </form>
      {errorMessage && <div className="error-message">{errorMessage}</div>}
    </div>
  );
}

export default Login;
