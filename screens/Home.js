import { ImageBackground, Text, Link  } from "react-native";
import { Box, Heading, Button, ScrollView } from "native-base";
import { globalStyles } from "../styles/global";
import { useState, useEffect } from "react";
import * as Linking from 'expo-linking';


export default function Home({ navigation }) {



  return (
    

    <ScrollView>
      <ImageBackground
        source={require("../assets/img/icon512.png")}
        style={globalStyles.home}
      ><Button onPress={() => Linking.openURL("https://google.com")}>asda</Button>
        <Box p="10" style={globalStyles.homeTextBox}>
          
          <Heading style={globalStyles.titleText}>Välkommen!</Heading>
          <Text style={globalStyles.titleText}>Hofors och Torsåker har mycket att erbjuda dig som vill bo, äta, fika, uppleva och göra, nära blånande berg, storskogar och fiskesjöar. I appen hittar du snabbt vad som händer nu!</Text>
          <Button h={70} my="5" onPress={() => {navigation.navigate('Evenemang')}}>Evenemang</Button>
          <Button h={70} my="5" onPress={() => {navigation.navigate('Föreningar')}}>Föreningar</Button>
          <Button h={70} my="5" isDisabled>Besöksmål</Button>
          <Button h={70} my="5" isDisabled>Äta</Button>
          <Button h={70} my="5" isDisabled>Bo</Button>
        </Box>
      </ImageBackground>
    </ScrollView>
  );
}
