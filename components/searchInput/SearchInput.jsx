import React from 'react';
import styles from './SearchInput.module.css'

function SearchInput({ value, onChange }) {
  return (
    <>
      <label htmlFor="input" className={styles.searchInput} >Nombre del Pokémon</label>
      <input className={styles.searchInput}
        type="text"
        id="input"
        value={value}
        onChange={onChange}
      />
    </>
  );
}

export default SearchInput;
