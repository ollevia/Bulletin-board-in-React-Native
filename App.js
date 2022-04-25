import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Button, Text, View } from 'react-native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';

import AppLoading from 'expo-app-loading';
import Home from "./screens/Home";
import ActivityStackScreen from './routes/activityStack';

import { NativeBaseProvider, extendTheme } from "native-base";
import Header from './components/header';
import { FontAwesome } from '@expo/vector-icons';
import AssocStackScreen from './routes/assocStack';
import { useFonts } from 'expo-font';


const Drawer = createDrawerNavigator();


const theme = extendTheme({
  fontConfig: {
    Lifehack: {
      100: {
        normal: 'Lifehack',
      },
      200: {
        normal: 'Lifehack',
      },
      300: {
        normal: 'Lifehack',
      },
      400: {
        normal: 'Lifehack',
      },
      500: {
        normal: 'Lifehack',
      },
      600: {
        normal: 'Lifehack',
      },
      700: {
        normal: 'Lifehack',
      },
      800: {
        normal: 'Lifehack',
      },
      900: {
        normal: 'Lifehack',
      },
    },
  },

  fonts: {
    heading: 'Lifehack'
  },
});



export default function App() {
  let [fontsLoaded] = useFonts({
    'Lifehack': require('./assets/font/Lifehack-Medium.otf'),
  });

  if(fontsLoaded){
  return (
    <NativeBaseProvider theme={theme}>
      <NavigationContainer>
        <Drawer.Navigator screenOptions={({navigation}) => ({headerStyle: {backgroundColor: "#77B82A"}, headerTitle: () => <Header navigation={navigation} />, headerLeft: () => null})}>
          <Drawer.Screen name="Hem" component={Home} />
          <Drawer.Screen name="Evenemang" component={ActivityStackScreen}/>
          <Drawer.Screen name="Föreningar" component={AssocStackScreen} />
          
          
        </Drawer.Navigator>
      </NavigationContainer>
      <StatusBar />
    </NativeBaseProvider>
      
  );
}else {
  return (
    <AppLoading/>
    )
}
}

