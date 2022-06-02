import react from "react";
import styled from 'styled-components/native';

const Header = ({ text }) => {
  return(
    <View>
      <Text>{text}</Text>
    </View>
  )
};

export default Header;


const View = styled.View`
  /* background-color: "#000"; */
  border: 1px solid green;
  margin-top: 7%;
  margin-bottom: 5%;
`;

const Text = styled.Text`
/* border: 1px solid red; */
text-align: center;
font-weight: 500;
color: rgb(255, 150, 45);
font-size: 25px;
`;
