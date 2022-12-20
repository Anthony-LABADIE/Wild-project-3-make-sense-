import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "../../pages/connexionpage.css";

export default function FormInscription() {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [message, setMessage] = useState("");
  const navigate = useNavigate();

  const emailValidation = (e) => {
    const pattern = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{1,2})+$/;
    const emailValue = e.target.value;
    setEmail(emailValue);
    if (email.match(pattern)) {
      setMessage("your mail it's good");
    } else {
      setMessage("It's not a mail");
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email && password) {
      axios
        .post(
          "http://localhost:5000/api/user/login",
          { email, password },
          { withCredentials: true }
        )
        .then((res) => {
          if (res.status === 200) {
            navigate("/dashboard");
          }
        })
        .catch((err) => alert(err.response));
    } else {
      alert("Please specify both email and password");
    }
  };

  return (
    <form className="form-connexion" onSubmit={handleSubmit}>
      <h2>CONNEXION</h2>
      <div id="mail">
        <input
          type="text"
          id="email"
          name="mail"
          placeholder="adresse mail"
          value={email}
          onChange={emailValidation}
          required="required"
        />
        <p> {message} </p>
      </div>

      <div id="password">
        <input
          type="text"
          name="password"
          id="pass"
          placeholder="mot de passe"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required="required"
        />
      </div>

      <button type="submit" id="btn-inscription" value="Login">
        Connexion
      </button>
    </form>
  );
}
