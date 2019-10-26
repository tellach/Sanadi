import React, { Component } from 'react'
import {StyleSheet,View,Text,TouchableOpacity} from 'react-native'

class Project extends Component{

    render(){
        return(
            <View style={styles.container}>
                <Text style={styles.title}>Project one</Text>
                <Text style={styles.description}>Lorem ipsum.jhfyffgglhmihlkjmjkmjmj.abs.abs
                    .khfyufgfgvhlkhfggjgvkjhj.abs.abs....abs
                    ..jkguyfyfkujhmkkjhghgluyggih
                    lhluuhgkygyflj
                    kjglihgb...
                </Text>
                <TouchableOpacity style={styles.button}                    >
                  <Text style={styles.text} >
                      See More
                  </Text>
              </TouchableOpacity>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container:{
        backgroundColor:'white',
        //width:'80%',
        height:220,
        marginRight:20,
        marginLeft:20,
        marginTop:20,
        marginBottom:5,
        padding:5,
        shadowColor: "#000",
        shadowOffset: {
	    width: 0,
        height: 7,
        },
        shadowOpacity: 0.41,
        shadowRadius: 9.11,
        elevation: 24,
        borderRadius:15
    },
    title:{
        /*paddingRight:20,
        paddingBottom:10,
        fontSize:18,
        backgroundColor: '#FFFFFF',
        fontWeight:'bold',*/
        marginLeft:'40',
        marginTop:5,
        marginLeft:'13%',
        fontSize:22,
        color:'#11459c',
        fontWeight:'bold',
        //opacity:0.3
    },
    description:{
        /*fontSize:9,
        paddingBottom:5,
        paddingRight:20,
        backgroundColor: '#FFFFFF',
        fontWeight:'normal',*/
        width:'80%',
        marginLeft:'10%',
        color:'#888888',
        fontSize:14,
        padding:5,
        //opacity:0.3
    },
    button:{
        display: 'flex',
        height: 40,
        borderRadius: 25,
        position:'relative',
        marginTop:14,
        width:'30%',
        marginBottom:16,
        justifyContent:'center',
        alignItems:'center',
        backgroundColor: '#FFDA1A',
        //shadowColor: '#2AC062',
        //shadowOpacity: 0.4,
        //shadowOffset: { height: 10, width: 0 },
        //shadowRadius: 20,
        marginLeft:'60%',
        marginBottom:0,
        shadowColor: '#2AC062',
        shadowOpacity: 0.4,
       //shadowOffset: { height: 10, width: 0 },
       //shadowRadius: 20,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 6,
        },
        shadowOpacity: 0.39,
        shadowRadius: 8.30,
        elevation: 13,
    },
    text:{
        fontSize: 12,
        color: '#FFFFFF',
        paddingLeft:10,
        paddingRight:10
    }
})

export default Project