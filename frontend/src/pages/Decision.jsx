import React, { useContext, useState } from "react";
import DecisionCard from "../components/Decision/DecisionCard";
import NavBardash from "../components/dashboard/NavBardash";
import CurrentDecisionContext from "../Contexts/DecisionContexts";
import DecisionDash from "../components/Decision/DecisionDash";
import api from "../services/api";

import "./Decision.css";

function Decision() {
  const [isActiveDecision, setIsActiveDecision] = useState(1);
  const { apidecision, setInput, input } = useContext(CurrentDecisionContext);
  function next() {
    setIsActiveDecision((i) => {
      if (i >= 5) return isActiveDecision;
      return i + 1;
    });
    // eslint-disable-next-line no-use-before-define, no-unused-expressions
    handleNext;
  }
  function back() {
    setIsActiveDecision((i) => {
      if (i <= 1) return isActiveDecision;
      return i - 1;
    });
    // eslint-disable-next-line no-use-before-define, no-unused-expressions
    handleBack;
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
      input.Description &&
      input.Description1 &&
      input.Description2 &&
      input.Description3 &&
      input.Description4
    ) {
      api
        .post("decision/", { ...input }, { withCredentials: true })
        .then((res) => {
          if (res.status === 200) {
            // navigate("/connexion");
          }
        })
        .catch((err) => alert(err.response));
    } else {
      alert("Please specify both email and password");
    }
  };
  return (
    <div>
      <div>
        <NavBardash />
      </div>
      <div>
        <h1>Créer une nouvelle annonce : Make Sense France </h1>
        <div className="dashboard__decision">
          {apidecision.map((el) => (
            <DecisionDash id={el.id} title={el.title} />
          ))}
        </div>
        <div className="formulaire__decision">
          <div>
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
                />
              ))}
            <div>
              <button onClick={back} type="submit">
                Précedent
              </button>
              {isActiveDecision < 5 ? (
                <button onClick={next} type="submit">
                  Suivant
                </button>
              ) : (
                <button onClick={handleSubmitDecision} type="submit">
                  Valider
                </button>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Decision;
