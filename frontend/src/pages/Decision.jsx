import PropTypes from "prop-types";
import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import DecisionCard from "../components/Decision/DecisionCard";
import NavBardash from "../components/dashboard/NavBardash";
// import CurrentDecisionContext from "../Contexts/DecisionContexts";
import NotificationContext from "../Contexts/NotificationContexts";
import DecisionDash from "../components/Decision/DecisionDash";
import vecteur from "../assets/img/Vector.png";
import ProfilAllUser from "../components/userConcerned/ProfilAllUser";
import api from "../services/api";
import ButtonSwitch from "../components/Decision/ButtonSwitch";
import { authContext } from "../hooks/authContext";

import "./Decision.css";

function Decision({ socket }) {
  const [isActiveDecision, setIsActiveDecision] = useState(1);
  const { apidecision, setInput, input } = useContext(NotificationContext);
  const [isActive, setIsActive] = useState(apidecision);
  const [allIds, setAllIds] = useState([]);
  const [idDecision, setIdDecision] = useState();
  const { auth } = useContext(authContext);
  const navigate = useNavigate();
  const createTab = () => {
    allIds.map((e) => api.post("/authorization", e), navigate("/dashboard"));
    socket.emit("sendNotification", {
      senderName: auth.data.firstname,
      receiverName: "ANTHONY",
      message: input.title,
    });
  };
  function clear() {
    document.getElementById("form").reset();
  }
  const next = () => {
    setIsActiveDecision((i) => {
      if (i >= 6) return isActiveDecision;
      return i + 1;
    });
    // eslint-disable-next-line no-use-before-define, no-unused-expressions
    handleNext;
    // const pour passer de true à false
    const isTrueOrFalse = isActive.map((el) => {
      if (el.id - 1 === isActiveDecision) {
        return { ...el, isActive: true };
      }
      return el;
    });
    setIsActive(isTrueOrFalse);
    clear();
  };

  const back = () => {
    setIsActiveDecision((i) => {
      if (i <= 1) return isActiveDecision;
      return i - 1;
    });
    // eslint-disable-next-line no-use-before-define, no-unused-expressions
    handleBack;
    const isTrueOrFalse = isActive.map((el) => {
      if (el.id === isActiveDecision) {
        return { ...el, isActive: !isActive };
      }
      return el;
    });
    setIsActive(isTrueOrFalse);
    clear();
  };
  const handleNext = (e) => {
    setInput({ ...input, [e.target.name]: e.target.value });
  };
  const handleBack = (e) => {
    setInput({ ...input, [e.target.name]: e.target.value });
  };
  const handleSubmitDecision = (e) => {
    e.preventDefault();
    if (
      input.title &&
      input.content &&
      input.deadline &&
      input.contexte &&
      input.profit &&
      input.usefullness &&
      input.inconvenience &&
      input.id_user &&
      input.date_posted &&
      input.id_status
    ) {
      api
        .post("decision", { ...input }, { withCredentials: true })
        .then((res) => {
          if (res.status === 201);
          setIdDecision(res.data);
        })

        .catch((err) => err.response);
    }
    next();
  };
  return (
    <div>
      <div>
        <NavBardash />
      </div>
      <div>
        <h1 className="h1__Decision">
          Créer une nouvelle annonce : Make Sense France{" "}
        </h1>
        <div className="dashboard__decision">
          {isActive.map((el) => (
            <>
              <DecisionDash
                id={el.id}
                title={el.title}
                isActive={el.isActive}
              />
              {el.id < 6 ? <img src={vecteur} alt="" /> : null}
            </>
          ))}
        </div>
        <div className="formulaire__decision">
          {apidecision
            .filter((el) => el.id === isActiveDecision)
            .map((el) =>
              el.id < 6 ? (
                <DecisionCard
                  id={el.id}
                  title1={el.title1}
                  txt={el.txt}
                  input={input}
                  setInput={setInput}
                  inputtext={el.input}
                  isActiveDecision={isActiveDecision}
                  img={el.img}
                />
              ) : (
                <ProfilAllUser
                  allIds={allIds}
                  setAllIds={setAllIds}
                  idDecision={idDecision}
                />
              )
            )}

          <div className="btn__decision">
            <ButtonSwitch
              next={next}
              back={back}
              handleSubmitDecision={handleSubmitDecision}
              createTab={createTab}
              isActiveDecision={isActiveDecision}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

Decision.propTypes = {
  socket: PropTypes.func.isRequired,
  emit: PropTypes.func.isRequired,
};
export default Decision;
