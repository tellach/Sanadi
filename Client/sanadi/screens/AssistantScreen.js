import React from 'react';
import { StyleSheet, Text, View, ImageBackground, FlatList, Image, TouchableOpacity } from 'react-native';


export default class App extends React.Component {
    render() {
        return (
            <View style={styles.container}>
                <Image source={require('./../assets/images/1.png')} style={styles.ImageStyle}/>

            </View>

        );
    }
}


const styles = StyleSheet.create({
    container: {

        //backgroundColor: '#03224c',
        alignItems: 'center',
        justifyContent: 'center',
    },
    ImageStyle: {
        width: 300,
        height: 300,
        alignSelf: "center"


    }
});

