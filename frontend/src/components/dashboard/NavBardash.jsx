import React, { useState, useEffect, useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import PropTypes from "prop-types";
import api from "../../services/api";
import logo from "../../assets/img/logo.png";
import burger from "../../assets/img/burger.png";
import notificationImg from "../../assets/img/notificaiton.png";
import message from "../../assets/img/messages.png";
import decision from "../../assets/img/decision.png";
import triangle from "../../assets/img/triangle.png";
import adminImg from "../../assets/img/utilisateur.png";
import { authContext } from "../../hooks/authContext";
import NotificationContext from "../../Contexts/NotificationContexts";
import MemuNotification from "./MenuNotification";
import "./NavBarDash.css";

function NavBar({ profileImage }) {
  const [toggleMenu, setToggleMenu] = useState(false);
  const [profilImage, setProfilImage] = useState();
  const [largeur, setLargeur] = useState(window.innerWidth);
  const { notif, setNotif } = useContext(NotificationContext);
  const { logout, auth, userSocketIo, setUserSocketIo } =
    useContext(authContext);
  const [dropMenu, setDropMenu] = useState(true);
  const [dropNotif, setDropNotif] = useState(true);
  const [admin, setAdmin] = useState(false);
  const navigate = useNavigate();

  const displayAdmin = () => {
    if (auth.data.is_admin === 1) setAdmin(true);
  };

  const handleClick = () => {
    setDropMenu(!dropMenu);
  };

  const handleNotif = () => {
    setDropNotif(!dropNotif);
  };
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

  const loadUserInfo = () => {
    api.get(`user/${auth.data.id}`).then((response) => {
      setProfilImage(response.data.image);
    });
  };

  useEffect(() => {
    loadUserInfo();
  }, [profilImage]);

  useEffect(() => {
    displayAdmin();
  }, [admin]);

  const toggleNavSmallScreen = () => {
    setToggleMenu(!toggleMenu);
  };

  useEffect(() => {
    const changWidth = () => {
      setLargeur(window.innerWidth);

      if (window.innerWidth > 500) {
        setToggleMenu(false);
      }
    };

    window.addEventListener("resize", changWidth);

    return () => {
      window.removeEventListener("resize", changWidth);
    };
  }, []);

  const getUserSocketIo = () => {
    api.get("user/").then((response) => {
      setUserSocketIo(response.data);
    });
  };
  useEffect(() => {
    getUserSocketIo();
  }, [userSocketIo]);
  const nav = () => {
    navigate("/messages");
  };
  const handleSubmission = () => {
    api
      .put(`/user/disconnect/${auth.data.id}`, false)
      .catch((err) => err.response);
    logout();
  };

  return (
    <div>
      <nav id="navbar">
        {(toggleMenu || largeur > 500) && (
          <ul className="listeNav">
            <Link to="/dashboard">
              <img className="logodash" src={logo} alt="logo" />
            </Link>

            <div
              style={{ display: admin ? "block" : "none" }}
              className="admin"
            >
              <Link to="/admin">
                <img id="adminImg" src={adminImg} alt="admin" />
                <h4>admin</h4>
              </Link>
            </div>

            <div className="decision">
              <Link to="/decisiondash" className="decision">
                <img id="decision" src={decision} alt="decision" />
                <h4>décisions</h4>
              </Link>
            </div>
            <div className="notification">
              <img
                id="notification"
                src={notificationImg}
                alt="notification"
                className="iconImg"
                onClick={handleNotif}
                role="presentation"
              />
              <h4>notifications</h4>
              {/* <div className="counter"> {notif[0].notification}</div> */}
            </div>

            <div className="message">
              <img
                id="messageLogo"
                src={message}
                alt="message"
                onClick={(getUserSocketIo, nav)}
                role="presentation"
              />
              <h4>messages</h4>

              <img
                src={triangle}
                alt=""
                id="triangle"
                onClick={handleClick}
                role="presentation"
              />
            </div>
            <div className="pictureProfil">
              {profilImage && (
                <img src={profileImage || profilImage} alt="" id="imgProfil" />
              )}
            </div>
          </ul>
        )}
        <button
          onClick={toggleNavSmallScreen}
          className="btn-nav"
          type="button"
        >
          <img className="burger" src={burger} alt="burger" />
        </button>
        <div
          style={{ display: dropMenu ? "none" : "block" }}
          className="dropdown-menu"
        >
          <Link
            to="/dashboard/profil"
            className="profilMenu"
            style={{ textDecoration: "none" }}
          >
            <p> mon profil</p>
          </Link>
          <button id="btn-logout" type="button" onClick={handleSubmission}>
            déconnexion
          </button>
        </div>
        <MemuNotification dropNotif={dropNotif} />
      </nav>
    </div>
  );
}

NavBar.propTypes = {
  profileImage: PropTypes.string.isRequired,
};

export default NavBar;
