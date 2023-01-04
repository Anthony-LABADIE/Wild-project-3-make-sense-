import { useState } from "react";
import triangle from "../../assets/img/triangle.png";
// import { Link } from "react-router-dom";
import "./Decisionimpact.css";

export default function Decisionimpact() {
  const [show, setShow] = useState(true);

  const handleClick = () => {
    setShow(!show);
  };
  return (
    <div className="AllDecision">
      <div className="title">
        <h2>Décisions impacté </h2>
        <div className="trait" />
        {show ? (
          <button onClick={handleClick} type="button" className="more">
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
    </div>
  );
}
