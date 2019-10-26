import React from 'react';
import { StyleSheet, Text, View, ImageBackground, FlatList, Image, TouchableOpacity,ScrollView, TextInput } from 'react-native';


export default class App extends React.Component {
    constructor(props) {
        super(props);
        this.handicapeEmail ='aymen@esi.dz',
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
    _cancelAsk(id){
        console.log(id)
        fetch('http://172.20.10.6:3000/askRoute/cancelAsk/'+id, {  
            method: 'DELETE',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
            },
        }).then(response => response.json())
            .then(responseJson => {
                const l = responseJson
                console.log(l)
            }).catch((error) => {
                console.log("Api call error");
                alert(error.message);
            });
    }


    render() {
        return (
            <View onLayout={() => this._loadAsks(this.handicapeEmail)} style={{
                flex: 1,
                flexDirection: 'column',
                margin: 10}}>
                <View style={styles.header}>
                    <Image style={styles.searchIcon} source={require('../assets/images/searchIcon.png')} />
                    <TextInput style={styles.textInput}
                        keyboardType='default'
                        placeholder='Search ...'
                        placeholderTextColor={'#11459c'}
                    />
                </View>
                <FlatList contentContainerStyle={styles.contentContainer}
                        data={this.state.askCards}
                    keyExtractor={(item) => item._id.toString()}
                    renderItem={({ item }) =>
                    <View style = {styles.container}>  
                        <View style = {{flex: 3}}> 
                            <Text style={styles.text}>{item.Date.substring(0,10)}</Text>
                            <Text style={styles.text}>State : {item.state}</Text>
                            <Text style={styles.text}>Region : {item.region}</Text>
                             <Text style={styles.text}>{item.AssistantEmail}</Text>
                        </View>
                        <View style = {{flex: 1, justifyContent: 'flex-end', alignItems: 'flex-end'}}>
                            <TouchableOpacity style={styles.button} onPress={()=>this._cancelAsk(item._id.toString())}>
                                    <Text style={{ color: '#596DB4',textAlign:'center'}}>cancel</Text>
                            </TouchableOpacity>
                        </View>
                         
                              
                    </View>} 
                     
                /> 
                <TouchableOpacity style={styles.button1} onPress={() => this._loadAsks(this.handicapeEmail)} >
                    <Text style={styles.btntext1}>Refresh </Text>
                </TouchableOpacity>       
              </View>  
              
        )
    }
}

  
const styles = StyleSheet.create({
    container: {
        backgroundColor: 'white',
        height: 100,
        marginRight: 20,
        marginLeft: 20,
        marginTop: 20,
        marginBottom: 5,
        padding: 5,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 7,
        },
        shadowOpacity: 0.41,
        shadowRadius: 9.11,
        elevation: 24,
        borderRadius: 15,
        flexDirection: 'row'
    },
    contentContainer: {
        backgroundColor: '#F2F3F5',
        alignItems: 'stretch'
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
        marginLeft: '40',
        marginTop: 5,
        marginLeft: '13%',
        fontSize: 15,
        color: '#11459c',
        fontWeight: 'bold',     
    },
    button: {
        alignItems: 'center',
        alignSelf: "center",
        backgroundColor: '#e3e1ff',
        borderRadius: 50,
        height: 30,
        width: 70,
        paddingTop: 3,
        shadowColor: "#000000",
        shadowOpacity: 0.5,
        shadowRadius: 1,
        shadowOffset: {
            height: 0.5,
            width: 0    
        }
    },
    btntext1: {
        textAlign: 'center',
        color: '#fff',
        fontWeight: 'bold',
        fontSize: 20,
    }, 
    header: {
        height: '20%',
        alignItems: 'center',
        backgroundColor: 'white',
        borderBottomColor: '#B7B7B7',
        shadowColor: '#2AC062',
        shadowOpacity: 0.4,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 6,
        },
        shadowOpacity: 0.39,
        shadowRadius: 8.30,
        elevation: 13,
    },
    textInput: {
        height: 47,
        width: '80%',
        height: 50,
        position: 'relative',
        marginTop: 15,
        borderWidth: 2,
        fontSize: 14,
        borderColor: '#33D4D1',
        borderRadius: 13,
        paddingLeft: 60
    },
    searchIcon:{
        height: 32,
        width: 26,
        top: 56,
        left: 4,
        marginRight: 250,
        opacity: 0.2
    },
    button1:{
        textAlign: 'center',
        alignItems: 'center',
        alignSelf: "center",
        backgroundColor: '#596DB4',
        marginTop: 15,
        borderRadius: 40,
        height: '10%',
        width: '40%',
        padding: 15,
        shadowColor: "#000000",
        shadowOpacity: 0.5,
        shadowRadius: 1,
        shadowOffset: {
            height: 0.5,
            width: 0
        }
    }
});

