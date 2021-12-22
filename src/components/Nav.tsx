import React, { useState } from "react";
import styled from "styled-components";
import { useDispatch } from "react-redux";
import { searchMovies } from "actions/moviesAction";

export default function Nav() {
  const [searchMovie, setSearchMovie] = useState("");

  const dispatch = useDispatch();

  const handleClearSearch = () => {
    setSearchMovie("");
    dispatch({
      type: "CLEAR_SEARCH",
    });
  };

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();

    if (searchMovie.length) {
      dispatch(searchMovies(searchMovie));
    }
  };

  return (
    <StyledNav>
      <h2 onClick={handleClearSearch}>Netflix&Chill</h2>
      <form onSubmit={handleSearch}>
        <input
          value={searchMovie}
          onChange={(e) => {
            setSearchMovie(e.target.value);
          }}
          placeholder="search..."
          type="text"
        />
        <button>Search</button>
      </form>
    </StyledNav>
  );
}

const StyledNav = styled.nav`
  height: 20vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  h2 {
    margin-bottom: 1rem;
    cursor: pointer;
  }

  input {
    border: none;
    height: 2.7rem;
    font-size: 1rem;

    width: 30rem;
    padding: 0 0.5rem;
    border: 0.1rem solid black;

    &:focus {
      outline: none;
    }
  }

  button {
    height: 2.7rem;
    font-size: 1rem;
    cursor: pointer;

    border: none;
    color: white;
    padding: 0 0.5rem;
    background-color: #ff7272;
  }
`;
