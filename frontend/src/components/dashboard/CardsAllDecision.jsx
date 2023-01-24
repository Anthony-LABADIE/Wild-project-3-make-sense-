/* eslint-disable camelcase */
import { useState, useEffect } from "react";
import api from "../../services/api";
import CardsItem from "./CardsItem";
import triangle from "../../assets/img/triangle.png";
import "./Cards.css";

function CardsAllDecision() {
  const [sixDecisions, setSixDecisions] = useState([]);
  const [decision, setDecision] = useState([]);
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

  const getAllDecision = () => {
    api
      .get("decision/", { withCredentials: true })
      .then((response) => setDecision(response.data))
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
      nbStatus={cardItem.nbStatus}
    />
  ));

  const cardAllMap = decision.map((cardItem) => (
    <CardsItem
      nbdec={cardItem.id}
      status={cardItem.status}
      title={cardItem.title}
      lastname={cardItem.lastname}
      firstname={cardItem.firstname}
      id_status={cardItem.id_status}
      image={cardItem.image}
      nbStatus={cardItem.nbStatus}
    />
  ));

  return (
    <div className="AllDecision">
      <div className="title">
        <h1>Toutes les décisions </h1>
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
        {show ? (
          <div className={sixDecisions.length > 3 ? "sixCards" : "threecards"}>
            {" "}
            {cardMap}{" "}
          </div>
        ) : null}
        {show ? null : <div className="allCards"> {cardAllMap} </div>}
      </div>
    </div>
  );
}

export default CardsAllDecision;
