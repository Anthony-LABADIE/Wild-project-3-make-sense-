/* eslint-disable camelcase */
import { useState, useEffect } from "react";
import api from "../../services/api";
import CardsItem from "./CardsItem";
import "./Cards.css";

function CardsAllDecision() {
  const [decision, setDecision] = useState([]);

  const getAllDecision = () => {
    api.get("decision").then((response) => setDecision(response.data));
  };

  useEffect(() => {
    getAllDecision();
  }, []);

  const cardMap = decision.map((cardItem) => (
    <CardsItem
      title={cardItem.title}
      lastname={cardItem.lastname}
      firstname={cardItem.firstname}
    />
  ));

  return <div className="carreau">{cardMap}</div>;
}

export default CardsAllDecision;
