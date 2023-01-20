import { useParams } from "react-router-dom";
import React, { useState, useEffect } from "react";
import NavBarDecision from "../components/Postdecision/NavBarDecision";
import NavBar from "../components/dashboard/NavBardash";
import api from "../services/api";
import MenuBar from "../components/Postdecision/MenuBar";
import BodyDecision from "../components/Postdecision/BodyDecision";
import TextEditor from "../components/Postdecision/TextEditor";

export default function PostDecision() {
  const [info, setInfo] = useState();
  const [shown, setShown] = useState(true);
  const { nbdec } = useParams();

  const getDecision = () => {
    api
      .get(`decision/user/${nbdec}`)
      .then((response) => setInfo(response.data))
      .catch((err) => err.response);
  };

  useEffect(() => {
    getDecision();
  }, [nbdec]);

  const handleClick = () => {
    setShown(!shown);
  };

  return (
    <div>
      <NavBar />

      <div className="containerDecision">
        {info && <NavBarDecision info={info} />}

        {info && <BodyDecision info={info} shown={shown} />}
        <MenuBar handleClick={handleClick} />
        <TextEditor shown={shown} />
      </div>
    </div>
  );
}
