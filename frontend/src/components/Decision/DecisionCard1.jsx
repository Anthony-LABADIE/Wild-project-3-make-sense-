import React from "react";
import PropTypes from "prop-types";

function DecisionCard1({ txt, title1, input, setInput }) {
  const handleChange = (e) => {
    setInput({ ...input, [e.target.name]: e.target.value });
  };
  return (
    <div>
      <div>
        <h3>{title1}</h3>
        <p>{txt}</p>
        <input
          name="Description"
          id="decision"
          value={input.Description || ""}
          type="text"
          onChange={handleChange}
        />
      </div>
    </div>
  );
}
DecisionCard1.propTypes = {
  title1: PropTypes.string.isRequired,
  txt: PropTypes.string.isRequired,
  Description: PropTypes.string.isRequired,
  input: PropTypes.string.isRequired,
  setInput: PropTypes.string.isRequired,
};
export default DecisionCard1;
