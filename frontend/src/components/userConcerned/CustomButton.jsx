import React from "react";
import PropTypes from "prop-types";
import "./CustomButton.css";

export default function CustomButton({ onPress }) {
  return (
    <button className="expertButton" type="button" onClick={onPress}>
      Valide ta sélection
    </button>
  );
}

CustomButton.propTypes = {
  onPress: PropTypes.string.isRequired,
};
