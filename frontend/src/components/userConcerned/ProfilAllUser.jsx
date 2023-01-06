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
    const index = id;
    const trueIndex = allIds.map((e) => e.id_user).indexOf(index);
    const isTrue = !allIds[trueIndex].is_expert;
    const newAllIds = allIds.map((obj) =>
      obj.id_user === index ? { ...obj, is_expert: isTrue } : obj
    );
    setAllIds(newAllIds);
  };

  const createTab = () => {
    const { length } = allIds;
    for (let i = 0; i < length; i++) {
      api.post("/authorization", allIds[i]).then((res) => res);
    }
  };

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
      onclick={() => handleClick(userItem.id)}
      expert={() => handleExpert(userItem.id)}
    />
  ));

  return (
    <div className="carreau2" key={Math.random()}>
      <CustomButton key={Math.random()} onPress={createTab} />
      {userMap}
    </div>
  );
}

export default profilAllUser;
