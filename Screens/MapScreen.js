import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const MapScreen = () => {
    return (
        <View style={styles.screen}>
            <Text>PlacesList</Text>
        </View>);
}
const styles = StyleSheet.create({
    screen: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    }
})
export default MapScreen;