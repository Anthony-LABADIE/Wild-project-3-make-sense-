import React, { useContext } from "react";
import DecisionCard1 from "../components/Decision/DecisionCard1";
import NavBardash from "../components/dashboard/NavBardash";
import CurrentDecisionContext from "../Contexts/DecisionContexts";

import "./Decision.css";

function Decision() {
  const { apidecision } = useContext(CurrentDecisionContext);
  return (
    <div>
      <div>
        <NavBardash />
      </div>
      <div>
        <h1>Créer une nouvelle annonce : Make Sense France </h1>
        <div className="dashboard__decision">
          {apidecision.map((el) => (
            <DecisionCard1 id={el.id} title={el.title} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Decision;
