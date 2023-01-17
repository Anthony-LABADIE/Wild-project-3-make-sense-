import React, { useContext } from "react";
import PropTypes from "prop-types";
import DatePickerr from "./ReactDatePicker";
import CurrentDecisionContext from "../../Contexts/DecisionContexts";

function DecisionCard({ txt, title1, inputtext, isActiveDecision }) {
  const { setInput, input } = useContext(CurrentDecisionContext);
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
            <textarea
              placeholder={el.placeholder}
              type={el.type}
              value={input[el.value]}
              name={el.name}
              id={el.id}
              onChange={handleChange}
              input={input}
              setInput={setInput}
            />
          </div>
        ))}
      </div>
      {isActiveDecision === 1 ? (
        <div>
          <label style={{ color: "red" }} htmlFor="Date">
            Date fake pour l'instant <br />
            "ne pas remplir"
          </label>
          <DatePickerr />
        </div>
      ) : null}
    </div>
  );
}
DecisionCard.propTypes = {
  title1: PropTypes.string.isRequired,
  txt: PropTypes.string.isRequired,
  inputtext: PropTypes.string.isRequired,
  isActiveDecision: PropTypes.string.isRequired,
};
export default DecisionCard;
