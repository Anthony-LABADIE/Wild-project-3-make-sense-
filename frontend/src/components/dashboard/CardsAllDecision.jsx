/* eslint-disable camelcase */
import { useState, useEffect } from "react";
import axios from "axios";
import CardsItem from "./CardsItem";
import "./Cards.css";

function CardsAllDecision() {
  const [decision, setDecision] = useState([]);

  const getAllDecision = () => {
    axios
      .get("http://localhost:5000/api/decision")
      .then((response) => setDecision(response.data));
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
