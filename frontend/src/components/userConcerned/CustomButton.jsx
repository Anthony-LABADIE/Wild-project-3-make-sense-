import React from "react";
import PropTypes from "prop-types";

export default function CustomButton({ onPress }) {
  return (
    <button type="button" onClick={onPress}>
      Click on me
    </button>
  );
}

CustomButton.propTypes = {
  onPress: PropTypes.string.isRequired,
};
