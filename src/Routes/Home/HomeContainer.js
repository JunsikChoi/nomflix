import React from "react";
import HomePresenter from "./HomePresenter";

export default class extends React.Component {
  state = {
    nowplaying: null,
    upcoming: null,
    popular: null,
    error: null,
    loading: true
  };

  render() {
    const { nowplaying, upcoming, popular, error, loading } = this.state;
    return (
      <HomePresenter
        nowplaying={nowplaying}
        upcoming={upcoming}
        popular={popular}
        error={error}
        loading={loading}
      />
    );
  }
}
