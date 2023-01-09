import React from "react";
import PropTypes from "prop-types";

function DecisionCard({ txt, title1, input, setInput, inputtext }) {
  const handleChange = (e) => {
    setInput({ ...input, [e.target.name]: e.target.value });
  };

  return (
    <div>
      <div>
        <h3>{title1}</h3>
        <p>{txt}</p>
        <p>Title</p>
        {inputtext.map((el) => (
          <input
            label={el.label}
            type={el.type}
            value={input[el.value]}
            name={el.name}
            id={el.id}
            onChange={handleChange}
          />
        ))}
      </div>
    </div>
  );
}
DecisionCard.propTypes = {
  title1: PropTypes.string.isRequired,
  txt: PropTypes.string.isRequired,
  input: PropTypes.string.isRequired,
  setInput: PropTypes.string.isRequired,
  inputtext: PropTypes.string.isRequired,
};
export default DecisionCard;
