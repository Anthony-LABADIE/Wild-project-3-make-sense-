import React, { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { authContext } from "../../../hooks/authContext";
import api from "../../../services/api";
import "./TextEditor.css";

function TextEditor() {
  const [notice, setNotice] = useState({});
  const [content, setContent] = useState();
  const navigate = useNavigate();
  const { auth } = useContext(authContext);
  const handleChange = (e) => {
    setContent({
      ...content,
      content: e.target.value,
    });
    setNotice({
      id_decision: 1,
      id_user: auth.data.id,
      content: content.content,
      date: "2022-01-01",
    });
  };

  const handleSubmitConnexion = (e) => {
    e.preventDefault();
    if (notice) {
      api
        .post("notice/", notice)
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
