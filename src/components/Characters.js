import React from "react";
import PropTypes from "prop-types";

const Characters = props =>
  !props.data ? (
    <div>Loading...</div>
  ) : (
    props.data.map(item => (
      <div key={item.name} className="element">
        {item.name}
      </div>
    ))
  );

Characters.propTypes = {
  data: PropTypes.array
};

export default Characters;
