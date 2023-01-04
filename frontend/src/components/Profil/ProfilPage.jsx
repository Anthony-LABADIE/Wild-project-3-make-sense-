import "./ProfilePage.css";
import { useEffect, useState } from "react";
import api from "../../services/api";

function ProfilePage() {
  const [userFirst, setUserFirst] = useState();
  const [userLast, setUserLast] = useState();
  const [userEmail, setUserEmail] = useState();
  const loadUserInfo = () => {
    api.get("user/1").then((response) => {
      setUserFirst(response.data.firstname);
      setUserLast(response.data.lastname);
      setUserEmail(response.data.email);
    });
  };

  useEffect(() => {
    loadUserInfo();
  }, []);

  return (
    <div>
      <nav>
        <img
          src="./src/assets/img/logo.png"
          alt=""
          style={{ width: "20vmin", height: "5vmin", paddingTop: "2vmin" }}
        />{" "}
        <div className="navButtons">
          {" "}
          <img
            src="/src/assets/img/decision.jpg"
            alt=""
            style={{ width: "9vmin", height: "8vmin" }}
          />{" "}
          <img
            src="/src/assets/img/notificaiton.jpg"
            alt=""
            style={{ width: "12vmin", height: "8vmin" }}
          />
          <img
            src="/src/assets/img/messages.jpg"
            alt=""
            style={{ width: "11vmin", height: "8vmin" }}
          />{" "}
          <img
            src="/src/assets/img/profil.png"
            alt=""
            style={{ width: "8vmin", height: "8vmin" }}
          />
        </div>
      </nav>
      <div className="profilInfo">
        <div className="profilPic">
          <img
            src="/src/assets/img/profil.png"
            alt=""
            style={{ width: "30vmin", height: "30vmin" }}
          />
          <button id="buttonImage" type="button">
            Importer une image
          </button>
        </div>
        <div className="profilText">
          <button id="buttonProfil" style={{ width: "20vmin" }} type="button">
            Modifier mon profil
          </button>
          <div className="personalInfo">
            <div className="nameEmail">
              <div className="firstName">
                {" "}
                <h2>Prénom:</h2>
                <h3 id="info">{userFirst}</h3>
              </div>
              <div className="lastName">
                <h2>Nom:</h2>
                <h3 id="info">{userLast}</h3>
              </div>
              <div className="email">
                {" "}
                <h2>Email:</h2>
                <h3 id="info">{userEmail}</h3>
              </div>
            </div>
            <div className="bio">
              <h2>Bio</h2>
              <p />
            </div>
          </div>
        </div>
      </div>
      <div className="myDecisions">
        <h1 style={{ paddingLeft: "7vmin", paddingTop: "10vmin" }}>
          Mes décisions
        </h1>
        <img
          src="/src/assets/img/Line-4.png"
          alt=""
          style={{ width: "100vmin", height: "0.5vmin" }}
          id="line"
        />
      </div>
    </div>
  );
}
export default ProfilePage;
