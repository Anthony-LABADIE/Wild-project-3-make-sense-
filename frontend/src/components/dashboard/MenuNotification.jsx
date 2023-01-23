import PropTypes from "prop-types";
import { useState, useEffect, useContext } from "react";
import { authContext } from "../../hooks/authContext";
import api from "../../services/api";
import NotificationItem from "./NotificationItem";

export default function MemuNotification({ dropNotif }) {
  const [detailNotif, setDetailNotif] = useState([]);
  const { auth } = useContext(authContext);

  const getAllDecision = () => {
    api
      .get(`decision/authorization/user/notification/detail/${auth.data.id}`, {
        withCredentials: true,
      })
      .then((response) => setDetailNotif(response.data))
      .catch((err) => err.response);
  };

  useEffect(() => {
    getAllDecision();
  }, [detailNotif]);

  const NotifAllMap = detailNotif.map((notifItem) => (
    <NotificationItem
      key={notifItem.id}
      nbdec={notifItem.nbdec}
      title={notifItem.title}
      lastname={notifItem.lastname}
      firstname={notifItem.firstname}
      image={notifItem.image}
      nbauth={notifItem.nbauth}
    />
  ));

  return (
    <div
      className="menuNotif"
      style={{ display: dropNotif ? "none" : "block" }}
    >
      {NotifAllMap}
    </div>
  );
}

MemuNotification.propTypes = {
  dropNotif: PropTypes.string.isRequired,
};
