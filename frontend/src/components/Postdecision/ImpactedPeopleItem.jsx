/* eslint-disable camelcase */
import PropTypes from "prop-types";

function ImpactedPeolpeItem({ firstname }) {
  return <div>{firstname}</div>;
}

ImpactedPeolpeItem.propTypes = {
  firstname: PropTypes.string.isRequired,
};

export default ImpactedPeolpeItem;
