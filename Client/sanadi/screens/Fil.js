import React from 'react'
import {StyleSheet, View, TextInput,Image, FlatList} from 'react-native'
import Project from './Project'

class Fil extends React.Component{

    render(){
        return(
            <View style={styles.container}>
                <View style={styles.header}>
                    <TextInput style={styles.textInput}
                                    keyboardType='default'
                                    placeholder='Search ...'
                                    placeholderTextColor={'#11459c'}  
                            />
                </View>
                    <FlatList contentContainerStyle={styles.contentContainer}>
                        <View style={{flexDirection:'column', alignItems:'stretch'}}>
                            <Project />
                            <Project />
                            <Project />
                            <Project />
                            <Project />
                            <Project />
                        </View>
                    </FlatList>                       
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container:{
        flex : 1,
        flexDirection:'column',
        //#F2F3F5
        //opacity:0.2
    },
    header :{
        height:'20%',
        alignItems:'center',
        backgroundColor:'white',
        borderBottomColor:'#B7B7B7',
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
    contentContainer:{
      //flex:1,
      backgroundColor:'#F2F3F5',//'#C0C0C0'
      //justifyContent:'stretc2h',
      alignItems:'stretch'
      //zIndex:18000,
      //  backgroundColor: '#B0B0B0',
    },
    searchIcon:{
        height:32,
        width:26,
        top:76,
        left:0,
        marginRight:250,
        opacity:0.2
    },
    textInput:{
      /*position:'absolute',
      width:'80%',
      height:50,
      marginTop:90,
      fontSize:14,
      borderRadius: 20,
      backgroundColor: '#F2F3F5',
      color:'black',      
      borderWidth:0,
      paddingLeft:65,*/
      height:47,
        width:'80%',
        height:50,
        position:'relative',
        marginTop:35,
          borderWidth: 2,
          fontSize:14,
           //borderRadius: 20,
           borderColor:'#11459c',
            borderRadius:13,
            paddingLeft:60
    },
    /*project:{
        backgroundColor:'white',
        //width:'80%',
        height:150,
        marginRight:20,
        marginLeft:20,
        marginTop:20,
        marginBottom:10,
        padding:8,
        shadowColor: "#000",
        shadowOffset: {
	width: 0,
	height: 7,
},
shadowOpacity: 0.41,
shadowRadius: 9.11,
elevation: 24,
    }*/
})

export default Fil