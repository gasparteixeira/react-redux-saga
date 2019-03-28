import React from "react";

const Characters = props =>
  !props.data ? (
    <div>Loading...</div>
  ) : (
    props.data.map(item => <div key={item.name}>{item.name}</div>)
  );

export default Characters;
