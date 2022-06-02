import react, { useState, useEffect, useMemo } from 'react';
import styled from 'styled-components/native';
import PokemonDetails from '../../components/PokemonDetails/PokemonDetails';
import PokemonEvolution from '../../components/PokemonEvolution';


export const getPokemonChain = (acc, data) => {
  acc.push({
    name: data.species.name,
  })
  if (data.evolves_to.length === 0) {
    return acc
  } else {
    return data.evolves_to.reduce(getPokemonChain, acc)
  }
}

const PokemonPage = ({ selectedPokemon, setSelectedPokemon }) => {
  const [pokemonChainData, setPokemonChainData] = useState({});
  const [pokemonData, setPokemonData] = useState({});
  
  useEffect(() => {
    fetch(`https://pokeapi.co/api/v2/pokemon/${selectedPokemon}`)
      .then(response => response.json())
      .then(data => {
        setPokemonData(data)
        fetch(data.species.url)
        .then(response => response.json())
        .then(data => {
          fetch(data.evolution_chain.url)
            .then(response => response.json())
            .then(data => setPokemonChainData(data))
        })
      })
  }, [selectedPokemon]);

  const pokemonChain = useMemo(() => {
    if (pokemonChainData && pokemonChainData.chain) {
      return getPokemonChain([], pokemonChainData.chain.evolves_to[0])
    }
  }, [pokemonChainData]);

  return(
    <View>
      <Button title="Back" onPress={() => setSelectedPokemon(null)} />
      <PokemonDetailsView>
        <PokemonDetails pokemonData={pokemonData} />
      </PokemonDetailsView>
      <PokemonImage source={{uri: `https://img.pokemondb.net/artwork/vector/${pokemonData.name}.png`}} />
      <PokemonEvolutionView>
        <PokemonEvolution pokemonChain={pokemonChain} />
      </PokemonEvolutionView>
      
    </View>
  )

}

export default PokemonPage;

const View = styled.View`
  margin-top: 5%;
`;
const PokemonDetailsView = styled.View`

`;
const PokemonEvolutionView = styled.View`
left: 20%;

`;
const Text = styled.Text``;

const Button = styled.Button`
  width: 10px;
`;

const PokemonImage = styled.Image`
  width: 100px;
  height: 100px;
`;