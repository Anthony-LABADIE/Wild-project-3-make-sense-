import { useParams } from "react-router-dom";
import React, { useState, useEffect, useContext } from "react";
import NavBarDecision from "../components/Postdecision/NavBarDecision";
import NavBar from "../components/dashboard/NavBardash";
import api from "../services/api";
import "./PostDecision.css";
import MenuBar from "../components/Postdecision/MenuBar";
import BodyDecision from "../components/Postdecision/BodyDecision";
import TextEditor from "../components/Postdecision/TextEditor";
import ConflitEditor from "../components/Postdecision/ConflitEditor";
import Firstdecision from "../components/Postdecision/Firstdecision";
import { authContext } from "../hooks/authContext";
import Finaldecision from "../components/Postdecision/FinalDecision";

export default function PostDecision() {
  const { auth } = useContext(authContext);
  const [info, setInfo] = useState();
  const [notice, setNotice] = useState([]);
  const [conflit, setConflit] = useState([]);
  const [firstdecision, setFirstdecision] = useState([]);
  const [finaldecision, setFinaldecision] = useState([]);
  const [shown, setShown] = useState(true);
  const [hide, setHide] = useState(true);
  const [hideFirst, setHideFirst] = useState(true);
  const [hideFinal, setHideFinal] = useState(true);
  const [authDecision, setAuthDecision] = useState();
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
    getAuthDecision();
  }, [nbdec]);

  const handleClick = () => {
    setShown(!shown);
  };

  const handleConflit = () => {
    setHide(!hide);
  };

  const handleFisrt = () => {
    setHideFirst(!hideFirst);
  };

  const handleFinal = () => {
    setHideFinal(!hideFinal);
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
        {
          (info,
          authDecision && (
            <MenuBar
              handleClick={handleClick}
              handleConflit={handleConflit}
              handleAvis={handleAvis}
              handleFisrt={handleFisrt}
              handleFinal={handleFinal}
              authDecision={authDecision}
              nbdec={nbdec}
              info={info}
            />
          ))
        }
        <TextEditor shownAvis={shownAvis} nbdec={nbdec} />
        <FinalDecisionEditor shownFinalDecision={hide} nbdec={nbdec} />
        <FirstDecisionEditor shownFirstDecision={hide} nbdec={nbdec} />
        <ConflitEditor hide={hide} nbdec={nbdec} />
        <Firstdecision hideFirst={hideFirst} nbdec={nbdec} />
        <Finaldecision hideFinal={hideFinal} nbdec={nbdec} />
      </div>
    </div>
  );
}
