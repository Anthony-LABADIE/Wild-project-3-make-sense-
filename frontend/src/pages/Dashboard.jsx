import { useEffect, useState, useContext } from "react";
import api from "../services/api";
import { authContext } from "../hooks/authContext";
import NotificationContext from "../Contexts/NotificationContexts";
import NavBardash from "../components/dashboard/NavBardash";
import ButtonCreateDecision from "../components/dashboard/ButtonCreateDecision";
import "./Dashboard.css";
import Decisionimpact from "../components/dashboard/DecisionImpact";
import CardsAllDecision from "../components/dashboard/CardsAllDecision";

export default function Dashboard() {
  const { auth } = useContext(authContext);
  const { notif, setNotif } = useContext(NotificationContext);
  const [threedecision, setThreeDecision] = useState([]);

  const loadNotifcation = () => {
    api
      .get(`decision/authorization/user/notification/${auth.data.id}`)
      .then((res) => {
        setNotif(res.data);
      });
  };

  useEffect(() => {
    loadNotifcation();
  }, [notif]);

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
      {notif && <NavBardash />}
      <div className="dashboard">
        <ButtonCreateDecision />
        {threedecision.length > 0 && <Decisionimpact />}
        <CardsAllDecision />
      </div>
    </div>
  );
}
