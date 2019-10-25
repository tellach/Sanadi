import React from 'react';
import { StyleSheet, Text, View, ImageBackground, FlatList, Image, TouchableOpacity } from 'react-native';


export default class App extends React.Component {
    render() {
        const { navigation } = this.props;

        return (
            <View style={styles.container}>
                <Image source={require('./../assets/images/3.png')} style={styles.ImageStyle} resizeMode="contain"
                    resizeMethod="resize" />
                <Text style={styles.text} >Lorem ipsum dolor sit amet,</Text>
                <Text style={styles.text}> tota magna in ius.</Text>
                <Text style={styles.text}>Assum salutatus mea ut, ferri</Text>
                <TouchableOpacity style={styles.button} onPress={() => this.props.navigation.navigate('Screen1')} >
                    <Text style={styles.btntext1}>Cancel </Text>
                </TouchableOpacity>
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
        width: 400,
        height: 350,
        marginLeft: '5%',
        marginRight: '5%',
        marginTop: '1%',
        marginBottom: '10%',
        alignSelf: "center"
    },
    text: {
        textAlign: 'center',
        fontSize: 22,
        color: '#596DB4',
        //paddingBottom: 30,
        borderBottomWidth: 1,
        fontWeight: 'bold',      
    },
    button: {
        alignItems: 'center',
        alignSelf: "center",
        backgroundColor: '#f0f3f0',
        marginTop: 40,
        borderRadius: 50,
        height: 60,
        width: 190,
        padding: 15,
        shadowColor: "#000000",
        shadowOpacity: 0.5,
        shadowRadius: 1,
        shadowOffset: {
            height: 0.5,
            width: 0
        }
    },
    btntext1: {
        color: '#596DB4',
        fontWeight: 'bold',
        fontSize: 20,
    }


});

