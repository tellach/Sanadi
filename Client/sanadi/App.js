import React from 'react';
import { StyleSheet, Text, View, ImageBackground, FlatList } from 'react-native';
import Navigation from "./navigation/Navigation1"
import Navigation2 from "./navigation/Navigation2"
import Navigation3 from "./navigation/MainNavigation"
import HandicapeScreen from "./screens/HandicapeScreen"
import CancelScreen from "./screens/CancelHelpScreen"
export default class App extends React.Component {
  render() {
    return (

      <Navigation3 />
  
    );
  }   
}


const styles = StyleSheet.create({
  container: {
    //flex: 1,  
    //backgroundColor: '#03224c',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
