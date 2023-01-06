/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable camelcase */
import PropTypes from "prop-types";
import "./ProfilAllUser.css";

function UserItem({ lastname, firstname, id, onclick, expert }) {
  return (
    <div>
      <div className="UserItem" onClick={onclick} key={id}>
        {lastname} {firstname} {id}
      </div>
      <button onClick={expert} type="button">
        expert
      </button>
    </div>
  );
}

UserItem.propTypes = {
  lastname: PropTypes.string.isRequired,
  firstname: PropTypes.string.isRequired,
  id: PropTypes.number.isRequired,
  onclick: PropTypes.string.isRequired,
  expert: PropTypes.string.isRequired,
};

export default UserItem;
