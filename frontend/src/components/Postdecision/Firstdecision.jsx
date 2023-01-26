import PropTypes from "prop-types";
import React, { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { authContext } from "../../hooks/authContext";
import api from "../../services/api";
import "./TextEditor.css";

function Firstdecision({ hideFirst, nbdec }) {
  const [firstdecision, setFirstdecision] = useState({});
  const [content, setContent] = useState();

  const navigate = useNavigate();
  const { auth } = useContext(authContext);
  const handleChange = (e) => {
    setContent({
      ...content,
      content: e.target.value,
    });

    setFirstdecision({
      id_decision: nbdec,
      id_user: auth.data.id,
      content: content.content,
      date: "2022-01-01",
    });
  };

  const handleSubmitConnexion = (e) => {
    e.preventDefault();
    if (firstdecision) {
      api
        .post("firstdecision", firstdecision)
        .then((res) => {
          if (res.status === 200) {
            navigate("/dashboard");
          }
        })
        .catch((err) => err.response);
    }
  };
  return (
    <div style={{ display: hideFirst ? "none" : "block" }}>
      <h1 className="avis">Première decision : Make Sense France </h1>

      <textarea
        className="editorr"
        contentEditable="true"
        onChange={handleChange}
        type="input"
        id="text-editor"
      />
      <button
        className="btn-publis"
        type="button"
        id="btn-publis"
        value="Creation"
        onClick={handleSubmitConnexion}
      >
        Publier
      </button>
    </div>
  );
}

export default Firstdecision;

Firstdecision.propTypes = {
  hideFirst: PropTypes.string.isRequired,
  nbdec: PropTypes.string.isRequired,
};
