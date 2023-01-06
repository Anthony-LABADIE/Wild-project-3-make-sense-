import React from "react";
import PropTypes from "prop-types";

function DecisionCard1({
  txt,
  title1,
  input,
  setInput,
  type,
  value,
  idInput,
  name,
}) {
  const handleChange = (e) => {
    setInput({ ...input, [e.target.name]: e.target.value });
  };
  return (
    <div>
      <div>
        <h3>{title1}</h3>
        <p>{txt}</p>
        <input
          type={type}
          value={input[value]}
          name={name}
          id={idInput}
          onChange={handleChange}
        />
      </div>
    </div>
  );
}
DecisionCard1.propTypes = {
  title1: PropTypes.string.isRequired,
  txt: PropTypes.string.isRequired,
  input: PropTypes.string.isRequired,
  setInput: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  idInput: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
};
export default DecisionCard1;
