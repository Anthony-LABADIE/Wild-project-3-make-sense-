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
  const [active, setActive] = useState(false);
  const [clicked, setClicked] = useState(false);

  const handleClick = (e) => {
    switch (e.target.id) {
      case "1":
        setInfotext(infoContent);
        setActive(!active);
        if (active && e.target.name === "unClicked") {
          e.target.className = "btnMenu2";
        }
        setClicked(true);

        break;
      case "2":
        setInfotext(infoContexte);
        setActive(!active);
        if (active && e.target.name === "unClicked") {
          e.target.className = "btnMenu2";
        }
        setClicked(true);

        break;
      case "3":
        setInfotext(infoProfit);
        setActive(!active);
        if (active && e.target.name === "unClicked") {
          e.target.className = "btnMenu2";
        }
        setClicked(true);

        break;
      case "4":
        setInfotext(infoUsefullness);
        setActive(!active);
        if (active && e.target.name === "unClicked") {
          e.target.className = "btnMenu2";
        }
        setClicked(true);

        break;

      case "5":
        setInfotext(infoInconvenience);
        setActive(!active);
        if (active && e.target.name === "unClicked") {
          e.target.className = "btnMenu2";
        }
        setClicked(true);
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
        className={clicked ? "btnMenu" : "btnMenu"}
        // isSelected={target[1] === !active}
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
