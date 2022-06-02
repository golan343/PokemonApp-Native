import react from 'react';
import styled from 'styled-components/native';

const PokemonEvolution = ({ pokemonChain }) => {


  return(
      <FlatList 
        data={pokemonChain}
        numColumns={3}
        keyExtractor={pokemon => pokemon.name}
        renderItem={({item}) => {
          const pokemon = item;
          return <Image source={{ uri: `https://img.pokemondb.net/artwork/vector/${pokemon.name}.png` }} />
        }}
      />
  )

}

export default PokemonEvolution;

const FlatList = styled.FlatList`
    

`;

const Image = styled.Image`
  width: 100px;
  height: 100px;
  margin: 5%;
 

`;

const View = styled.View`
 /* flex-direction: row; */
    /* flex-wrap: wrap; */
`;