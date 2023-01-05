import React from "react";
import PropTypes from "prop-types";

function DecisionCard1({ title }) {
  return (
    <div>
      <h2>{title}</h2>
    </div>
  );
}
DecisionCard1.propTypes = {
  title: PropTypes.string.isRequired,
};
export default DecisionCard1;
