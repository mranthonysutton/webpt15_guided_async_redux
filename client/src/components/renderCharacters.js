import React, { useEffect } from "react";
import { connect } from "react-redux";
import { getCharacters } from "../store/actions/characterActions";

const RenderCharacter = (props) => {
  useEffect(() => {
    props.getCharacters();
  }, []);

  return <h1>Breaking Bad Characters</h1>;
};

const mapStateToProps = (state) => {
  console.log("STATE: ", state);
  return {
    characters: state.characters.characters,
    isFetching: state.characters.isFetching,
    errors: state.characters.errors,
  };
};

export default connect(mapStateToProps, { getCharacters })(RenderCharacter);
