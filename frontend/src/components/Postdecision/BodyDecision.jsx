import PropTypes from "prop-types";
import { useState } from "react";
import dataMenu from "../../tools/dataMenu";
import "./NavBarDecision.css";

export default function BodyDecision({ info, shown }) {
  const infoContent = info[0].content;
  const infoContexte = info[0].contexte;
  const infoProfit = info[0].profit;
  const infoUsefullness = info[0].usefullness;
  const infoInconvenience = info[0].inconvenience;

  const [infoText, setInfotext] = useState("");
  const [numberClicked, setNumberClicked] = useState(false);

  const handleClick = (e) => {
    switch (e.target.id) {
      case "1":
        setInfotext(infoContent);

        setNumberClicked(1);

        break;
      case "2":
        setInfotext(infoContexte);

        setNumberClicked(2);

        break;
      case "3":
        setInfotext(infoProfit);

        setNumberClicked(3);

        break;
      case "4":
        setInfotext(infoUsefullness);

        setNumberClicked(4);

        break;

      case "5":
        setInfotext(infoInconvenience);

        setNumberClicked(5);
        break;
      default:
        setInfotext("nothing");
    }
  };

  const getAllbutton = () => {
    return dataMenu.map((button) => (
      <button
        type="button"
        name="unClicked"
        id={button.id}
        onClick={handleClick}
        className={button.id === numberClicked ? "btnMenu2" : "btnMenu"}
      >
        {button.title}
      </button>
    ));
  };

  return (
    <div className="bodyDecision" style={{ display: shown ? "block" : "none" }}>
      <div className="menuBody">{getAllbutton()}</div>
      <div className="textBody">
        <p>{infoText}</p>
      </div>
    </div>
  );
}

BodyDecision.propTypes = {
  info: PropTypes.string.isRequired,
  shown: PropTypes.string.isRequired,
};
