/* eslint-disable camelcase */
import PropTypes from "prop-types";
import profil from "../../assets/img/profil.png";

// import { Link } from "react-router-dom";
import "./Cards.css";

function CardsItem({ title, lastname, firstname, status, id_status, image }) {
  return (
    // <Link to={`/cards/${id - 1}`}>
    <div className="CardItem">
      <div
        style={{
          backgroundColor:
            id_status === 4
              ? " rgba(224, 177, 177, 0.28)"
              : "rgba(178, 224, 177, 0.28)",
          border: id_status === 4 ? " 1px solid #ff0000" : "1px solid #3c9625",
          color: id_status === 4 ? "#ff0000" : "#3c9625",
        }}
        className="status"
      >
        {status}
      </div>
      <h2 className="black"> {title}</h2>
      <div className="user">
        <img id="imgprofile" src={image || profil} alt="imgprofile" />
        par {lastname} {firstname}
      </div>
    </div>
    // </Link>
  );
}

CardsItem.propTypes = {
  status: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  lastname: PropTypes.string.isRequired,
  firstname: PropTypes.string.isRequired,
  id_status: PropTypes.number.isRequired,
  image: PropTypes.string.isRequired,
};

export default CardsItem;
