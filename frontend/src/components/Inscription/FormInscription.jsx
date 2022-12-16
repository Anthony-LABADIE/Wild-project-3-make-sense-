import React, { useState } from "react";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import "./Forminscription.css";

export default function FormInscription() {
  const [lastname, setLastName] = useState();
  const [firstname, setFirstName] = useState();
  const [mail, setMail] = useState();
  const [password, setPassword] = useState();

  const schema = yup.object().shape({
    mail: yup.string().email().required(),
    password: yup.string().min(8).max(32).required(),
    lastname: yup.string(),
    firstname: yup.string(),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmitHandler = (data) => {
    console.warn({ data });
    reset();
  };

  const handleChangeLastName = (e) => {
    setLastName(e.targer.value);
  };

  const handleChangeFirstName = (e) => {
    setFirstName(e.targer.value);
  };

  const handleChangeMail = (e) => {
    setMail(e.targer.value);
  };

  const handleChangePassword = (e) => {
    setPassword(e.targer.value);
  };

  return (
    <form className="form" onSubmit={handleSubmit(onSubmitHandler)}>
      <h2>Créer un compte gratuit</h2>
      <input
        type="text"
        id="lastname"
        name="lastname"
        placeholder="Prénom"
        value={lastname}
        onChange={handleChangeLastName}
        // eslint-disable-next-line react/jsx-props-no-spreading
        {...register("lastname")}
        required
      />
      <input
        type="text"
        id="firstname"
        name="firstname"
        placeholder="Nom de famille"
        value={firstname}
        onChange={handleChangeFirstName}
        // eslint-disable-next-line react/jsx-props-no-spreading
        {...register("firstname")}
        required
      />
      <div id="mail">
        <input
          type="text"
          id="email"
          name="mail"
          placeholder="adresse mail"
          value={mail}
          onChange={handleChangeMail}
          // eslint-disable-next-line react/jsx-props-no-spreading
          {...register("mail")}
          required
        />
        <p>{errors.mail?.message}</p>
      </div>

      <div id="password">
        <input
          type="text"
          name="password"
          id="pass"
          placeholder="mot de passe"
          value={password}
          onChange={handleChangePassword}
          // eslint-disable-next-line react/jsx-props-no-spreading
          {...register("password")}
          required
        />
        <p>{errors.password?.message}</p>
      </div>

      <button type="submit" id="btn-inscription">
        S'inscrire à Makesense
      </button>
      <div id="termes">
        <h4>En vous inscrivant, vous accepter les</h4>
        <h5>Termes et conditions</h5>
      </div>
    </form>
  );
}
