import React from "react";
import { useDispatch } from "react-redux";
import { setFilter } from "../../redux/actions";

const Filter = () => {
  const dispatch = useDispatch();

  const handleFilterChange = evt => {
    dispatch(setFilter(evt.target.value));
  };

  return (
    <div>
      <label htmlFor="filter">Find contacts by name</label>
      <input
        type="text"
        name="filter"
        placeholder="Search by name"
        onChange={handleFilterChange}
      />
    </div>
  );
};

export default Filter;