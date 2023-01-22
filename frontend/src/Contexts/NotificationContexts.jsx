/* eslint-disable camelcase */
/* eslint-disable react/jsx-no-constructed-context-values */
import { createContext, useState } from "react";
import PropTypes from "prop-types";
// import { authContext } from "../hooks/authContext";

const NotificationContext = createContext();

export default NotificationContext;

export function NotificationContextProvider({ children }) {
  //   const { auth } = useContext(authContext);
  const [notif, setNotif] = useState();

  const value = {
    notif,
    setNotif,
  };
  return (
    <NotificationContext.Provider value={value}>
      {children}
    </NotificationContext.Provider>
  );
}
NotificationContextProvider.propTypes = {
  children: PropTypes.string.isRequired,
};
