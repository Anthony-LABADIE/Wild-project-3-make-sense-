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
    const test = id;
    if (allIds.map(e => e.id_user).indexOf(test) !== -1) {
      const allIdsUpdated = allIds.filter((ids) => ids.id_user !== test);
      setAllIds(allIdsUpdated);
    } else {
      setAllIds((prev) => {
        return [...prev, { id_user: test }];
      });
    }
  };
  console.log(allIds);

  const createTab = (e) => {
    console.log("coucou");
    e.preventDefault();
    api.post("/authorization", { ...allIds }).then((res) => res);
  };

  const getAllUser = () => {
    api.get("user").then((response) => setUser(response.data));
  };

  useEffect(() => {
    getAllUser();
  }, []);

  const userMap = user.map((userItem) => (
    <UserItem
      lastname={userItem.lastname}
      firstname={userItem.firstname}
      id={userItem.id}
      onclick={() => handleClick(userItem.id)}
    />
  ));

  return (
    <div className="carreau">
      <CustomButton onPress={createTab} />
      {userMap}
    </div>
  );
}

export default profilAllUser;
