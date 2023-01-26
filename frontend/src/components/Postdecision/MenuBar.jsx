import PropTypes from "prop-types";
import { useState, useEffect } from "react";
import api from "../../services/api";
import ImpactedPeopleItem from "./ImpactedPeopleItem";
import ExpertPeopleItem from "./ExpertPeopleItem";
import ImpactedPeopleItemPopup from "./ImpactedPeopleItemPopup";
import ExpertPeopleItemPopup from "./ExpertPeopleItemPopup";

export default function MenuBar({ id, handleClick }) {
  const [impactedPeople, setImpactedPeople] = useState([]);
  const [expertPeople, setExpertPeople] = useState([]);
  const [popup, setPopup] = useState(false);
  const [popupExpert, setPopupExpert] = useState(false);

  const handleShow = () => {
    setPopup(!popup);
  };

  const handleShowExpert = () => {
    setPopupExpert(!popupExpert);
  };

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
      handleShow={handleShow}
    />
  ));

  const impactedPeopleMapPopup = impactedPeople.map((impactedPeopleItem) => (
    <ImpactedPeopleItemPopup
      firstname={impactedPeopleItem.firstname}
      lastname={impactedPeopleItem.lastname}
      image={impactedPeopleItem.image}
      handleShow={handleShow}
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
      handleShowExpert={handleShowExpert}
    />
  ));

  const expertPeopleMapPopup = expertPeople.map((impactedPeopleItem) => (
    <ExpertPeopleItemPopup
      firstname={impactedPeopleItem.firstname}
      lastname={impactedPeopleItem.lastname}
      image={impactedPeopleItem.image}
      handleShowExpert={handleShowExpert}
    />
  ));

  return (
    <div className="menubar">
      <div className="textMenubar">PERSONNES IMPACTEES</div>

      <div id="imageImpacted" />

      <div className="scrollImage">{impactedPeopleMap}</div>
      <div className={popup ? "popupOn" : "popupOff"}>
        {impactedPeopleMapPopup}
      </div>
      <div className="textMenubar">PERSONNES EXPERTES</div>
      <div id="imageImpactedExpert" />
      <div className="scrollImage">{impactedExpertMap}</div>
      <div className={popupExpert ? "popupOnExpert" : "popupOff"}>
        {expertPeopleMapPopup}
      </div>
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
