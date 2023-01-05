import PropTypes from "prop-types";
import valide from "../../assets/img/cocher.png";
import invalide from "../../assets/img/supprimer.png";
import "./PWDRequiste.css";

function PWDRequisite({
  capsLetterFlag,
  numberFlag,
  pwdLengthFlag,
  specialCharFlag,
}) {
  return (
    <div id="message">
      <div className="capsLetterFlag">
        <p id="capsLetterFlag">Must contain 1 Capital Letter</p>
        <img
          id="logovalide"
          src={capsLetterFlag ? valide : invalide}
          alt="valide"
        />
      </div>
      <div className="numberFlag">
        <p id="numberFlag">Must contain number</p>
        <img
          id="logovalide"
          src={numberFlag ? valide : invalide}
          alt="valide"
        />
      </div>
      <div className="pwdLengthFlag">
        <p id="pwdLengthFlag">Must be 8 Chars long</p>
        <img
          id="logovalide"
          src={pwdLengthFlag ? valide : invalide}
          alt="valide"
        />
      </div>
      <div className="specialCharFlag">
        <p id="specialCharFlag"> Must contain special character</p>
        <img
          id="logovalide"
          src={specialCharFlag ? valide : invalide}
          alt="valide"
        />
      </div>
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
