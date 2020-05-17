import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import PlacesListScreen from '../Screens/PlacesListScreen';
import PlaceDetailsScreen from '../Screens/PlaceDetailsScreen';

import Color from '../assets/Color/Color';
import AddPlaceScreen from '../Screens/AddPlaceScreen';
import MapScreen from '../Screens/MapScreen';

const devNavOptions = {
    headerStyle: {
        backgroundColor: Platform.OS === 'android' ? Color.primary : '',
    },
    headerTintColor: Platform.OS === 'android' ? 'white' : Color.primary,

}

const PlacesNavigator = createStackNavigator({
    PlacesList: PlacesListScreen,
    PlaceDetails: PlaceDetailsScreen,
    AddPlace: AddPlaceScreen,
    Map: MapScreen
}, {
    defaultNavigationOptions: devNavOptions
})

export default createAppContainer(PlacesNavigator);