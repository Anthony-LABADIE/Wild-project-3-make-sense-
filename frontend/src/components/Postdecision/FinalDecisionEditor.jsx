import PropTypes from "prop-types";
import React, { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { authContext } from "../../hooks/authContext";
import api from "../../services/api";
import "./TextEditor.css";

function FinalDecisionEditor({ shownFinalDecision, nbdec }) {
  const [finalDecision, setFinalDecision] = useState({});
  const [content, setContent] = useState();

  const navigate = useNavigate();
  const { auth } = useContext(authContext);
  const handleChange = (e) => {
    setContent({
      ...content,
      content: e.target.value,
    });

    setFinalDecision({
      id_decision: nbdec,
      id_user: auth.data.id,
      content: content.content,
      date: "2022-01-01",
    });
  };

  const handleSubmitConnexion = (e) => {
    e.preventDefault();
    if (finalDecision) {
      api
        .post("finaldecision/", finalDecision)
        .then((res) => {
          if (res.status === 200) {
            navigate("/dashboard");
          }
        })
        .catch((err) => err.response);
    }
  };
  return (
    <div style={{ display: shownFinalDecision ? "none" : "block" }}>
      <h1 className="avis">Donne ta 1er decision : Make Sense France </h1>

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

export default FinalDecisionEditor;

FinalDecisionEditor.propTypes = {
  shownFinalDecision: PropTypes.string.isRequired,
  nbdec: PropTypes.string.isRequired,
};
