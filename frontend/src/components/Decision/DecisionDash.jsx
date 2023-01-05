import React from "react";
import PropTypes from "prop-types";

function DecisionDash({ title }) {
  return (
    <div>
      <div>
        <h2>{title}</h2>
      </div>
    </div>
  );
}
DecisionDash.propTypes = {
  title: PropTypes.string.isRequired,
};
export default DecisionDash;
