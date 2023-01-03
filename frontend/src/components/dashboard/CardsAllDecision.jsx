/* eslint-disable camelcase */
import { useState, useEffect } from "react";
import api from "../../services/api";
import CardsItem from "./CardsItem";
import triangle from "../../assets/img/triangle.png";
import "./Cards.css";

function CardsAllDecision() {
  const [threedecision, setThreeDecision] = useState([]);
  const [decision, setDecision] = useState([]);

  const getThreeDecision = () => {
    api
      .get("decision/three")
      .then((response) => setThreeDecision(response.data));
  };

  const getAllDecision = () => {
    api.get("decision/").then((response) => setDecision(response.data));
  };

  useEffect(() => {
    getThreeDecision();
  }, []);

  const cardMap = threedecision.map((cardItem) => (
    <CardsItem
      title={cardItem.title}
      lastname={cardItem.lastname}
      firstname={cardItem.firstname}
    />
  ));

  const cardAllMap = decision.map((cardItem) => (
    <CardsItem
      title={cardItem.title}
      lastname={cardItem.lastname}
      firstname={cardItem.firstname}
    />
  ));

  return (
    <div className="carreau">
      <div className="threecards"> {cardMap} </div>
      <button onClick={getAllDecision} type="button" className="more">
        <p> voir plus</p>
        <img src={triangle} alt="triangle" />
      </button>
      <div className="allCards"> {cardAllMap} </div>
    </div>
  );
}

export default CardsAllDecision;
