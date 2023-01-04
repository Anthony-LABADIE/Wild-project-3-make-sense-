import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import api from "../../services/api";
import "./Forminscription.css";
import PWDRequisite from "./PWDRequiste";

export default function FormInscription() {
  const [input, setInput] = useState({
    firstname: "",
    lastname: "",
    password: "",
  });

  const [email, setEmail] = useState({ email: "" });

  const [message, setMessage] = useState("");
  const [pwdRequiste, setPWDRquisite] = useState(false);
  const navigate = useNavigate();

  const handleChange = (e) => {
    setInput({ ...input, [e.target.name]: e.target.value });
  };

  const [checks, setChecks] = useState({
    capsLetterCheck: false,
    numberCheck: false,
    pwdLengthCheck: false,
    specialCharCheck: false,
  });

  const emailValidation = (e) => {
    const pattern = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{1,2})+$/;
    const emailValue = e.target.value;
    setEmail({ email: emailValue });
    if (email.email.match(pattern)) {
      setMessage("your mail it's good");
    } else {
      setMessage("It's not a mail");
    }
  };

  const handleOnFocus = () => {
    setPWDRquisite(true);
  };

  const handleOnBlur = () => {
    setPWDRquisite(false);
  };

  const handleOnKeyUp = (e) => {
    const { value } = e.target;
    const capsLetterCheck = /[A-Z]/.test(value);
    const numberCheck = /[0-9]/.test(value);
    const pwdLengthCheck = value.length >= 8;
    const specialCharCheck = /[!@#$%^&*.]/.test(value);
    setChecks({
      capsLetterCheck,
      numberCheck,
      pwdLengthCheck,
      specialCharCheck,
    });
  };

  const handleSubmitConnexion = (e) => {
    e.preventDefault();
    if (input.lastname && input.firstname && email && input.password) {
      api
        .post("user/", { ...input, ...email }, { withCredentials: true })
        .then((res) => {
          if (res.status === 200) {
            navigate("/connexion");
          }
        })
        .catch((err) => alert(err.response));
    } else {
      alert("Please specify both email and password");
    }
  };

  return (
    <>
      <form className="form">
        <h2>Créer un compte gratuit</h2>
        <div id="lastname">
          <label htmlFor="lastname">Lastname</label>
          <input
            type="text"
            value={input.lastname}
            placeholder="Lastname"
            onChange={handleChange}
            name="lastname"
            required="required"
            id="lastnameConnexion"
          />
        </div>
        <div id="firstname">
          <label htmlFor="firstname">Firstname</label>
          <input
            type="text"
            value={input.firstname}
            placeholder="Firstname"
            onChange={handleChange}
            name="firstname"
            required="required"
            id="firstnameConnexion"
          />
        </div>

        <div id="mail">
          <label htmlFor="email" className="label">
            Email:
          </label>
          <input
            type="email"
            id="emailConnexion"
            required="required"
            placeholder="email"
            onChange={emailValidation}
            value={email.email}
          />

          <p className="message">{message}</p>
        </div>

        <div id="password">
          <label htmlFor="password">password:</label>
          <input
            type="password"
            placeholder="Password"
            id="passwordConnexion"
            value={input.password}
            name="password"
            onChange={handleChange}
            onFocus={handleOnFocus}
            onBlur={handleOnBlur}
            onKeyUp={handleOnKeyUp}
          />
        </div>
        {pwdRequiste ? (
          <PWDRequisite
            capsLetterFlag={checks.capsLetterCheck ? "valid" : "invalid"}
            numberFlag={checks.numberCheck ? "valid" : "invalid"}
            pwdLengthFlag={checks.pwdLengthCheck ? "valid" : "invalid"}
            specialCharFlag={checks.specialCharCheck ? "valid" : "invalid"}
          />
        ) : null}

        <button
          type="button"
          id="btn-inscription"
          value="Creation"
          onClick={handleSubmitConnexion}
        >
          S'inscrire à Makesense
        </button>
      </form>
      <div id="termes">
        <h4>En vous inscrivant, vous accepter les</h4>
        <h5>Termes et conditions</h5>
      </div>
    </>
  );
}
