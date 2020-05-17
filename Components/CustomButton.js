import React from 'react';
import { TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import Color from '../assets/Color/Color';

const CustomButton = (props) => {
    return (
        <TouchableOpacity onPress={props.onPress} activeOpacity={0.6}>
            <Ionicons name={props.iconName} size={24} color={Color.primary} />
        </TouchableOpacity>
    );
}

export default CustomButton;