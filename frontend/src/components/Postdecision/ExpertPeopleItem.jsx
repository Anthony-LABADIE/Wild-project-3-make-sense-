/* eslint-disable camelcase */
import PropTypes from "prop-types";

function ExpertPeolpeItem({ firstname }) {
  return <div>{firstname}</div>;
}

ExpertPeolpeItem.propTypes = {
  firstname: PropTypes.string.isRequired,
};

export default ExpertPeolpeItem;
