import React from 'react';
import { StyleSheet, Text, View, ImageBackground, FlatList, Image, TouchableOpacity,ScrollView } from 'react-native';


export default class App extends React.Component {
    constructor(props) {
        super(props);
        this.handicapeEmail='fff@gmail.com',
        this.state = {
            askCards:[]            
        }
    }

    _loadAsks(email)
    {
        fetch('http://172.20.10.6:3000/askRoute/getAsk', {
            method: 'POST',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                handicapeEmail: this.handicapeEmail,

            }),
        }).then(response => response.json())
            .then(responseJson => {
                const l = responseJson
                console.log(l)
                this.setState({
                    askCards: l,
                })
            }).catch((error) => {
                console.log("Api call error");
                alert(error.message);
            });
    }


    render() {
        return (
            <View style={styles.container} onLayout={() => this._loadAsks(this.handicapeEmail)}>
                <FlatList
                    data={this.state.askCards}
                    keyExtractor={(item) => item._id.toString()}
                    renderItem={({ item }) =>
                    <View>
                         <Text>item.date</Text>
                         <Text>item.state</Text>
                         <Text>item.region</Text>
                         <TouchableOpacity>
                             <Text>cancel</Text>
                         </TouchableOpacity>
                    </View>}  
                />     
              </View>
              
        )
    }
}

  
const styles = StyleSheet.create({
    container: {
        backgroundColor: '#03224c',
        alignItems: 'center',
        justifyContent: 'center',
        height: 200,
        width: 400
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

