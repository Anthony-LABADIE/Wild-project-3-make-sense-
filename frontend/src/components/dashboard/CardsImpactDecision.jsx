/* eslint-disable camelcase */
import { useState, useEffect } from "react";
import api from "../../services/api";
import CardsItem from "./CardsItem";
import "./Cards.css";

function CardsImpactDecision() {
  const [threedecision, setThreeDecision] = useState([]);

  const getThreeDecision = () => {
    api
      .get("user/decision/23", { withCredentials: true })
      .then((response) => setThreeDecision(response.data))
      .catch((err) => alert(err.response));
  };

  useEffect(() => {
    getThreeDecision();
  }, []);

  const cardMap = threedecision.map((cardItem) => (
    <CardsItem
      key={cardItem.id}
      status={cardItem.status}
      title={cardItem.title}
      lastname={cardItem.lastname}
      firstname={cardItem.firstname}
    />
  ));

  return (
    <div className="carreau">
      <div className="threecards"> {cardMap} </div>
    </div>
  );
}

export default CardsImpactDecision;
