/* eslint-disable camelcase */
import PropTypes from "prop-types";

// import { Link } from "react-router-dom";
import "./Cards.css";

function CardsItem({ title, lastname, firstname, status, id_status }) {
  return (
    // <Link to={`/cards/${id - 1}`}>
    <div className="CardItem">
      <div
        style={{
          backgroundColor:
            id_status === 4
              ? " rgba(224, 177, 177, 0.28)"
              : "rgba(178, 224, 177, 0.28)",
        }}
        className="status"
      >
        {status}
      </div>
      <h2 className="black"> {title}</h2>
      <div className="user">
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
};

export default CardsItem;
