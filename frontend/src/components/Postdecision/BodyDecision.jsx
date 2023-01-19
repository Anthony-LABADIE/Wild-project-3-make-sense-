import PropTypes from "prop-types";
import { useState } from "react";
import dataMenu from "../../tools/dataMenu";

export default function BodyDecision({ info }) {
  const infoContent = info[0].content;
  const infoContexte = info[0].contexte;
  const infoProfit = info[0].profit;
  const infoUsefullness = info[0].usefullness;
  const infoInconvenience = info[0].inconvenience;

  const [infoText, setInfotext] = useState("");

  const handleClick = (e) => {
    switch (e.target.id) {
      case "1":
        setInfotext(infoContent);

        break;
      case "2":
        setInfotext(infoContexte);

        break;
      case "3":
        setInfotext(infoProfit);

        break;
      case "4":
        setInfotext(infoUsefullness);
        break;

      case "5":
        setInfotext(infoInconvenience);

        break;
      default:
        setInfotext("nothing");
    }
  };

  const getAllbutton = () => {
    return dataMenu.map((button) => (
      <button type="button" id={button.id} onClick={handleClick}>
        {button.title}
      </button>
    ));
  };

  return (
    <div className="bodyDecision">
      {getAllbutton()}
      <p>{infoText}</p>
    </div>
  );
}

BodyDecision.propTypes = {
  info: PropTypes.string.isRequired,
};
