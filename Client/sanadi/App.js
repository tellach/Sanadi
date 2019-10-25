import React from 'react';
import { StyleSheet, Text, View, ImageBackground, FlatList } from 'react-native';
import Navigation from "./navigation/Navigation1"
export default class App extends React.Component {
  render() {
    return (

      <Navigation />

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
