import react, { useState, useEffect } from "react";
import styled from 'styled-components/native';
import { Capitalize } from "../../helpers/Capitalize";

const Pokemon = ({ name, setSelectedPokemon }) => {
  const [pokemonData, setPokemonData] = useState({});


  useEffect(() => {
    fetch(`https://pokeapi.co/api/v2/pokemon/${name}`)
      .then(response => response.json())
      .then(data => setPokemonData(data))
      
  }, [name]);

  useEffect(() => {

  }, []);

  return(
    <View onPress={() => setSelectedPokemon(pokemonData.id) }>
      <Text> {Capitalize(name)} </Text>
      {pokemonData.sprites && (<Image source={{ uri: pokemonData.sprites.front_default }}  />)}
      <Label></Label>
    </View>
  )

}

export default Pokemon;


const Text = styled.Text` 
  margin: 0;
  /* border: 1px solid #fff; */
  color: #e6b89c;
  text-align: center;
  padding-top: 5%;
  font-size: 18px;
`;

const Image = styled.Image`
  margin: auto;
  width: 96px;
  height: 96px;
`;

const View = styled.TouchableOpacity`
  font-weight: bold;
  /* border: 1px solid yellow; */
  height: 120px;
  margin: auto;
  width: 120px;
  margin-top: 2px;
`;

const Label = styled.Text`
background-color: #fff;
height:0.5px;
opacity: 0.1;
`;
