import React, { useState, useEffect } from "react";
import api from "../../services/api";

export default function NavDec() {
  const [info, setInfo] = useState();

  const getDecision = () => {
    api
      .get("decision/:id", { withCredentials: true })
      .then((response) => setInfo(response.data))
      .catch((err) => alert(err.response));
  };

  useEffect(() => {
    getDecision();
  }, []);

  return (
    <div>
      <h1>{info.title} </h1>
    </div>
  );
}
