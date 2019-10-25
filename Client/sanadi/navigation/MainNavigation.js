import React from 'react';
import { Image, StyleSheet, View } from 'react-native';
import { createAppContainer, createBottomTabNavigator } from 'react-navigation'
import Navigation2 from "./Navigation2" 
import CancelHelpScreen from "./../screens/CancelHelpScreen"
import HandicapeScreen from "./../screens/HandicapeScreen"
import Home1 from "./../screens/Home1"
import Home2 from "./../screens/Home2"


const AppTabNavigator = createBottomTabNavigator({

    
    Screen1: {
        screen: Home2,
        navigationOptions: {
            title: "HOME",
            tabBarIcon: ({ focused, tintColor }) => {
                
                if(focused)
                {
                     return (
                         <View style = {styles.focusedImageView}>
                             <Image
                                 source = {require('../assets/images/home_b/drawable-hdpi/home.png')}
                                 style = {styles.focusedImage}
                                 />
                         </View>
                         
                     )
                 }else{
                     return (
                         <View style = {styles.styledImageView}>
                             <Image
                                 source = {require('../assets/images/home/drawable-hdpi/home.png')}
                                 style = {styles.styledImage}
                                 />
                         </View>
                     )
                }
            }
            
        }

    },
    Screen2: {
        screen: Navigation2,
        navigationOptions: {
            title: "ASSISTANT",
            tabBarIcon: ({ focused, tintColor }) =>{
                
                if(focused)
                {
                     return (
                         <View style = {styles.focusedImageView}>
                             <Image
                                 source = {require('../assets/images/handicap_b/drawable-hdpi/handicap.png')}
                                 style = {styles.focusedImage}
                                 />
                         </View>
                         
                     )
                 }else{
                     return (
                         <View style = {styles.styledImageView}>
                             <Image
                                 source = {require('../assets/images/handicap/drawable-hdpi/handicap.png')}
                                 style = {styles.styledImage}
                                 />
                         </View>
                     )
                }
             }
        }
    },

    Screen3: {
        screen: Home2,
        navigationOptions: {
            title: "LOCATION",
            tabBarIcon: ({ focused, tintColor }) => {
                
                if(focused)
                {
                    return (
                         <View style = {styles.focusedImageView}>
                             <Image
                                 source = {require('../assets/images/place_b/drawable-hdpi/place.png')}
                                 style = {styles.focusedImage}
                                 />
                         </View>
                         
                    )
                }else{
                    return (
                         <View style = {styles.styledImageView}>
                             <Image
                                 source = {require('../assets/images/place/drawable-hdpi/place.png')}
                                 style = {styles.styledImage}
                                 />
                         </View>
                    )
                }
             }
        }
    }

},
    {
        tabBarOptions: {
            showLabel: false,
            activeTintColor: '#000',
            inactiveTintColor: 'red',
            activeBackgroundColor: 'white',
            inactiveBackgroundColor: 'white',
            style:{
                height: 70,
            }
        }
    }
)

var styles = StyleSheet.create({
    styledImageView:{
        width: '100%',
        height: '100%',
        borderTopColor: '#EEEDFD',
        borderTopWidth: 5
    },
    focusedImageView:{
        width: '100%',
        height: '100%',
        borderTopColor: '#33D4D1',
        borderTopWidth: 5
    },
    styledImage:{
        marginTop: 18,
        width: 30,
        height: 30,    
        alignSelf: 'center' 
    },
    focusedImage:{
        marginTop:10,
        margin: 12,
        width: 30,
        height: 30,
        alignSelf: 'center'
    }
})

export default createAppContainer(AppTabNavigator);