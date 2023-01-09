/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable camelcase */
import PropTypes from "prop-types";
import "./ProfilAllUser.css";
import insta from "../../assets/img/insta.png";

function UserItem({ lastname, firstname, id, onclick, expert, clicked }) {
  return (
    <div className="userContainer">
      <div className="UserItem" onClick={onclick} key={id}>
        <ul>
          <li>{firstname}</li>
          <li>{lastname}</li>
        </ul>
        <div className="image">
          <img src={insta} alt="insta" />
        </div>
      </div>
      <button
        className={clicked ? "expertButtonGreen" : "expertButtonRed"}
        onClick={expert}
        type="button"
      >
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
  clicked: PropTypes.string.isRequired,
};

export default UserItem;
