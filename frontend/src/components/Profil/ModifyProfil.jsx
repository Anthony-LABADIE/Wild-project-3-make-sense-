import { useEffect, useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import api from "../../services/api";
import NavBar from "../dashboard/NavBardash";
import { authContext } from "../../hooks/authContext";
import "./ModifyProfil.css";

function ModifyProfil() {
  const [profilImage, setProfilImage] = useState();

  const { auth } = useContext(authContext);
  const [bio, setBio] = useState({});
  const navigate = useNavigate();
  const putUserInfo = () => {
    api.get(`user/${auth.data.id}`).then((response) => {
      setProfilImage(response.data.image);
    });
  };
  const handleChange = (e) => {
    setBio({ ...bio, bio: e.target.value });
  };

  const handleSubmission = (e) => {
    e.preventDefault();

    if (bio) {
      api
        .put(`/user/${auth.data.id}`, bio)
        .then((res) => {
          if (res.status === 200) {
            navigate("/dashboard/profil");
          }
        })
        .catch((err) => alert(err.response));
    }
  };

  useEffect(() => {
    putUserInfo();
  }, [profilImage]);

  return (
    <div>
      <NavBar profileImage={profilImage} />
      {/* {profilImage && <NavBar profileImage={profilImage} />} */}

      <form action="/action_page.php" onSubmit={handleSubmission}>
        <label htmlFor="fname" id="formLabel">
          First Name
        </label>
        <input
          type="text"
          id="fname"
          name="firstname"
          placeholder="Votre prénom.."
          defaultValue={auth.data.firstname}
        />
        <label htmlFor="lname" id="formLabel">
          Last Name
        </label>
        <input
          type="text"
          id="lname"
          name="lastname"
          placeholder="Votre nom.."
          defaultValue={auth.data.lastname}
        />
        <label htmlFor="email" id="formLabel">
          Email
        </label>
        <input
          type="text"
          id="e-mail"
          name="email"
          placeholder="Votre email."
          defaultValue={auth.data.email}
        />

        <label htmlFor="lname" id="formLabel">
          Bio
        </label>
        <textarea
          type="text"
          id="bio"
          name="bio"
          placeholder="Ecris ta bio.."
          onChange={handleChange}
          defaultValue={auth.data.bio}
        />
        <input type="submit" value="Submit" />
      </form>
    </div>
  );
}

export default ModifyProfil;
