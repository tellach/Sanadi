import React from 'react';
import { StyleSheet, Text, View, ImageBackground, FlatList, } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { createStackNavigator, createAppContainer, createBottomTabNavigator } from 'react-navigation'
import AssistantScreen from "./../screens/AssistantScreen"
import Home1 from "./../screens/Home1"
import Home2 from "./../screens/Home2"
const AppTabNavigator = createBottomTabNavigator({

    Screen1: {
        screen: Home1,
        navigationOptions: {
            title: "INFO",
            tabBarIcon: ({ focused, tintColor }) => (

                <Icon
                    name="info"
                    size={30}
                    focused={focused}
                    tintColor={tintColor}

                />
            )
        }

    },
    Screen2: {
        screen: AssistantScreen,
        navigationOptions: {
            title: "LIGNE",
            tabBarIcon: ({ focused, tintColor }) => (
                <Icon
                    name="list"
                    size={30}
                    focused={focused}
                    tintColor={tintColor}
                />
            )
        }
    },

    Screen3: {
        screen: Home2,
        navigationOptions: {
            title: "LIGNE",
            tabBarIcon: ({ focused, tintColor }) => (
                <Icon
                    name="list"
                    size={30}
                    focused={focused}
                    tintColor={tintColor}
                />
            )
        }
    }

},
    {
        tabBarOptions: {
            showLabel: false,
            showIcon: true,
            activeTintColor: 'black',
            inactiveTintColor: 'grey',
            activeBackgroundColor: 'white',
            inactiveBackgroundColor: '#004A99',
        }
    })
export default createAppContainer(AppTabNavigator);
