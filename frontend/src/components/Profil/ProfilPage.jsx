import "./ProfilePage.css";
import { useEffect, useState, useContext } from "react";
import api from "../../services/api";
import NavBar from "../dashboard/NavBardash";
import { authContext } from "../../hooks/authContext";

function ProfilePage() {
  const [userFirst, setUserFirst] = useState();
  const [userLast, setUserLast] = useState();
  const [userEmail, setUserEmail] = useState();
  const [profilImage, setProfilImage] = useState();
  const [file, setFile] = useState();
  const { auth } = useContext(authContext);

  const loadUserInfo = () => {
    api.get(`user/${auth.data.id}`).then((response) => {
      setUserFirst(response.data.firstname);
      setUserLast(response.data.lastname);
      setUserEmail(response.data.email);
      setProfilImage(response.data.image);
    });
  };

  const handleFile = (e) => {
    // dans e.target.files je récupére un tableau avec un seul objet
    // je mets tout ça dans un state pour les récupérer plus tard
    setFile(e.target.files[0]);
  };
  const fetchImage = () => {
    // mon appel pour récupérer tous les users
    api.get(`user/${auth.data.id}`).then((res) => {
      setProfilImage(res.data.image);
    });
  };

  const uploadFile = () => {
    // je crée un form data pour mettre mes fichiers dedans
    const formData = new FormData();
    formData.append("upload", file);

    api
      .put(`/user/upload/${auth.data.id}`, formData, {
        // withCredentials: true,
        headers: {
          "Content-Type": "multipart/form-data",
          //! important pour lire les données des types de fichiers
        },
      })
      .then((res) => {
        if (res.status === 200) {
          // si mon upload s'est bien passé je refait un appel API des mes utilisateurs
          // du coup je vais récupérer la photo que je viens d'upload
          fetchImage();
        }
      });
  };
  const autoUpload = () => {
    if (file) {
      uploadFile();
    }
  };
  useEffect(() => {
    loadUserInfo();
  }, [profilImage]);

  useEffect(() => {
    autoUpload();
  }, [file]);

  return (
    <div>
      <NavBar profileImage={profilImage} />
      <div className="profilInfo">
        <div className="profilPic">
          <div className="picture">
            {profilImage && <img src={profilImage} alt="" id="profileImage" />}
          </div>
          <label htmlFor="image">
            <div className="buttonImage">
              <h4 id="importBtn">Importer une image</h4>
            </div>
          </label>{" "}
          <input
            type="file" // type file pour pouvoir uploader une image
            name="upload" // ce nom doit être identique à ce que je vais mettre dans multer
            id="image"
            accept="image/*"
            onChange={handleFile}
            style={{ display: "none" }}
            // optional mais permet de dire que je veux que des fichiers images
          />
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
              <h2>Bio:</h2>
              <p />
            </div>
          </div>
        </div>
      </div>
      <div className="decisionContainer">
        {" "}
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
        <div className="userDecisions">
          {" "}
          <div className="decisionBubble">
            <div className="decisionPhase">
              <h4 id="decisions">1ère décision</h4>
            </div>
            <div className="description">
              <h3 id="descr">Passer à l'optique</h3>
            </div>
            <div className="author">
              <img src={profilImage} alt="" id="authorImg" />
              <h4 id="byAuthor">Par Ryan Tama</h4>
            </div>
          </div>
          <div className="decisionBubble">
            <div className="decisionPhase">
              <h4 id="decisions">1ère décision</h4>
            </div>{" "}
            <div className="description">
              <h3 id="descr">Acheter une machine à café</h3>
            </div>
            <div className="author">
              <img src={profilImage} alt="" id="authorImg" />
              <h4 id="byAuthor">Par Ryan Tama</h4>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default ProfilePage;
