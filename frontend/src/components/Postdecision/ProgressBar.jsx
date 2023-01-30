/* eslint-disable camelcase */
import React from "react";
import "./ProgressBar.css";
import PropTypes from "prop-types";

function ProgressBar({ statut, postedDate, deadline }) {
  const statutCount = statut;
  let statutBar = "one";
  switch (true) {
    case statutCount === 0:
      statutBar = "0%";
      break;
    case statutCount === 1:
      statutBar = "12%";
      break;
    case statutCount === 2:
      statutBar = "50%";
      break;
    case statutCount === 3:
      statutBar = "60%";
      break;
    case statutCount === 4:
      statutBar = "100%";
      break;
    default:
  }
  const a = new Date(deadline);
  const b = new Date(postedDate);
  const time_diff = a.getTime() - b.getTime();
  const days_Diff = time_diff / (1000 * 3600 * 24);
  const four = days_Diff / 4;

  const formatednewdateone = b.toLocaleDateString("fr");

  function addDaysToDate(date, days) {
    const res = new Date(date);
    res.setDate(res.getDate() + days);
    return res;
  }

  const newdate = addDaysToDate(b, four);
  const formatednewdatetwo = newdate.toLocaleDateString("fr");

  const height = four * 2;
  const newdatethree = addDaysToDate(b, height);
  const formatednewdatethree = newdatethree.toLocaleDateString("fr");

  const ten = four * 3;
  const newdatefour = addDaysToDate(b, ten);
  const formatednewdatefour = newdatefour.toLocaleDateString("fr");

  const formatednewdatefive = a.toLocaleDateString("fr");

  return (
    <div className="progressBar">
      <div className="NavList">
        <p className="one">{formatednewdateone}</p>
        <p className="two">{formatednewdatetwo}</p>
        <p className="three">{formatednewdatethree}</p>
        <p className="four">{formatednewdatefour}</p>
        <p className="five">{formatednewdatefive}</p>
        <div className="barProgress">
          <div className="color" style={{ width: statutBar }} />
        </div>{" "}
        <p className="six">
          Début <br /> de décision
        </p>
        <p className="seven">
          Fin <br /> des avis
        </p>
        <p className="height">
          1ère décision <br /> prise
        </p>
        <p className="nine">
          Fin des <br /> conflit
        </p>
        <p className="ten">
          Décision <br /> définitif
        </p>
      </div>
    </div>
  );
}

ProgressBar.propTypes = {
  statut: PropTypes.number.isRequired,
  postedDate: PropTypes.string.isRequired,
  deadline: PropTypes.string.isRequired,
};

export default ProgressBar;
