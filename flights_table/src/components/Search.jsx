import React, { useState } from "react";
import { connect } from "react-redux";
import { CgSearch } from "react-icons/cg";
import * as flightsAction from "../tasks/flights.actions";

const Search = ({ search, getSearchedFlight }) => {
  const [inputText, setInpitText] = useState(search);

  const handleChange = (e) => {
    setInpitText(e.target.value.toUpperCase());
  };

  const handleSearch = (e) => {
    e.preventDefault();
    getSearchedFlight(inputText);
  };

  return (
    <div className="search">
      <form
        className="search__form"
        // onSubmit={ }
        //
      >
        <CgSearch />
        <input
          type="text"
          className="search__input"
          placeholder="flight #"
          onChange={handleChange}
          value={inputText}
          //
        />
        <button
          className="search__button"
          onClick={handleSearch}
          //
        >
          Search
        </button>
      </form>
    </div>
  );
};

const mapState = (state) => {
  return {
    search: state.flightsList.flight,
  };
};

const mapDispatch = {
  getSearchedFlight: flightsAction.getSearchedFlight,
};

export default connect(mapState, mapDispatch)(Search);
