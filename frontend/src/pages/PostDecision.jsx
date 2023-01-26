import { useParams } from "react-router-dom";
import React, { useState, useEffect } from "react";
import NavBarDecision from "../components/Postdecision/NavBarDecision";
import NavBar from "../components/dashboard/NavBardash";
import api from "../services/api";
import "./PostDecision.css";
import MenuBar from "../components/Postdecision/MenuBar";
import BodyDecision from "../components/Postdecision/BodyDecision";
import TextEditor from "../components/Postdecision/TextEditor";
import ConflitEditor from "../components/Postdecision/ConflitEditor";
import FinalDecisionEditor from "../components/Postdecision/FinalDecisionEditor";
import FirstDecisionEditor from "../components/Postdecision/FirstDecisionEditor";

export default function PostDecision() {
  const [info, setInfo] = useState();
  const [notice, setNotice] = useState([]);
  const [conflit, setConflit] = useState([]);
  const [firstdecision, setFirstdecision] = useState([]);
  const [finaldecision, setFinaldecision] = useState([]);
  const [shown, setShown] = useState(true);
  const [hide, setHide] = useState(true);
  const [shownAvis, setShownAvis] = useState(true);
  const [shownFirstDecision, setShownFirstDecision] = useState(true);
  const [shownFinalDecision, setShownFinalDecision] = useState(true);
  const { nbdec } = useParams();

  const getDecision = () => {
    api
      .get(`decision/user/${nbdec}`)
      .then((response) => setInfo(response.data))
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
  const getFinalDecision = () => {
    api
      .get(`finaldecision/${nbdec}`)
      .then((res) => setFinaldecision(res.data))
      .catch((err) => err.response);
  };
  const getFirstDecision = () => {
    api
      .get(`firstdecision/${nbdec}`)
      .then((res) => setFirstdecision(res.data))
      .catch((err) => err.response);
  };

  useEffect(() => {
    getDecision();
    getConflit();
    getAvis();
    getFinalDecision();
    getFirstDecision();
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
  const handleFirstDecision = () => {
    setShownFirstDecision(!shownFirstDecision);
  };
  const handleFinalDecision = () => {
    setShownFinalDecision(!shownFinalDecision);
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
            finaldecision={finaldecision}
            firstdecision={firstdecision}
            nbdec={nbdec}
          />
        )}
        <MenuBar
          handleClick={handleClick}
          handleConflit={handleConflit}
          handleAvis={handleAvis}
          handleFirstDecision={handleFirstDecision}
          handleFinalDecision={handleFinalDecision}
        />
        <TextEditor shownAvis={shownAvis} nbdec={nbdec} />
        <FinalDecisionEditor shownFinalDecision={hide} nbdec={nbdec} />
        <FirstDecisionEditor shownFirstDecision={hide} nbdec={nbdec} />
        <ConflitEditor hide={hide} nbdec={nbdec} />
      </div>
    </div>
  );
}
