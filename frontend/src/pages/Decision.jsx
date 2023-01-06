import React, { useContext, useState } from "react";
import DecisionCard1 from "../components/Decision/DecisionCard1";
import NavBardash from "../components/dashboard/NavBardash";
import CurrentDecisionContext from "../Contexts/DecisionContexts";
import DecisionDash from "../components/Decision/DecisionDash";

import "./Decision.css";

function Decision() {
  const [input, setInput] = useState({
    Description: "",
  });

  const [isActiveDecision, setIsActiveDecision] = useState(1);
  const { apidecision, setInputDecision } = useContext(CurrentDecisionContext);
  function next() {
    setIsActiveDecision((i) => {
      if (i >= 5) return isActiveDecision;
      return i + 1;
    });
    setInputDecision(input);
    setInput({});
  }

  function back() {
    setIsActiveDecision((i) => {
      if (i <= 1) return isActiveDecision;
      return i - 1;
    });
    setInput({});
  }
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
          {apidecision
            .filter((el) => el.id === isActiveDecision)
            .map((el) => (
              <DecisionCard1
                id={el.id}
                title1={el.title1}
                txt={el.txt}
                input={input}
                setInput={setInput}
                idInput={el.input.id}
                type={el.input.type}
                value={el.input.value}
                name={el.input.name}
              />
            ))}
        </div>
        <div>
          <button onClick={back} type="submit">
            Précedent
          </button>

          <button onClick={next} type="submit">
            Suivant
          </button>
        </div>
      </div>
    </div>
  );
}
export default Decision;
