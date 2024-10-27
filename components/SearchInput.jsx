// SearchInput.js
import React from 'react';

function SearchInput({ value, onChange }) {
  return (
    <>
      <label htmlFor="input">Nombre del Pokémon</label>
      <input
        type="text"
        id="input"
        value={value}
        onChange={onChange}
      />
    </>
  );
}

export default SearchInput;
