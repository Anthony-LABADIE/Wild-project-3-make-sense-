import PropTypes from "prop-types";
import React, { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { authContext } from "../../hooks/authContext";
import api from "../../services/api";
import "./TextEditor.css";

function ConflitEditor({ hide, nbdec }) {
  const [conflit, setConflit] = useState({});
  const [content, setContent] = useState();

  const navigate = useNavigate();
  const { auth } = useContext(authContext);
  const handleChange = (e) => {
    setContent({
      ...content,
      content: e.target.value,
    });

    setConflit({
      id_decision: nbdec,
      id_user: auth.data.id,
      content: content.content,
      date: "2022-01-01",
    });
  };

  const handleSubmitConnexion = (e) => {
    e.preventDefault();
    if (conflit) {
      api
        .post("conflict/", conflit)
        .then((res) => {
          if (res.status === 200) {
            navigate("/dashboard");
          }
        })
        .catch((err) => err.response);
    }
  };
  return (
    <div style={{ display: hide ? "none" : "block" }}>
      <h1 className="avis">Donne ton Conflit : Make Sense France </h1>

      <textarea
        className="editorr"
        contentEditable="true"
        suppressContentEditableWarning="true"
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

export default ConflitEditor;

ConflitEditor.propTypes = {
  hide: PropTypes.string.isRequired,
  nbdec: PropTypes.string.isRequired,
};
