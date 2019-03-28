import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchCharacteres } from "./actions/characters";
import Characteres from "./components/Characters";
import "./App.css";

class App extends Component {
  state = {
    characteres: null
  };

  componentDidMount() {
    fetchCharacteres();
  }

  static getDerivedStateFromProps(nextProps, prevState) {
    if (nextProps.characters !== null) {
      return {
        characteres: nextProps.characters
      };
    }
    return null;
  }

  render() {
    return (
      <div className="App">
        <Characteres data={this.state.characteres} />
      </div>
    );
  }
}

const mapStateToProps = state => ({
  characters: state.appReducers.characteres
});

export default connect(
  mapStateToProps,
  {}
)(App);
