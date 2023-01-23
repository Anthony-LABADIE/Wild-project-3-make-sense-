import PropTypes from "prop-types";
import { useEffect, useContext } from "react";
import api from "../services/api";
import { authContext } from "../hooks/authContext";
import NotificationContext from "../Contexts/NotificationContexts";
import NavBardash from "../components/dashboard/NavBardash";
import ButtonCreateDecision from "../components/dashboard/ButtonCreateDecision";
import "./Dashboard.css";
import Decisionimpact from "../components/dashboard/DecisionImpact";
import CardsAllDecision from "../components/dashboard/CardsAllDecision";

export default function Dashboard({ socket }) {
  const { auth } = useContext(authContext);
  const { notif, setNotif } = useContext(NotificationContext);
  // const [threedecision, setThreeDecision] = useState([]);

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

  // const getThreeDecision = () => {
  //   api
  //     .get(`decision/authorization/user/three/${auth.data.id}`, {
  //       withCredentials: true,
  //     })
  //     .then((response) => setThreeDecision(response.data))
  //     .catch((err) => err.response);
  // };
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
      {notif && <NavBardash socket={socket} />}
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
