import React from "react";
import PropTypes from "prop-types";
import DatePickerr from "./ReactDatePicker";

function DecisionCard({
  txt,
  title1,
  input,
  setInput,
  inputtext,
  isActiveDecision,
}) {
  const handleChange = (e) => {
    setInput({ ...input, [e.target.name]: e.target.value });
  };
  return (
    <div>
      <div>
        <h3>{title1}</h3>
        <p>{txt}</p>
        {inputtext.map((el) => (
          <div>
            <label htmlFor={el.label}>{el.label}</label>
            <br />
            <input
              placeholder={el.placeholder}
              type={el.type}
              value={input[el.value]}
              name={el.name}
              id={el.id}
              onChange={handleChange}
            />
          </div>
        ))}
      </div>
      {isActiveDecision === 4 ? (
        <div>
          <label htmlFor="Date">Date</label>
          <DatePickerr />
        </div>
      ) : null}
    </div>
  );
}
DecisionCard.propTypes = {
  title1: PropTypes.string.isRequired,
  txt: PropTypes.string.isRequired,
  input: PropTypes.string.isRequired,
  setInput: PropTypes.string.isRequired,
  inputtext: PropTypes.string.isRequired,
  isActiveDecision: PropTypes.string.isRequired,
};
export default DecisionCard;
