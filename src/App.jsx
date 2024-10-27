import React, { useState, useEffect } from 'react';
import axios from 'axios';
import SearchInput from '../components/SearchInput';
import PokemonInfo from '../components/PokemonInfo';
import Loading from '../components/Loading';
import Error from '../components/Error';
import './App.css';

function App () {
  const [searchInput, setSearchInput] = useState('')
  const [error, setError] = useState(null)
  const [loading, setLoading] = useState(false)
  const [pokemon, setPokemon] = useState(null)

  useEffect(() => {
    const trimSearchInput = searchInput.trim()

    if(!trimSearchInput) {
      setPokemon(null)
      setError(null)
      return
    }

    const getPokemon = async () => {
      setLoading(true)
      setError(null)

      try {
        const response = await axios.get(`https://pokeapi.co/api/v2/pokemon/${searchInput.toLowerCase()}`)
        setPokemon(response.data)
      } catch (error) {
        setError(`Pokemon no encontrado`)
        setPokemon(null)
      } finally {
        setLoading(false)
      }
    }

    getPokemon()
  }, [searchInput])

  const handleInput = (e) => {
    setSearchInput(e.target.value)
  }

  return (
    <>
      <h1>Buscar Pokemon</h1>
      <SearchInput value={searchInput} onChange={(e) => setSearchInput(e.target.value)} />

      {pokemon && <PokemonInfo pokemon={pokemon} />}

      {loading && <Loading />}
      {error && <Error mensaje={error} />}
    </>
  )
}

export default App;
