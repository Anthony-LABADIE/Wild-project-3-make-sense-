import React, { useContext } from "react";
import { authContext } from "../../hooks/authContext";
import logo from "../../assets/img/profil.png";

function ChatBar() {
  const { userSocketIo } = useContext(authContext);

  return (
    <div className="chat__sidebar">
      <h2>Discussions</h2>

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

export default ChatBar;
