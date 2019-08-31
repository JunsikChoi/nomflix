import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

const TVPresenter = (topRated, popular, airingToday, loading, error) => null;

TVPresenter.PropTypes = {
  topRated: PropTypes.array,
  popular: PropTypes.array,
  airingToday: PropTypes.array,
  error: PropTypes.string,
  loading: PropTypes.bool.isRequired
};

export default TVPresenter;
