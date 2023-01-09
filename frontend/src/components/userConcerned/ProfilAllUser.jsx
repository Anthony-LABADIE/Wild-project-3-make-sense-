/* eslint-disable no-plusplus */
/* eslint-disable camelcase */
import { useState, useEffect } from "react";
import api from "../../services/api";
import UserItem from "./UserItem";
import "./ProfilAllUser.css";
import CustomButton from "./CustomButton";

function profilAllUser() {
  const [user, setUser] = useState([]);
  const [allIds, setAllIds] = useState([]);

  const handleClick = (id) => {
    const index = id;
    if (allIds.map((e) => e.id_user).indexOf(index) !== -1) {
      const allIdsUpdated = allIds.filter((ids) => ids.id_user !== index);
      setAllIds(allIdsUpdated);
    } else {
      setAllIds([...allIds, { id_user: index, is_expert: false }]);
    }
  };

  const handleExpert = (id) => {
    // user index
    const index = id;
    // index of the user in the array of object
    const trueIndex = allIds.map((e) => e.id_user).indexOf(index);
    // if user index exists in the array of object
    if (trueIndex !== -1) {
      // set invers of is_expert
      const isTrue = !allIds[trueIndex].is_expert;
      const newAllIds = allIds.map((obj) =>
        obj.id_user === index ? { ...obj, is_expert: isTrue } : obj
      );
      setAllIds(newAllIds);
    }

    const clickIndex = user.map((e) => e.id).indexOf(index);
    if (clickIndex !== -1 && trueIndex !== -1) {
      const newClick = !user[clickIndex].clicked;
      const newClicked = user.map((obj) =>
        obj.id === index ? { ...obj, clicked: newClick } : obj
      );
      setUser(newClicked);
    }
  };

  const createTab = () => allIds.map((e) => api.post("/authorization", e));

  const getAllUser = () => {
    api.get("user").then((response) => setUser(response.data));
  };

  useEffect(() => {
    getAllUser();
  }, []);

  const userMap = user.map((userItem) => (
    <UserItem
      key={UserItem.id}
      lastname={userItem.lastname}
      firstname={userItem.firstname}
      id={userItem.id}
      clicked={userItem.clicked}
      onclick={() => handleClick(userItem.id)}
      expert={() => handleExpert(userItem.id)}
    />
  ));

  return (
    <div className="concernedContainer" key={Math.random()}>
      <div className="select">
        <h2>Sélectionne tes collègues qui pourront commenter ta décision</h2>
        <CustomButton key={Math.random()} onPress={createTab} />
      </div>
      <div className="userCard">{userMap}</div>
    </div>
  );
}

export default profilAllUser;
