import React from 'react';
import { StyleSheet, Text, View, ImageBackground, FlatList, Image } from 'react-native';
import HandicapeScreen from "./../screens/HandicapeScreen"
import CancelScreen from "./../screens/CancelHelpScreen" 
import { createStackNavigator, createAppContainer, createBottomTabNavigator } from 'react-navigation'

const AppStackNavigator = createStackNavigator({
    Screen1: {
        screen: HandicapeScreen,
        navigationOptions: {
            header: null,
            headerLeft: null,
            gesturesEnabled: false,
        }

    },
    Screen2: {
        screen: CancelScreen,
        navigationOptions: {

            header: null,
            headerLeft: null,
            gesturesEnabled: false,
        }

    },
})

export default createAppContainer(AppStackNavigator);
