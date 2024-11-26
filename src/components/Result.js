import React from "react";

const Result = ({ sonuc, borderStyle }) => {
  return (
    <input
      className={`form-control mb-3 ${borderStyle}`}
      type="text"
      value={sonuc}
      disabled
    />
  );
};

export default Result;
