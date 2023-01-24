import PropTypes from "prop-types";

export default function MenuBar({ handleClick, handleConflit, handleAvis }) {
  return (
    <div className="menubar">
      <h3>PERSONNES IMPACTEES</h3>
      <h3>PERSONNES EXPERTES</h3>
      <h5>voir les avis</h5>
      <button
        className="btn-avis"
        type="button"
        onClick={() => {
          handleAvis();
          handleClick();
        }}
      >
        DONNEZ UN AVIS
      </button>
      <button
        className="btn-conflit"
        type="button"
        onClick={() => {
          handleConflit();
          handleClick();
        }}
      >
        DONNEZ UN CONFLIT
      </button>
    </div>
  );
}

MenuBar.propTypes = {
  handleClick: PropTypes.string.isRequired,
  handleConflit: PropTypes.string.isRequired,
  handleAvis: PropTypes.string.isRequired,
};
