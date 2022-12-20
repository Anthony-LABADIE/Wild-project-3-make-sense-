import PropTypes from "prop-types";
import "./PWDRequiste.css";

function PWDRequisite({
  capsLetterFlag,
  numberFlag,
  pwdLengthFlag,
  specialCharFlag,
}) {
  return (
    <div id="message">
      <p className={capsLetterFlag}>Must contain 1 Capital Letter</p>
      <p className={numberFlag}>Must contain number</p>
      <p className={pwdLengthFlag}>Must be 8 Chars long</p>
      <p className={specialCharFlag}> Must contain special character</p>
    </div>
  );
}

PWDRequisite.propTypes = {
  capsLetterFlag: PropTypes.string.isRequired,
  numberFlag: PropTypes.string.isRequired,
  pwdLengthFlag: PropTypes.string.isRequired,
  specialCharFlag: PropTypes.string.isRequired,
};

export default PWDRequisite;
