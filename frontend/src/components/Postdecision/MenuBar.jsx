import PropTypes from "prop-types";
import { useState, useEffect } from "react";
import api from "../../services/api";
import ImpactedPeopleItem from "./ImpactedPeopleItem";
import ExpertPeopleItem from "./ExpertPeopleItem";

export default function MenuBar({ id, handleClick }) {
  const [impactedPeople, setImpactedPeople] = useState([]);
  const [expertPeople, setExpertPeople] = useState([]);

  const getAllImpactedPeople = () => {
    api
      .post("authorization/authorizationDecision", { id })
      .then((response) => setImpactedPeople(response.data));
  };

  useEffect(() => {
    getAllImpactedPeople();
  }, []);

  const impactedPeopleMap = impactedPeople.map((impactedPeopleItem) => (
    <ImpactedPeopleItem
      firstname={impactedPeopleItem.firstname}
      lastname={impactedPeopleItem.lastname}
      image={impactedPeopleItem.image}
    />
  ));

  const getAllImpactedExpert = () => {
    api
      .post("authorization/authorizationExpert", { id })
      .then((response) => setExpertPeople(response.data));
  };

  useEffect(() => {
    getAllImpactedExpert();
  }, []);

  const impactedExpertMap = expertPeople.map((impactedPeolpeItem) => (
    <ExpertPeopleItem
      firstname={impactedPeolpeItem.firstname}
      lastname={impactedPeolpeItem.lastname}
      image={impactedPeolpeItem.image}
    />
  ));
  return (
    <div className="menubar">
      <h3>PERSONNES IMPACTEES</h3>
      <div>{impactedPeopleMap}</div>
      <h3>PERSONNES EXPERTES</h3>
      <div>{impactedExpertMap}</div>
      <h5>voir les avis</h5>
      <button className="btn-avis" type="button" onClick={handleClick}>
        DONNEZ UN AVIS
      </button>
    </div>
  );
}

MenuBar.propTypes = {
  handleClick: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
};
