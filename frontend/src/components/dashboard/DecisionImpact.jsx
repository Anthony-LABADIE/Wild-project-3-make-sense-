import { useState, useEffect, useContext } from "react";
import triangle from "../../assets/img/triangle.png";
import CardsItem from "./CardsItem";
import api from "../../services/api";
import { authContext } from "../../hooks/authContext";
import "./Decisionimpact.css";

export default function Decisionimpact() {
  const { auth } = useContext(authContext);
  const [show, setShow] = useState(true);
  const [threedecision, setThreeDecision] = useState([]);
  const [decision, setDecision] = useState([]);

  const handleClick = () => {
    setShow(!show);
  };

  const getThreeDecision = () => {
    api
      .get(`decision/authorization/user/three/${auth.data.id}`, {
        withCredentials: true,
      })
      .then((response) => setThreeDecision(response.data))
      .catch((err) => err.response);
  };

  const getAllDecision = () => {
    api
      .get(`decision/authorization/user/${auth.data.id}`, {
        withCredentials: true,
      })
      .then((response) => setDecision(response.data))
      .catch((err) => err.response);
  };

  useEffect(() => {
    getThreeDecision();
  }, []);

  const cardMap = threedecision.map((cardItem) => (
    <CardsItem
      id={cardItem.id}
      nbdec={cardItem.nbdec}
      status={cardItem.status}
      title={cardItem.title}
      lastname={cardItem.lastname}
      firstname={cardItem.firstname}
      image={cardItem.image}
    />
  ));

  const cardAllMap = decision.map((cardItem) => (
    <CardsItem
      key={cardItem.id}
      nbdec={cardItem.nbdec}
      status={cardItem.status}
      title={cardItem.title}
      lastname={cardItem.lastname}
      firstname={cardItem.firstname}
      image={cardItem.image}
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
