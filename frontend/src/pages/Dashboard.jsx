import PropTypes from "prop-types";
import { useEffect, useContext } from "react";
import NavBardash from "../components/dashboard/NavBardash";
import ButtonCreateDecision from "../components/dashboard/ButtonCreateDecision";
import "./Dashboard.css";
import Decisionimpact from "../components/dashboard/DecisionImpact";
import CardsAllDecision from "../components/dashboard/CardsAllDecision";
import { authContext } from "../hooks/authContext";
import api from "../services/api";

export default function Dashboard({ socket }) {
  const { auth } = useContext(authContext);
  useEffect(() => {
    socket?.emit("addUser", auth.firstname);
  }, [socket, auth.firstname]);
  const handleSubmission = () => {
    api.put(`/user/connect/${auth.data.id}`, true).catch((err) => err.response);
  };
  useEffect(() => {
    handleSubmission();
  }, []);
  return (
    <div>
      <NavBardash socket={socket} />
      <div className="dashboard">
        <ButtonCreateDecision />
        <Decisionimpact />
        <CardsAllDecision />
      </div>
    </div>
  );
}

Dashboard.propTypes = {
  socket: PropTypes.func.isRequired,
  emit: PropTypes.func.isRequired,
};
