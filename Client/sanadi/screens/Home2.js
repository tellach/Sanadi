import React from 'react';
import MapView from 'react-native-maps';
import { StyleSheet, Text, View, Dimensions, } from 'react-native';

export default class App extends React.Component {
    
    constructor(props){
        super(props);
          
    }

    render() {
        var markers = [
            {
                latitude: 36.775361,
                longitude: 3.060188,
                title: 'Foo Place',
                subtitle: '1234 Foo Drive'
            }
        ];
        return (
            <View style={styles.container}>
                <MapView 
                    style={styles.mapStyle} 
                    initialRegion={{
                        latitude: 36.775361,
                        longitude: 3.060188,
                        latitudeDelta: 0.015,
                        longitudeDelta: 0.0121

                    }}
                    >
                    <MapView.Marker
                        coordinate={{
                            latitude: 36.775361,
                            longitude: 3.060188
                        }}
                        title={"Restaurant Pink Panther"}
                        description={"Tacos M,Tacos L,Tacos XL,Tacos XXL,Pizza,"}
                    />
                    </MapView>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    mapStyle: {
        width: Dimensions.get('window').width,
        height: Dimensions.get('window').height,
    },
});
