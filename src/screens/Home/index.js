import react from 'react';
// import { View, Text } from 'react-native';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import PokemonList from '../../components/PokemonsList';
import styled from 'styled-components/native';

const Home = ({ setSelectedPokemon }) => {
  
  
  return (
    <View>
      <SafeAreaView>
      <Header text="Pokémon's" />
      </SafeAreaView>
      <PokemonList setSelectedPokemon={setSelectedPokemon} />
      <SafeAreaView>
      <Footer />
      </SafeAreaView>
      
    </View>
  )
}

export default Home;


const View = styled.View`

`;

const SafeAreaView = styled.SafeAreaView`

`;