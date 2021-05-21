import React from "react";
import { connect } from "react-redux";
import { userDataSelector, isFetchingSelector } from "./users.selectors";
import PropTypes from "prop-types";

const UserInfo = ({ userData, isFetching }) => {
  const { avatar_url, name, location } = userData;

  return (
    <>
      {isFetching ? (
        <span className="spinner" />
      ) : (
        <div className="user">
          <img alt="User Avatar" src={avatar_url} className="user__avatar" />
          <div className="user__info">
            <span className="user__name">{name}</span>
            <span className="user__location">{location}</span>
          </div>
        </div>
      )}
    </>
  );
};

const mapState = (state) => {
  return {
    userData: userDataSelector(state),
    isFetching: isFetchingSelector(state),
  };
};

UserInfo.propTypes = {
  isFetching: PropTypes.bool.isRequired,
  userData: PropTypes.shape(),
};

UserInfo.defaultProps = {
  userData: null,
};

export default connect(mapState)(UserInfo);
