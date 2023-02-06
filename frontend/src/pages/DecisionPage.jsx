import PropTypes from "prop-types";
import { useState, useEffect, useContext } from "react";
import api from "../services/api";
import CardsItem from "../components/dashboard/CardsItem";
import dataDecisionType from "../tools/dataDecisionType";
import "./DecisionPage.css";
import NavBar from "../components/dashboard/NavBardash";
import NotificationContext from "../Contexts/NotificationContexts";
import { authContext } from "../hooks/authContext";
import Pagination from "../components/Pagination/Pagination";

function DecisionPage({ socket }) {
  const { notif } = useContext(NotificationContext);
  const { auth } = useContext(authContext);
  const [currentPage, setCurrentPage] = useState(1);
  const [recordsPerPage] = useState(6);
  const [decisions, setDecisions] = useState([]);
  const [status, setStatus] = useState(0);
  const [userDecisions, setUserDecisions] = useState();
  const [impacted, setImpacted] = useState([]);
  const loadUserDecision = () => {
    api.get(`/user/decision/${auth.data.id}`).then((response) => {
      setUserDecisions(response.data);
    });
  };
  const getInmpactedDecisions = () => {
    api
      .get(`decision/authorization/user/six/${auth.data.id}`, {
        withCredentials: true,
      })
      .then((response) => setImpacted(response.data))
      .catch((err) => err.response);
  };
  const handleClick = (e) => {
    switch (e.target.name) {
      case "Toutes":
        setStatus(0);
        break;
      case "Active":
        setStatus(1);
        break;
      case "Décisions Impactés":
        setStatus(2);
        break;
      case "Première decision":
        setStatus(3);
        break;
      case "Final Décision":
        setStatus(4);
        break;
      case "Conflit":
        setStatus(5);
        break;
      case "Mes Décisions":
        setStatus(10);
        break;

      default:
        setStatus(0);
        break;
    }
  };

  const getAllDecisions = () => {
    api
      .get("decision/", { withCredentials: true })
      .then((response) => setDecisions(response.data))
      .catch((err) => err.response);
  };
  const indexOfLastRecord = currentPage * recordsPerPage;
  const indexOfFirstRecord = indexOfLastRecord - recordsPerPage;
  const currentRecords = decisions.slice(indexOfFirstRecord, indexOfLastRecord);
  const nPages = Math.ceil(decisions.length / recordsPerPage);
  useEffect(() => {
    getAllDecisions();
    loadUserDecision();
    getInmpactedDecisions();
  }, []);

  const cardMap = currentRecords.map((cardItem) => (
    <CardsItem
      nbdec={cardItem.id}
      status={cardItem.status}
      title={cardItem.title}
      lastname={cardItem.lastname}
      firstname={cardItem.firstname}
      image={cardItem.image}
      nbStatus={cardItem.nbStatus}
    />
  ));
  const filterCards = () => {
    switch (status) {
      case 0:
        return currentRecords.map((final) => {
          return (
            <CardsItem
              nbdec={final.id}
              status={final.status}
              title={final.title}
              lastname={final.lastname}
              firstname={final.firstname}
              image={final.image}
              nbStatus={final.nbStatus}
            />
          );
        });
      case 1:
        return currentRecords
          .filter((cardItem) => cardItem.nbStatus === 1)
          .map((final) => {
            return (
              <CardsItem
                nbdec={final.id}
                status={final.status}
                title={final.title}
                lastname={final.lastname}
                firstname={final.firstname}
                image={final.image}
                nbStatus={final.nbStatus}
              />
            );
          });

      case 2:
        return impacted.map((final) => {
          return (
            <CardsItem
              id={final.id}
              nbdec={final.nbdec}
              status={final.status}
              title={final.title}
              lastname={final.lastname}
              firstname={final.firstname}
              image={final.image}
            />
          );
        });
      case 3:
        return currentRecords
          .filter((cardItem) => cardItem.nbStatus === 3)
          .map((final) => {
            return (
              <CardsItem
                nbdec={final.id}
                status={final.status}
                title={final.title}
                lastname={final.lastname}
                firstname={final.firstname}
                image={final.image}
                nbStatus={final.nbStatus}
              />
            );
          });
      case 4:
        return currentRecords
          .filter((cardItem) => cardItem.nbStatus === 4)
          .map((final) => {
            return (
              <CardsItem
                nbdec={final.id}
                status={final.status}
                title={final.title}
                lastname={final.lastname}
                firstname={final.firstname}
                image={final.image}
                nbStatus={final.nbStatus}
              />
            );
          });
      case 5:
        return currentRecords
          .filter((cardItem) => cardItem.nbStatus === 5)
          .map((final) => {
            return (
              <CardsItem
                nbdec={final.id}
                status={final.status}
                title={final.title}
                lastname={final.lastname}
                firstname={final.firstname}
                image={final.image}
                nbStatus={final.nbStatus}
              />
            );
          });
      case 10:
        return userDecisions.map((final) => {
          return (
            <CardsItem
              nbdec={final.id}
              status={final.status}
              title={final.title}
              lastname={final.lastname}
              firstname={final.firstname}
              image={final.image}
              nbStatus={final.nbStatus}
            />
          );
        });
      default:
        return cardMap;
    }
  };
  const getAllbuttons = () => {
    return dataDecisionType.map((button) => (
      <button
        type="button"
        onClick={handleClick}
        className="decisionBtn"
        name={button}
      >
        {button}
      </button>
    ));
  };
  useEffect(() => {
    getAllbuttons();
  }, []);
  return (
    <div className="AllDecision">
      {notif && <NavBar socket={socket} />}
      <div className="allButtons">{getAllbuttons()}</div>

      <div className="carreau">
        <div className={currentRecords.length > 3 ? "sixCards" : "threecards"}>
          {filterCards()}
        </div>
      </div>
      <Pagination
        nPages={nPages}
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
      />
    </div>
  );
}

DecisionPage.propTypes = {
  socket: PropTypes.func.isRequired,
};
export default DecisionPage;
