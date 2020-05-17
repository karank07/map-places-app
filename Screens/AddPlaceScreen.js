import React, { useState } from 'react';
import { Text, StyleSheet, Button } from 'react-native';
import { ScrollView, TextInput } from 'react-native-gesture-handler';
import { useDispatch } from 'react-redux';

import Color from '../assets/Color/Color';
import * as actions from '../Store/actions';

const AddPlaceScreen = props => {
    const dispatch = useDispatch();
    const [title, setTitle] = useState('');
    const titleInputHandler = (text) => {
        setTitle(text);
    }
    const savePlaceHandler = () => {
        dispatch(actions.addPlace(title));
        props.navigation.goBack();
    }
    return (
        <ScrollView style={styles.screen}>
            <Text>Title</Text>
            <TextInput
                onChangeText={titleInputHandler}
                value={title}
                style={styles.input} />
            <Button
                title='Save'
                color={Color.primary}
                onPress={savePlaceHandler} />
        </ScrollView>
    );
}

AddPlaceScreen.navigationOptions = {
    headerTitle: 'Add Place'
};

const styles = StyleSheet.create({
    screen: {
        margin: 30
    },
    input: {
        borderBottomWidth: 1,
        borderBottomColor: 'black',
        marginVertical: 10
    }
})
export default AddPlaceScreen;