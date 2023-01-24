import PropTypes from "prop-types";
import { useState } from "react";
import dataMenu from "../../tools/dataMenu";

export default function BodyDecision({ info, shown, notice, conflit }) {
  const infoContent = info[0].content;
  const infoContexte = info[0].contexte;
  const infoProfit = info[0].profit;
  const infoUsefullness = info[0].usefullness;
  const infoInconvenience = info[0].inconvenience;

  const [infoText, setInfotext] = useState("");

  const getAllAvis = () => {
    return notice.map((avis) => (
      <div>
        <p> {avis.content}</p>
        <h4>
          de {avis.lastname} {avis.firstname}
        </h4>
        f
      </div>
    ));
  };

  const getAllConflit = () => {
    return conflit.map((confli) => (
      <div>
        <p> {confli.content}</p>
        <h4>
          de {confli.lastname} {confli.firstname}
        </h4>
        f
      </div>
    ));
  };

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

      case "6":
        setInfotext(getAllAvis);

        break;
      case "7":
        setInfotext(getAllAvis);

        break;
      case "8":
        setInfotext(getAllConflit);

        break;
      case "9":
        setInfotext(getAllAvis);

        break;
      default:
        setInfotext("nothing");
    }
  };

  const getAllbutton = () => {
    return dataMenu.map((button) => (
      <button
        type="button"
        id={button.id}
        onClick={handleClick}
        className="btnMenu"
      >
        {button.title}
      </button>
    ));
  };

  return (
    <div
      className="bodyDecision"
      style={{
        display: shown ? "block" : "none",
      }}
    >
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
  notice: PropTypes.string.isRequired,
  conflit: PropTypes.string.isRequired,
};
