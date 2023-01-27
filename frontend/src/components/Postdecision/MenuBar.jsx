import PropTypes from "prop-types";
import { useState, useEffect, useContext } from "react";
import api from "../../services/api";
import ImpactedPeopleItem from "./ImpactedPeopleItem";
import ExpertPeopleItem from "./ExpertPeopleItem";
import ImpactedPeopleItemPopup from "./ImpactedPeopleItemPopup";
import ExpertPeopleItemPopup from "./ExpertPeopleItemPopup";
import { authContext } from "../../hooks/authContext";

export default function MenuBar({
  id,
  handleClick,
  handleConflit,
  handleAvis,
  handleFisrt,
  handleFinal,
  authDecision,
  nbdec,
  info,
}) {
  const [impactedPeople, setImpactedPeople] = useState([]);
  const [expertPeople, setExpertPeople] = useState([]);
  const [popup, setPopup] = useState(false);
  const [popupExpert, setPopupExpert] = useState(false);
  const [shownButtonAvis, setShownButtonAvis] = useState(true);
  const [shownButtonConflit, setShownButtonConflit] = useState(true);
  const [shownButtonFirst, setShownButtonFirst] = useState(true);
  const [shownButtonFinal, setShownButtonFinal] = useState(true);
  const status = info[0].id_status;
  const user = info[0].id_user;
  const { auth } = useContext(authContext);

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

  const ActifAvis = () => {
    if (status === 1 && authDecision[0].length === 1) {
      setShownButtonAvis(true);
    } else {
      setShownButtonAvis(false);
    }
  };

  const ActifConflit = () => {
    if (status === 3 && authDecision[0].length === 3) {
      setShownButtonConflit(true);
    } else {
      setShownButtonConflit(false);
    }
  };

  const ActifFirstDecision = () => {
    if (user === auth.data.id && status === 1) {
      setShownButtonFirst(true);
    } else {
      setShownButtonFirst(false);
    }
  };

  const ActifFinalDecision = () => {
    if (user === auth.data.id && status === 3) {
      setShownButtonFinal(true);
    } else {
      setShownButtonFinal(false);
    }
  };

  useEffect(() => {
    ActifAvis();
    ActifConflit();
    ActifFirstDecision();
    ActifFinalDecision();
  }, [nbdec]);
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
      <button
        style={{ display: shownButtonAvis ? "block" : "none" }}
        className="btn-avis"
        type="button"
        onClick={() => {
          handleAvis();
          handleClick();
        }}
      >
        DONNEZ UN AVIS
      </button>
      <button
        style={{ display: shownButtonConflit ? "block" : "none" }}
        className="btn-conflit"
        type="button"
        onClick={() => {
          handleConflit();
          handleClick();
        }}
      >
        DONNEZ UN CONFLIT
      </button>
      <button
        style={{ display: shownButtonFirst ? "block" : "none" }}
        className="btn-conflit"
        type="button"
        onClick={() => {
          handleFisrt();
          handleClick();
        }}
      >
        DONNEZ UNE PREMIERE DECISION
      </button>
      <button
        style={{ display: shownButtonFinal ? "block" : "none" }}
        className="btn-conflit"
        type="button"
        onClick={() => {
          handleFinal();
          handleClick();
        }}
      >
        DONNEZ UNE DECISION FINALE
      </button>
    </div>
  );
}

MenuBar.propTypes = {
  handleClick: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  handleConflit: PropTypes.string.isRequired,
  handleAvis: PropTypes.string.isRequired,
  authDecision: PropTypes.string.isRequired,
  nbdec: PropTypes.string.isRequired,
  info: PropTypes.string.isRequired,
  handleFisrt: PropTypes.string.isRequired,
  handleFinal: PropTypes.string.isRequired,
};
