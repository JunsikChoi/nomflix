import React from "react";
import propTypes from "prop-types";
import styled from "styled-components";
import Section from "../../Components/Section";
import Loader from "../../Components/Loader";

const Container = styled.div`
  padding: 0px 10px;
`;

const TVPresenter = ({ topRated, popular, airingToday, loading, error }) =>
  loading ? (
    <Loader />
  ) : (
    <Container>
      {topRated && topRated.length > 0 && (
        <Section title="Top Rated Shows">
          {topRated.map(show => (
            <span id={show.id}>{show.name}</span>
          ))}
        </Section>
      )}
      {popular && popular.length > 0 && (
        <Section title="Popular Shows">
          {popular.map(show => (
            <span id={show.id}>{show.name}</span>
          ))}
        </Section>
      )}
      {airingToday && airingToday.length > 0 && (
        <Section title="Airing Today Shows">
          {airingToday.map(show => (
            <span id={show.id}>{show.name}</span>
          ))}
        </Section>
      )}
    </Container>
  );

TVPresenter.propTypes = {
  topRated: propTypes.array,
  popular: propTypes.array,
  airingToday: propTypes.array,
  error: propTypes.string,
  loading: propTypes.bool.isRequired
};

export default TVPresenter;
