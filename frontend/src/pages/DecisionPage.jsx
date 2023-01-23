import { useState, useEffect } from "react";
import api from "../services/api";
import CardsItem from "../components/dashboard/CardsItem";
import dataDecisionType from "../tools/dataDecisionType";
import "./DecisionPage.css";
import NavBar from "../components/dashboard/NavBardash";

function DecisionPage() {
  const [sixDecisions, setSixDecisions] = useState([]);

  const [show, setShow] = useState(true);

  const handleClick = () => {
    setShow(!show);
  };

  const getSixDecisions = () => {
    api
      .get("decision/six", { withCredentials: true })
      .then((response) => setSixDecisions(response.data))
      .catch((err) => err.response);
  };

  useEffect(() => {
    getSixDecisions();
  }, []);

  const cardMap = sixDecisions.map((cardItem) => (
    <CardsItem
      nbdec={cardItem.id}
      status={cardItem.status}
      title={cardItem.title}
      lastname={cardItem.lastname}
      firstname={cardItem.firstname}
      id_status={cardItem.id_status}
      image={cardItem.image}
    />
  ));

  const getAllbuttons = () => {
    return dataDecisionType.map((button) => (
      <button type="button" onClick={handleClick} className="decisionBtn">
        {button}
      </button>
    ));
  };
  useEffect(() => {
    getAllbuttons();
  }, []);
  return (
    <div className="AllDecision">
      <NavBar />
      <div className="allButtons">{getAllbuttons()}</div>

      <div className="carreau">
        {show ? (
          <div className={sixDecisions.length > 3 ? "sixCards" : "threecards"}>
            {" "}
            {cardMap}{" "}
          </div>
        ) : null}
      </div>
    </div>
  );
}
export default DecisionPage;
