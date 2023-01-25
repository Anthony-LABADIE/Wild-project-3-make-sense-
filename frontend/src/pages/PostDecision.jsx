import { useParams } from "react-router-dom";
import React, { useState, useEffect, useContext } from "react";
import NavBarDecision from "../components/Postdecision/NavBarDecision";
import NavBar from "../components/dashboard/NavBardash";
import api from "../services/api";
import MenuBar from "../components/Postdecision/MenuBar";
import BodyDecision from "../components/Postdecision/BodyDecision";
import TextEditor from "../components/Postdecision/TextEditor";
import ConflitEditor from "../components/Postdecision/ConflitEditor";
import { authContext } from "../hooks/authContext";

export default function PostDecision() {
  const { auth } = useContext(authContext);
  const [info, setInfo] = useState();
  const [notice, setNotice] = useState([]);
  const [conflit, setConflit] = useState([]);
  const [shown, setShown] = useState(true);
  const [hide, setHide] = useState(true);
  const [authDecision, setAuthDecision] = useState();
  const [shownAvis, setShownAvis] = useState(true);
  const { nbdec } = useParams();

  const getDecision = () => {
    api
      .get(`decision/user/${nbdec}`)
      .then((response) => setInfo(response.data))
      .catch((err) => err.response);
  };

  const getAuthDecision = () => {
    api
      .get(`/decision/authorization/user/single/${nbdec}/${auth.data.id}`, {
        withCredentials: true,
      })
      .then((response) => setAuthDecision(response.data))
      .catch((err) => err.response);
  };
  const getAvis = () => {
    api
      .get(`notice/${nbdec}`)
      .then((res) => setNotice(res.data))
      .catch((err) => err.response);
  };

  const getConflit = () => {
    api
      .get(`conflict/${nbdec}`)
      .then((res) => setConflit(res.data))
      .catch((err) => err.response);
  };

  useEffect(() => {
    getDecision();
    getConflit();
    getAvis();
    getAuthDecision();
  }, [nbdec]);

  const handleClick = () => {
    setShown(!shown);
  };

  const handleConflit = () => {
    setHide(!hide);
  };

  const handleAvis = () => {
    setShownAvis(!shownAvis);
  };

  return (
    <div>
      <NavBar />

      <div className="containerDecision">
        {info && <NavBarDecision info={info} />}

        {info && (
          <BodyDecision
            info={info}
            shown={shown}
            notice={notice}
            conflit={conflit}
            nbdec={nbdec}
          />
        )}
        {authDecision && (
          <MenuBar
            handleClick={handleClick}
            handleConflit={handleConflit}
            handleAvis={handleAvis}
            authDecision={authDecision}
            nbdec={nbdec}
          />
        )}
        <TextEditor shownAvis={shownAvis} nbdec={nbdec} />
        <ConflitEditor hide={hide} nbdec={nbdec} />
      </div>
    </div>
  );
}
