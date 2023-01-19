import { useEffect, useState, useContext } from "react";
import api from "../services/api";
import { authContext } from "../hooks/authContext";
import NavBardash from "../components/dashboard/NavBardash";
import ButtonCreateDecision from "../components/dashboard/ButtonCreateDecision";
import "./Dashboard.css";
import Decisionimpact from "../components/dashboard/DecisionImpact";
import CardsAllDecision from "../components/dashboard/CardsAllDecision";

export default function Dashboard() {
  const { auth } = useContext(authContext);
  const [threedecision, setThreeDecision] = useState([]);
  const getThreeDecision = () => {
    api
      .get(`decision/authorization/user/three/${auth.data.id}`, {
        withCredentials: true,
      })
      .then((response) => setThreeDecision(response.data))
      .catch((err) => err.response);
  };
  useEffect(() => {
    getThreeDecision();
  }, []);
  return (
    <div>
      <NavBardash />
      <div className="dashboard">
        <ButtonCreateDecision />
        {threedecision.length > 0 && <Decisionimpact />}
        <CardsAllDecision />
      </div>
    </div>
  );
}
