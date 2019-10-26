import React, { Component } from 'react';
import { Text, View, StyleSheet, Image, TouchableOpacity } from 'react-native';
import Title from './Title';
import SubTitle from './SubTiTle';
import ButtonTitle from './ButtonTitle';
import calendar from '../assets/icons/calendar/drawable-hdpi/calendar.png';
import location from ''

export default class EventCard extends Component {

    constructor(props){
        super(props);
        this.state = {
            eventName : '',
            eventLocation : '',
            eventDate : '',
        }
    }

    componentWillMount(){
        this.setState({
            eventName : this.props.name,
            eventLocation : this.props.location,
            eventDate : this.props.date,
        })
    }

    componentWillReceiveProps(nextProps){
        this.setState({
            eventName : nextProps.name,
            eventLocation : nextProps.location,
            eventDate : nextProps.date,
        });
    }

    shouldComponentUpdate(nextProps){
        return(
            this.state.eventName == nextProps.name &&
            this.state.eventLocation == nextProps.location &&
            this.state.eventDate == nextProps.date
        )
    }

    componentDidMount(){
        console.log("completely useless");
    }

    componentDidUpdate(){
        console.log("also completely useless");
    }
    
    render() {
        return (
            <View style = {styles.container}> 
                <Title style = {styles.eventNameStyle} text = {this.state.eventName}/>
                <View style = {styles.itemStyle}>
                    <Image source = {calendar}/>
                    <SubTitle text = {this.state.eventDate}/>
                </View>
                <View style = {styles.itemStyle}>
                    <Image source = {require('../assets/icons/location/drawable-hdpi/location.png')}/>
                    <SubTitle text = {this.state.eventLocation}/>
                </View> 
                <View style={{flexDirection: 'row'}}>
                    <View style = {styles.buttonGroupStyle}>
                        <TouchableOpacity style = {styles.keepMeUpdatedStyle}>
                            <ButtonTitle text = "Keep me updated"/>
                        </TouchableOpacity>
                        <TouchableOpacity style = {styles.moreDetailsStyle}>
                            <ButtonTitle text = "More details"/>
                        </TouchableOpacity>       
                    </View>
                    <View style = {styles.linksStyle}>
                        <TouchableOpacity>
                                <Image 
                                    style = {styles.linkStyle}
                                    source={require('../assets/icons/attachment/drawable-hdpi/attachment.png')}/>
                        </TouchableOpacity>
                    </View>
                </View>
                                       
            </View>
        )
    }
}


var styles = StyleSheet.create({
    container:{
        backgroundColor: '#FFFFFF',
        shadowOffset: {
            width: 10,
            height: 10
        },
        shadowColor: '#00000029',
        shadowOpacity: 1.0,
        height: 250,
        width: '90%',
        padding: 20,
        borderRadius: 10,
        alignItems: 'flex-start',
        justifyContent: 'space-around',
    },
    itemStyle:{
        flexDirection: 'row',
        color: '#313131',
    },
    eventNameStyle:{
        color: '#313131',
    }, 
    buttonGroupStyle:{
        flexDirection: 'row',
        justifyContent: 'space-between',
        flex: 5,

    },
    keepMeUpdatedStyle:{
        backgroundColor: '#2C4EFE',
        padding: 12,
    },
    moreDetailsStyle:{
        backgroundColor: '#7DC65B',
        padding: 12,
        marginLeft: 10
    },
    linksStyle:{
        alignItems: 'center',
        justifyContent: 'flex-end',
        flex: 2,
        flexDirection: 'row',
    },
    linkStyle:{
        /*width: 20,
        height: undefined,
        aspectRatio: 1,*/    
    }
    
})
