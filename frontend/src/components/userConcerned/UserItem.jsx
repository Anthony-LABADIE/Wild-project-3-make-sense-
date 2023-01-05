/* eslint-disable camelcase */
import PropTypes from "prop-types";
import { useState } from "react";
import "./ProfilAllUser.css";

function UserItem({ lastname, firstname, id, onclick }) {
  return (
    <div className="UserItem" onClick={onclick}>
      {lastname} {firstname} {id}
    </div>
  );
}

UserItem.propTypes = {
  lastname: PropTypes.string.isRequired,
  firstname: PropTypes.string.isRequired,
  id: PropTypes.number.isRequired,
};

export default UserItem;
