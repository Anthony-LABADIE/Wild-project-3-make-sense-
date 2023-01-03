/* eslint-disable camelcase */
import { useState, useEffect } from "react";
import api from "../../services/api";
import CardsItem from "./CardsItem";
import triangle from "../../assets/img/triangle.png";
import "./Cards.css";

function CardsAllDecision() {
  const [threedecision, setThreeDecision] = useState([]);
  const [decision, setDecision] = useState([]);
  const [show, setShow] = useState(true);

  const handleClick = () => {
    setShow(!show);
  };

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
      key={cardItem.id}
      status={cardItem.status}
      title={cardItem.title}
      lastname={cardItem.lastname}
      firstname={cardItem.firstname}
    />
  ));

  const cardAllMap = decision.map((cardItem) => (
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
      {show ? <div className="threecards"> {cardMap} </div> : null}
      {show ? (
        <button
          onClick={() => {
            getAllDecision();
            handleClick();
          }}
          type="button"
          className="more"
        >
          <p> voir plus</p>
          <img src={triangle} alt="triangle" />
        </button>
      ) : null}
      {show ? null : <div className="allCards"> {cardAllMap} </div>}
      {show ? null : (
        <button onClick={handleClick} type="button" className="less">
          <p> voir moins</p>
          <img src={triangle} alt="triangle" />
        </button>
      )}
    </div>
  );
}

export default CardsAllDecision;
