import React from "react";
import PropTypes from "prop-types";

export const GenreList = props => {
  const { list } = props;
  return (
    <>
      {list.map((element, index) => (
        <></>
      ))}
    </>
  );
};

GenreList.propTypes = {
  list: PropTypes.array.isRequired
};
