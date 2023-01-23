import PropTypes from "prop-types";
import React, { useContext, useEffect, useState } from "react";
import { authContext } from "../../hooks/authContext";
import logo from "../../assets/img/profil.png";

function ChatBar({ socket }) {
  const { userSocketIo, auth } = useContext(authContext);
  const [user, setUser] = useState(auth.data.lastname);
  const handleSubmitUserSocket = (e) => {
    e.preventDefault();
    socket.emit("sendUser", {
      userName: auth.data.lastname,
      socketID: socket.id,
    });
    setUser("");
  };
  useEffect(() => {
    socket.on("newUser", (newuser) => {
      setUser([...user, newuser]);
    });
    handleSubmitUserSocket();
  }, [user]);

  return (
    <div className="chat__sidebar">
      <h2>Open Chat</h2>

      <div>
        <h4 className="chat__header">ACTIVE USERS</h4>
        <div className="chat__users">
          {userSocketIo.map((el) =>
            el.is_connect === 1 ? (
              <div className="chat__user">
                {el.image === null ? (
                  <img src={logo} alt="profil" />
                ) : (
                  <img src={el.image} alt="profil" />
                )}
                <p>
                  {el.lastname}&#160;
                  {el.firstname}
                </p>
              </div>
            ) : null
          )}
        </div>
      </div>
    </div>
  );
}

ChatBar.propTypes = {
  socket: PropTypes.func.isRequired,
  on: PropTypes.func.isRequired,
};

export default ChatBar;
