import React, { Component } from 'react'
import { Text, View, StyleSheet } from 'react-native'
import * as Font from 'expo-font';


export default class Title extends Component {

    constructor(props){
        super(props);
        this.state = {
            fontLoaded : false,
            titleContent : ''
        }
    }

    async componentDidMount(){
        await Font.loadAsync({
            'Lato-Bold' : require('../assets/fonts/Lato-Bold.ttf')
        }).then(()=>{
            this.setState({fontLoaded:true});
        }).catch((err)=>{
            console.log(err);
        });
        this.setState({
            titleContent: this.props.text,
        })
    }

    componentWillReceiveProps(nextProps){
        this.setState({
            titleContent: nextProps.text
        })
    }

    shouldComponentUpdate(nextProps){
        return(
            this.state.titleContent != nextProps.text
        )
    }

    render() {
        return (
            <View>
                {this.state.fontLoaded == true ?(
                    <Text style={styles.styledText}> 
                        {this.state.titleContent}
                    </Text>
                )
                :(
                    <Text>Loading Font ..</Text>
                )}
            </View>
        )
    }
}

//* styling the component
var styles = StyleSheet.create({
    styledText:{
        fontFamily: 'Lato-Bold',
        fontSize: 20,
    }
})