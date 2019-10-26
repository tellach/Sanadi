import React from 'react';
import { StyleSheet, Text, View, ImageBackground, FlatList, Image, TouchableOpacity, DatePickerIOS ,ScrollView} from 'react-native';
import RNPickerSelect from 'react-native-picker-select';
import DatePicker from 'react-native-datepicker'



export default class App extends React.Component {
    constructor(props) { 
        super(props)
        this.RequestState = "waiting" 
        this.handicapeEmail = "aymen@esi.dz"
        this.state = {
            region: "Region",
            Date: ""
        }
      }  

    _addHelp(){
        fetch('http://172.20.10.6:3000/askRoute/askAssistance1', {
            method: 'POST',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
            },      
            body: JSON.stringify({
                handicapeEmail: this.handicapeEmail,
                state: this.RequestState,
                region: this.state.region,
                Date:this.state.date,
            }),
        }).then(response => response.json())
            .then(responseJson => {
                const rep = responseJson;
                console.log(rep)
                alert("Ask assistance saved")

            }).catch((error) => {   
                console.log("Api call error");
                alert(error.message);
            });

    }
    render() {
        return (
            <View style={styles.container}>
                <Image source={require('../assets/images/2.png')} style={styles.ImageStyle} resizeMode="contain"
                    resizeMethod="resize" />
                <View style={styles.textinput}>
                    <RNPickerSelect
                        placeholderTextColor={'#596DB4'}
                        placeholder={{
                            label: 'Choose your region :',  
                            value: null,    
                            color: '#596DB4',  
                            fontSize:22,
                            marginLeft:-50
                        }}
                        onValueChange={(value) => this.setState({ region: value })}
                        value={this.state.region}
                        items={[
                            { itemKey: '1', label: 'ALGER', value: 'alger' },
                            { itemKey: '2', label: 'ORAN', value: 'oran' },
                            { itemKey: '3', label: 'BLIDA', value: 'blida' },
                        ]}
                    />
                </View>
                <View style={styles.textinput}>
                    <DatePicker
                        style={{}}
                        showIcon={false}
                        date={this.state.date}
                        mode="date"
                        placeholder="Choose the time and date:"
                        format="YYYY-MM-DD"
                        confirmBtnText="Confirm"
                        cancelBtnText="Cancel"
                        customStyles={{
                            placeholderText: { color: '#596DB4', marginLeft: -40 },
                            dateInput: {
                                placeholderTextColor: '#596DB4',
                                borderWidth: 0,
                                marginLeft: -10,


                            }

                            // ... You can check the source to find the other keys.
                        }}
                        onDateChange={(date) => { this.setState({ date: date }) }}
                    />
                </View>
                <TouchableOpacity style={styles.button} onPress={() => this._addHelp()} >
                    <Text style={styles.btntext1}>Confirm </Text>
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
        width: 350,
        height: 280,
        marginLeft: '5%',
        marginRight: '5%',
        marginTop: '0%',
        marginBottom: '8%',
        alignSelf: "center"
    },
    text:{
        textAlign: 'center',
        fontSize: 22,
        color: '#596DB4',
        //paddingBottom: 30,
        borderBottomWidth: 1,
        fontWeight: 'bold',
        marginBottom:15
    },
    button:{
        textAlign:'center',
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
    },
    btntext1:{
        textAlign: 'center',
        color: '#fff',
        fontWeight: 'bold',
        fontSize:20,
        
    },
    textinput:{
        //flex:1,
        padding: 0,
        paddingVertical:5,
        paddingHorizontal:60,
        marginBottom: 15,
        borderColor: '#596DB4',
        borderBottomWidth: 2,
        borderRadius: 0,
        width: '70%',
        height: '10%',
        justifyContent: 'center',
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 1 },
        shadowOpacity: 0.2,
        shadowRadius: 100, 
        
    }

    
});

