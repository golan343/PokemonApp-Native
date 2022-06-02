import react, { useState, useEffect } from 'react';
import  Home  from './src/screens/Home';
import styled from 'styled-components/native';
import PokemonPage from './src/screens/PokemonPage';

export default function App() {
  const [selectedPokemon, setSelectedPokemon] = useState(null)

  useEffect(() => {
    console.log(selectedPokemon);
  }, [selectedPokemon])

  return (
    <View>
      {!selectedPokemon ? (
        <Home setSelectedPokemon={setSelectedPokemon} />
      ) : (
        <PokemonPage selectedPokemon={selectedPokemon} setSelectedPokemon={setSelectedPokemon} />
      )}

    </View>
    
    // <View style={styles.container}>
    //   <Home />
    //   {/* <Text>Open up App.js to start working on your app!</Text>
    //   <StatusBar style="auto" /> */}
    // </View>
  );
}

const View = styled.View`
  background: #263138;
  text-align: center;
  /* margin: 0 auto; */
  height: 100%;
`;
