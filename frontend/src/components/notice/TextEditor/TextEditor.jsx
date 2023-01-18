import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import api from "../../../services/api";
import "./TextEditor.css";

function TextEditor() {
  const [notice, setNotice] = useState({});
  const navigate = useNavigate();

  const handleChange = (e) => {
    setNotice({ ...notice, notice: e.target.value });
  };
  const handleSubmitConnexion = (e) => {
    e.preventDefault();
    if (notice) {
      api
        .post("notice/", { ...notice })
        .then((res) => {
          if (res.status === 200) {
            navigate("/decision");
          }
        })
        .catch((err) => alert(err.response));
    }
  };
  return (
    <div>
      <h1 className="avis">Donne ton avis : Make Sense France </h1>
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

export default TextEditor;
