import { useState, useEffect } from "react";
import triangle from "../../assets/img/triangle.png";
import CardsItem from "./CardsItem";
import api from "../../services/api";
// import { Link } from "react-router-dom";
import "./Decisionimpact.css";

export default function Decisionimpact() {
  const [show, setShow] = useState(true);
  const [threedecision, setThreeDecision] = useState([]);
  const [decision, setDecision] = useState([]);

  const handleClick = () => {
    setShow(!show);
  };

  const getThreeDecision = () => {
    api
      .get("decision/authorization/user/23")
      .then((response) => setThreeDecision(response.data))
      .catch((err) => alert(err.response));
  };

  const getAllDecision = () => {
    api
      .get("decision/authorization/user/23")
      .then((response) => setDecision(response.data))
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
    <div className="AllDecision">
      <div className="title">
        <h2>Décisions impacté </h2>
        <div className="trait" />
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

        {show ? null : (
          <button onClick={handleClick} type="button" className="less">
            <p> voir moins</p>
            <img src={triangle} alt="triangle" />
          </button>
        )}
      </div>
      <div className="carreau">
        {show ? <div className="threecards"> {cardMap} </div> : null}
        {show ? null : <div className="allCards"> {cardAllMap} </div>}
      </div>
    </div>
  );
}
