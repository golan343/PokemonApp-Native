import react from 'react';
import styled from 'styled-components/native';
import { Capitalize } from '../../helpers/Capitalize';

const PokemonDetails = ({ pokemonData }) => {
  let pokemonName = '';
  pokemonData.name ? pokemonName = Capitalize(pokemonData.name) : '';
  
  return(
    <Container>
      <Title>{pokemonName}</Title>
      <View>
        <SecondTitle>Details:</SecondTitle>
        {pokemonData && pokemonData.stats && 
          <FlatList
            data={pokemonData.stats}
            keyExtractor={stats => stats.name }
            renderItem={({item}) => {
            const stat = item;
              return <Text>{Capitalize(stat.stat.name)}: {stat.base_stat}</Text>
            }}
          />}

      </View>

    </Container>
  )
}

export default PokemonDetails;

const Container= styled.View`

`;

const  View = styled.View``;

const Title = styled.Text`
  font-size: 20px;
  color: #fff;
`;
const SecondTitle = styled.Text`
  font-size: 17px;
  color: #fff;
`;

const FlatList = styled.FlatList``;

const Text = styled.Text`
color: #fff;
`;