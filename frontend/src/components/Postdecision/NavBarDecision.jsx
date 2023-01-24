import PropTypes from "prop-types";
import React from "react";
import profileImage from "../../assets/img/profil.png";
import "./NavBarDecision.css";
import ProgressBar from "./ProgressBar";

function NavBarDecision({ info }) {
  return (
    <div className="navbardecision">
      {info.map((decision) => (
        <>
          <h2>{decision.title}</h2>
          <img src={decision.image || profileImage} alt="logo" />
          <h3 id="nameUser">
            par {decision.lastname} {decision.firstname}
          </h3>
        </>
      ))}
      <ProgressBar statut={info[0].id_status} />
    </div>
  );
}

NavBarDecision.propTypes = {
  info: PropTypes.shape({
    firstname: PropTypes.string,
    id_status: PropTypes.string,
    image: PropTypes.string,
    lastname: PropTypes.string,
    map: PropTypes.func,
    title: PropTypes.string,
  }).isRequired,
};

export default NavBarDecision;
