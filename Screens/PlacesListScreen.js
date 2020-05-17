import React from 'react';
import { View, Text, StyleSheet, Button, FlatList } from 'react-native';
import CustomButton from '../Components/CustomButton';
import { useSelector } from 'react-redux';
import PlacesList from '../Components/PlacesList';

const PlacesListScreen = props => {
    const places = useSelector(state => state.places.places);
    const renderList = (itemData) => {
        return <Text>{itemData.item.title}</Text>
    }
    return (
        <View style={styles.screen}>
            <FlatList
                data={places}
                keyExtractor={item => item.id}
                renderItem={itemData =>
                    <PlacesList
                        title={itemData.item.title}
                        onPress={() => props.navigation.navigate('PlaceDetails', {
                            id: itemData.item.id,
                            title: itemData.item.title
                        })}
                        imgUrl={'https://www.google.com/search?q=mont+royal&source=lnms&tbm=isch&sa=X&ved=2ahUKEwjQypPTnbnpAhW5l3IEHRprCYcQ_AUoAnoECBoQBA&biw=1230&bih=872#imgrc=hzSvJ2KbK2xg5M'}
                        address={null}
                    />} />

        </View>);
}

PlacesListScreen.navigationOptions = navData => {
    return {
        headerTitle: 'List Of Places',
        headerRight: () => <CustomButton iconName='ios-add' onPress={() => navData.navigation.navigate('AddPlace')} />,
        headerRightContainerStyle: {
            marginHorizontal: 10
        }
    }

}

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    }
})
export default PlacesListScreen;