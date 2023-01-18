import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import DecisionCard from "../components/Decision/DecisionCard";
import NavBardash from "../components/dashboard/NavBardash";
import CurrentDecisionContext from "../Contexts/DecisionContexts";
import DecisionDash from "../components/Decision/DecisionDash";
import vecteur from "../assets/img/Vector.png";
import api from "../services/api";

import "./Decision.css";

function Decision() {
  const [isActiveDecision, setIsActiveDecision] = useState(1);
  const { apidecision, setInput, input } = useContext(CurrentDecisionContext);
  const [isActive, setIsActive] = useState(apidecision);
  const navigate = useNavigate();
  function clear() {
    document.getElementById("form").reset();
  }
  function next() {
    setIsActiveDecision((i) => {
      if (i >= 5) return isActiveDecision;
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
  }

  function back() {
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
  }
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
          if (res.status === 201) {
            navigate("/dashboard");
          }
        })
        // eslint-disable-next-line no-alert
        .catch((err) => alert(err.response));
    } else {
      // eslint-disable-next-line no-alert
      alert("Please specify decision");
    }
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
              {el.id < 5 ? <img src={vecteur} alt="" /> : null}
            </>
          ))}
        </div>
        <div className="formulaire__decision">
          {apidecision
            .filter((el) => el.id === isActiveDecision)
            .map((el) => (
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
            ))}

          <div className="btn__decision">
            <button
              className={isActiveDecision === 1 ? "none__btn" : "active__btn"}
              onClick={back}
              type="button"
            >
              Précedent
            </button>
            {isActiveDecision < 5 ? (
              <button onClick={next} type="button">
                Suivant
              </button>
            ) : (
              <button onClick={handleSubmitDecision} type="button">
                Valider
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
export default Decision;
