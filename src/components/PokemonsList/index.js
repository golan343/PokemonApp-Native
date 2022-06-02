import react, { useCallback, useState, useEffect, memo } from "react";
import styled from "styled-components/native";
import Pokemon from '../Pokemon/index';


const PokemonList = ({ setSelectedPokemon }) => {
  const [pokemons, setPokemons] = useState([]);

  const getPokemons = useCallback(() => {
    fetch('https://pokeapi.co/api/v2/pokemon?limit=180')
      .then(response => response.json())
      .then(data => setPokemons(data.results))
  }, [setPokemons]);

  useEffect(() => {
    getPokemons();
  }, [getPokemons]);


  return(
    <FlatList 
      numColumns={3}
      data={pokemons}
      keyExtractor={pokemon => pokemon.name}
      renderItem={({item}) => {
        const pokemon = item;
        return <Pokemon 
          name={pokemon.name}
          id={pokemon.id}  
          setSelectedPokemon={setSelectedPokemon}
        />
      }}
    />
  )
}

export default memo(PokemonList);



const FlatList = styled.FlatList`
  height: 80%;
`;