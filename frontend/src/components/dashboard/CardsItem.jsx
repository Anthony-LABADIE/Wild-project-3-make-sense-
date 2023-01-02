/* eslint-disable camelcase */
import PropTypes from "prop-types";
// import { Link } from "react-router-dom";
import "./Cards.css";

function CardsItem({ title, lastname, firstname }) {
  return (
    // <Link to={`/cards/${id - 1}`}>
    <div className="CardItem">
      <h2 className="black"> {title}</h2>
      <div className="user">
        par {lastname} {firstname}{" "}
      </div>
    </div>
    // </Link>
  );
}

CardsItem.propTypes = {
  title: PropTypes.string.isRequired,
  lastname: PropTypes.string.isRequired,
  firstname: PropTypes.string.isRequired,
};

export default CardsItem;
