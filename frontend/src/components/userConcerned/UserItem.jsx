/* eslint-disable camelcase */
import PropTypes from "prop-types";
import "./ProfilAllUser.css";
import profil from "../../assets/img/profil.png";

function UserItem({
  lastname,
  firstname,
  id,
  onclick,
  expert,
  clicked,
  isExpert,
}) {
  const expertCondition = isExpert ? "expertButtonGreen" : "expertButtonRed";

  return (
    <div className="userContainer">
      <div className={clicked ? "UserItemOn" : "UserItemOff"}>
        <h2
          className="div2"
          onClick={onclick}
          key={id}
          onKeyDown={onclick}
          role="presentation"
        >
          {firstname} {lastname}
        </h2>
        <div
          className="div1"
          onClick={onclick}
          key={id}
          onKeyDown={onclick}
          role="presentation"
        >
          <img src={profil} alt="insta" />
        </div>
        <div className="div3">
          <button
            className={clicked ? expertCondition : "expertButtonRed"}
            onClick={expert}
            type="button"
          >
            expert
          </button>
        </div>
      </div>
    </div>
  );
}

UserItem.propTypes = {
  lastname: PropTypes.string.isRequired,
  firstname: PropTypes.string.isRequired,
  id: PropTypes.number.isRequired,
  onclick: PropTypes.string.isRequired,
  expert: PropTypes.string.isRequired,
  clicked: PropTypes.bool.isRequired,
  isExpert: PropTypes.bool.isRequired,
};

export default UserItem;
