import React from 'react';
import { TouchableOpacity, Text, View, Image, StyleSheet } from 'react-native';

const PlacesList = props => {
    return (
    <TouchableOpacity onPress={props.onPress}>
        <View style={styles.container}>
            <Image source={{ uri: props.imgUrl }} style={styles.img} />
            <View style={styles.details}>
                <Text>{props.title}</Text>
                <Text>{props.address}</Text>
            </View>
        </View>
    </TouchableOpacity>);
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        height:200,
        width: '100%',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center'
    },
    img: {
        height: '100%',
        width: '100%',
        borderRadius: 10

    },
    details: {
        flexDirection: 'column'
    }

});
export default PlacesList;