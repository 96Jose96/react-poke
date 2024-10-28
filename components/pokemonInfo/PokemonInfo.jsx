import React from "react"
import styles from "./PokemonInfo.module.css"
        
function PokemonInfo({ pokemon }) {
    return (
        <div className={styles.pokemonInfo}>
          <img src={pokemon.sprites.front_default} alt={pokemon.name}/>
          <h2>{pokemon.name}</h2>
        </div>
        )
}

export default PokemonInfo